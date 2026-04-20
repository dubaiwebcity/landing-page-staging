import { connectDB } from "../../../lib/mongodb";
import ReferralAR from "../../../models/ReferralAR";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const requiredFields = [
       "branch",
      "referringPhysicianName",
      "referringPhysicianPhone",
      "patientName",
      "patientPhone",
      "recaptcha",
    ];

    const hasEmpty = requiredFields.some((f) => !String(data?.[f] ?? "").trim());
    if (hasEmpty) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    await connectDB();
    const saved = await ReferralAR.create(data);

    // ✅ Recipient mapping based on selected branch (Arabic form)
   const RECIPIENTS = {
  "بنـــون – جدة": "referral.jeddah@bnoon.sa",
  "بنـــون – الرياض": "referral.riyadh@bnoon.sa",
  "بنـــون – الأحساء": "referral.alahsa@bnoon.sa",
};

    // default fallback (optional)
    const recipient = RECIPIENTS[data?.branch] || "referral.jeddah@bnoon.sa";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"طلب تحويل مريض" <${process.env.SMTP_USER}>`,
      to: recipient, // ✅ dynamic
      replyTo: data.referringPhysicianEmail,
      subject: `طلب تحويل مريض - ${data.branch || "N/A"} - ${data.patientName || ""}`,
  html: `
<div dir="rtl" style="font-family: Arial, sans-serif; line-height:1.8">
  <h3>تفاصيل طلب تحويل مريض</h3>

  <p><b>التحويل إلى:</b> ${data.branch}</p>

  <h4>معلومات الطبيب المحوّل</h4>

  <p><b>اسم الطبيب:</b> ${data.referringPhysicianName}</p>
  <p><b>رقم الهاتف:</b> ${data.referringPhysicianPhone}</p>

  ${data.referringPhysicianEmail ? `
    <p><b>البريد الإلكتروني:</b> ${data.referringPhysicianEmail}</p>
  ` : ""}

  ${data.facilityName ? `
    <p><b>اسم المنشأة الطبية:</b> ${data.facilityName}</p>
  ` : ""}

  ${data.organizationCity ? `
    <p><b>المدينة:</b> ${data.organizationCity}</p>
  ` : ""}

  <h4>معلومات المريض</h4>

  <p><b>اسم المريض/المريضة:</b> ${data.patientName}</p>
  <p><b>رقم الهاتف:</b> ${data.patientPhone}</p>

  ${data.gender ? `
    <p><b>الجنس:</b> ${data.gender}</p>
  ` : ""}

  ${(data.reason && data.reason !== "أسباب أخرى") ? `
    <h4>السبب الطبي للتحويل</h4>
    <p><b>السبب:</b> ${data.reason}</p>
  ` : ""}

  ${data.reason === "أسباب أخرى" && data.otherReasonText ? `
    <h4>السبب الطبي للتحويل</h4>
    <p><b>تفاصيل أخرى:</b> ${data.otherReasonText.replace(/\n/g, "<br/>")}</p>
  ` : ""}
</div>
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
