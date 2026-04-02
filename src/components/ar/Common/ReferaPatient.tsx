"use client";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
type FieldRefs = {
  [key in keyof FormData]?: React.RefObject<HTMLElement>;
};
type FormData = {
  // Branch
  branch: string;
  // Referring Physician
  referringPhysicianName: string;
  referringPhysicianPhone: string;
  referringPhysicianEmail: string;
  facilityName: string;
  organizationCity: string;
  // Patient
  patientName: string;
  patientPhone: string;
  gender: string;
  // Reason
  reason: string;
  otherReasonText: string;
  // reCAPTCHA
recaptcha: string | null;
};
const SAUDI_CITIES = [
  "الرياض",
  "جدة",
  "مكة المكرمة",
  "المدينة المنورة",
  "الدمام",
  "الخبر",
  "الظهران",
  "الأحساء",
  "القطيف",
  "الجبيل",
  "الطائف",
  "أبها",
  "خميس مشيط",
  "جازان",
  "نجران",
  "الباحة",
  "بريدة",
  "عنيزة",
  "حائل",
  "تبوك",
  "سكاكا",
  "عرعر",
  "ينبع",
  "القنفذة",
  "الرس",
  "الزلفي",
  "وادي الدواسر",
  "بيشة",
  "القريات",
  "رابغ",
  "الخرج",
];



const AppointmentSection = () => {
  const [formData, setFormData] = useState<FormData>({
    branch: "",

    referringPhysicianName: "",
    referringPhysicianPhone: "",
    referringPhysicianEmail: "",
    facilityName: "",
    organizationCity: "",
    patientName: "",
    patientPhone: "",
    gender: "",
    reason: "",
    otherReasonText: "",
recaptcha: null,
  });
  const fieldRefs = {
    branch: useRef<HTMLInputElement>(null),
    referringPhysicianName: useRef<HTMLInputElement>(null),
    referringPhysicianPhone: useRef<HTMLInputElement>(null),
    patientName: useRef<HTMLInputElement>(null),
    patientPhone: useRef<HTMLInputElement>(null),
    // ...add more if needed
  };
  const messageRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState<React.ReactNode>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    if (message && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [message]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);




  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const isFieldInvalid = (field: keyof FormData) =>
    submitted && !String(formData[field] ?? "").trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage(null);

    const requiredFields: (keyof FormData)[] = [
      "branch",
      "referringPhysicianName",
      "referringPhysicianPhone",
      "patientName",
      "patientPhone",

    ];

    const firstInvalid = requiredFields.find(
      (field) => !formData[field]?.trim()
    );

    if (firstInvalid) {
      const ref = fieldRefs[firstInvalid as keyof typeof fieldRefs]; // <--- change yahi
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        (ref.current as HTMLElement).focus?.(); // optional
      }
      return;
    }


    try {
      setSubmitting(true);

      const response = await fetch("/api/referrals-ar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({} as any));

      if (!response.ok) {
        const errMsg = data?.error ? ` ${data.error}` : "";
        setMessage(
          <div className="alert alert-danger text-end" role="alert">
            ❌ فشل الإرسال.{errMsg}
          </div>
        );

        return;
      }

      setShowThankYou(true);
      setMessage(
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2
                  ref={headerRef}
                  className={`left animate-left ${headerVisible ? "show" : ""}`}
                >
                  شكراً لتحويل المريض إلينا.
                </h2>
              </div>
            </div>

            <div className="left">
              <p className="text-center">
                سنقوم بالتواصل مع المريض/المريضة خلال 24 إلى 48 ساعة، وسنبقى على تواصل معكم بشأن الحالة عند الحاجة.
                <br />شاكرين ثقتكم ونتطلع للتعاون معكم دوماً.
              </p>
            </div>
          </div>
        </div>
      );

      setSubmitted(false);

      setFormData({
        branch: "",
        referringPhysicianName: "",
        referringPhysicianPhone: "",
        referringPhysicianEmail: "",
        facilityName: "",
        organizationCity: "",
        patientName: "",
        patientPhone: "",
        gender: "",
        reason: "",
        otherReasonText: "",
recaptcha: null,
      });


    } catch (error) {
      console.error(error);
      setMessage(
        <div className="alert alert-danger text-end" role="alert">
          ❌ حدث خطأ. الرجاء المحاولة لاحقاً.
        </div>
      );

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fertility-area mt-3 text-center mb-3" lang="ar" dir="rtl">
      <div className="container">
        {!showThankYou && (
          <div className="section-title">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-12 col-md-12">
                <div className="left">
                  <h2
                    ref={headerRef}
                    className={`left animate-left ${headerVisible ? "show" : ""}`}
                  >

                  </h2>
                </div>
              </div>

              <div className="left">
                <p className="text-center">
                  نشكركم على ثقتكم بنا وتحويل المريض لغرض الخصوبة.
                  <br />
                  يرجى تعبئة النموذج أدناه، وسيقوم أحد أعضاء فريقنا بالتواصل مع المريض خلال فترة وجيزة لتقديم المساعدة وحجز الموعد المطلوب.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* FORM START */}
        <div className="">
          {!showThankYou && (
            <form
              onSubmit={handleSubmit}
              className="appointment-form refer-form mx-auto"
              style={{ maxWidth: "1000px", direction: "rtl", textAlign: "right" }}
            >
              {/* التحويل إلى */}
              <div className="card p-3 mb-3" ref={fieldRefs.branch}>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center flex-wrap gap-3 gap-md-4">
                  <h6 className="mb-0 form-label form-label-space text-size">التحويل إلى: <span style={{ padding: '0px 8px 0px 0px', color: isFieldInvalid('branch') ? 'red' : 'black' }}>*</span>
                    {isFieldInvalid('branch') && (
                      <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                        يرجى ملء جميع الحقول المطلوبة
                      </span>
                    )}</h6>

                  <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 gap-sm-3 gap-md-4 flex-wrap">
                    {['بنـــون – جدة', 'بنـــون – الرياض', 'بنـــون – الأحساء'].map((b) => (
                      <label key={b} className="form-check-label form-lable mb-0 d-flex align-items-center">
                        <input
                          type="radio"
                          name="branch"
                          className={`form-check-input ms-2 `}
                          value={b}
                          checked={formData.branch === b}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              branch: (e.target as HTMLInputElement).value,
                            }))

                          }
                        />
                        {b}
                      </label>
                    ))}
                  </div>
                </div>


              </div>

              {/* معلومات الطبيب المحوّل */}
              <h5 className="mb-3 text-size title-size">معلومات الطبيب المحوّل</h5>
              <div className="card p-3 mb-3">
                <div className="mb-3" ref={fieldRefs.referringPhysicianName}>
                  <label className="form-label text-size">اسم الطبيب <span style={{ padding: '0px 8px 0px 0px', color: isFieldInvalid('referringPhysicianName') ? 'red' : 'black' }}>*</span>
                    {isFieldInvalid('referringPhysicianName') && (
                      <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                        يرجى ملء جميع الحقول المطلوبة
                      </span>
                    )}</label>
                  <input
                    className={`form-control ${isFieldInvalid("referringPhysicianName") ? "is-invalid" : ""}`}
                    name="referringPhysicianName"
                    value={formData.referringPhysicianName}
                    onChange={handleChange}
                    type="text"

                    style={{ direction: "rtl", textAlign: "right" }}
                  />
                </div>

                <div className="mb-3" ref={fieldRefs.referringPhysicianPhone}>
                  <label className="form-label text-size">رقم الهاتف <span style={{ padding: '0px 8px 0px 0px', color: isFieldInvalid('referringPhysicianPhone') ? 'red' : 'black' }}>*</span>
                    {isFieldInvalid('referringPhysicianPhone') && (
                      <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                        يرجى ملء جميع الحقول المطلوبة
                      </span>
                    )}</label>
                  <input
                    className={`form-control ${isFieldInvalid("referringPhysicianPhone") ? "is-invalid" : ""}`}
                    name="referringPhysicianPhone"
                    value={formData.referringPhysicianPhone}
                    onChange={handleChange}
                    type="tel"

                    style={{ direction: "rtl", textAlign: "right" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-size">البريد الإلكتروني </label>
                  <input
                    className={`form-control `}
                    name="referringPhysicianEmail"
                    value={formData.referringPhysicianEmail}
                    onChange={handleChange}
                    type="email"
                    style={{ direction: "rtl", textAlign: "right" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-size">اسم المنشأة الطبية</label>
                  <input
                    className="form-control"
                    name="facilityName"
                    value={formData.facilityName}
                    onChange={handleChange}
                    type="text"
                    style={{ direction: "rtl", textAlign: "right" }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-size">المدينة</label>
                  <select
                    className="form-select form-control"
                    name="organizationCity"
                    value={formData.organizationCity}
                    onChange={handleChange}
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    <option value="">اختر المدينة</option>
                    {SAUDI_CITIES.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>




              </div>

              {/* معلومات المريض */}
              <h5 className="mb-3 text-size title-size">معلومات المريض</h5>
              <div className="card p-3 mb-3">
                <div className="mb-3" ref={fieldRefs.patientName}>
                  <label className="form-label text-size">اسم المريض/المريضة <span style={{ padding: '0px 8px 0px 0px', color: isFieldInvalid('patientName') ? 'red' : 'black' }}>*</span>
                    {isFieldInvalid('patientName') && (
                      <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                        يرجى ملء جميع الحقول المطلوبة
                      </span>
                    )}</label>
                  <input
                    className={`form-control ${isFieldInvalid("patientName") ? "is-invalid" : ""}`}
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    type="text"
                    style={{ direction: "rtl", textAlign: "right" }}
                  />
                </div>

                <div className="mb-3" ref={fieldRefs.patientPhone}>
                  <label className="form-label text-size">رقم الهاتف <span style={{ padding: '0px 8px 0px 0px', color: isFieldInvalid('patientPhone') ? 'red' : 'black' }}>*</span>
                    {isFieldInvalid('patientPhone') && (
                      <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                        يرجى ملء جميع الحقول المطلوبة
                      </span>
                    )}</label>
                  <input
                    className={`form-control ${isFieldInvalid("patientPhone") ? "is-invalid" : ""}`}
                    name="patientPhone"
                    value={formData.patientPhone}
                    onChange={handleChange}
                    type="tel"
                    style={{ direction: "rtl", textAlign: "right" }}
                  />
                </div>


                <div className="mb-0">
                  <label className="form-label text-size d-block">الجنس</label>
                  <div className="d-flex gap-4 flex-wrap">
                    {["ذكر", "أنثى"].map((g) => (
                      <label key={g} className="form-check-label form-lable mb-0 d-flex align-items-center">
                        <input
                          className={`form-check-input ms-2`}
                          type="radio"
                          name="gender"
                          checked={formData.gender === g}
                          onChange={() =>
                            setFormData((prev) => ({ ...prev, gender: g }))
                          }
                        />
                        {g}
                      </label>
                    ))}
                  </div>


                </div>
              </div>

              {/* السبب الطبي للتحويل */}
              <h5 className="mb-3 text-size title-size" >السبب الطبي للتحويل</h5>
              <div className="card p-3 mb-3">
                <div className="row">
                  {[
                    "استشارة طبية",
                    "الفحوصات الجينية للأجنة قبل الإرجاع (PGT-A / PGT-M)",
                    "الحقن المجهري وأطفال الأنابيب (IVF)",
                    "تأخر الحمل الغير مفسّر",
                    "العقم المرتبط بالرجل",
                    "تنشيط الإباضة",
                    "قطع القناة المنوية سابقاً",
                    "حفظ الخصوبة لأسباب طبية",
                    "الإجهاض المتكرر",
                    "أسباب أخرى",
                  ].map((r) => (
                    <div className=" mb-2" key={r}>
                      <label className="form-check-label form-lable mb-0 d-flex align-items-center">
                        <input
                          className={`form-check-input ms-2`}
                          type="radio"
                          name="reason"
                          value={r}
                          checked={formData.reason === r}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              reason: (e.target as HTMLInputElement).value,
                            }))
                          }
                        />
                        {r}
                      </label>
                    </div>
                  ))}
                </div>




                <div className="mt-3">
                  <label className="form-label text-size fw-bold">
                    الرجاء تحديد السبب الطبي
                  </label>
                  <textarea
                    className={`form-control ${submitted && !formData.otherReasonText.trim() ? "is-invalid" : ""}`}
                    name="otherReasonText"
                    value={formData.otherReasonText}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, otherReasonText: e.target.value }))
                    }
                    rows={4}
                    style={{ direction: "rtl", textAlign: "right" }}
                  />
                </div>

              </div>

              {/* reCAPTCHA */}
              <div className="my-3 d-flex ">
  <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              hl="ar"
              onChange={(value: string | null) =>
                setFormData((prev) => ({ ...prev, recaptcha: value }))
              }
            />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-blog feedback-btn btn-large mt-3"
                  disabled={submitting}
                >
                  {submitting ? "..." : "إرسال"}
                </button>
              </div>

              {/* Mid-form message (EN form style) */}
              {message && !showThankYou && (
                <p ref={messageRef} className="form-message mt-3">
                  {message}
                </p>

              )}


            </form>
          )}

          {/* ✅ success message only (form hidden) */}
          {showThankYou && message && (
            <p ref={messageRef} className="form-message">
              {message}
            </p>

          )}
        </div>
        {/* FORM END */}
      </div>
      <style jsx>{`
 
      `}</style>
    </div>
  );
};

export default AppointmentSection;
