import { connectDB } from "../../../lib/mongodb";
import ReferralEN from "../../../models/ReferralEN";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // ✅ DB connect + save
    await connectDB();
    const saved = await ReferralEN.create(data);

    // ✅ Recipient mapping based on selected branch
    const RECIPIENTS = {
      "Bnoon – Jeddah": "referral.jeddah@bnoon.sa",
      "Bnoon – Riyadh": "referral.riyadh@bnoon.sa",
      "Bnoon – Al Ahsa": "referral.alahsa@bnoon.sa",
    };

    // default fallback (optional)
    const recipient = RECIPIENTS[data?.referTo] || "referral.jeddah@bnoon.sa";

    // ✅ Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Email body
    await transporter.sendMail({
      from: `"Referral Request" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: `New Patient Referral - Website (${data.referTo || "N/A"})`,
html: `
<h3>Referral Details</h3>

<p><b>Refer To:</b> ${data.referTo || "-"}</p>

<h4>Referring Physician Information</h4>

<p><b>Physician Name:</b> ${data.physicianName}</p>
<p><b>Physician Phone:</b> ${data.physicianPhone}</p>

${data.physicianEmail ? `<p><b>Physician Email:</b> ${data.physicianEmail}</p>` : ""}

${data.healthcareFacilityName ? `<p><b>Healthcare Facility:</b> ${data.healthcareFacilityName}</p>` : ""}

${data.organizationCity ? `<p><b>Organization City:</b> ${data.organizationCity}</p>` : ""}


<h4>Referred Patient Information</h4>

<p><b>Patient Name:</b> ${data.patientName}</p>
<p><b>Patient Phone:</b> ${data.patientPhone}</p>

${data.gender ? `<p><b>Gender:</b> ${data.gender}</p>` : ""}


<h4>Reason(s) for Referring</h4>

<p><b>Selected Reasons:</b> ${
  data.reasons?.length ? data.reasons.join(", ") : "-"
}</p>


${data.medicalReason ? `
<h4>Medical Reason</h4>
<p>${data.medicalReason.replace(/\n/g, "<br/>")}</p>
` : ""}

`,
    });

    return Response.json(
      { success: true, message: "Saved & email sent successfully!", savedId: saved?._id },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ API Error:", error);
    return Response.json(
      { success: false, error: error.message || "Server error" },
      { status: 500 }
    );
  }
}
