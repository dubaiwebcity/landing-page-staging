'use client';

import React, { useMemo, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type ReferralFormData = {
  referTo: '' | 'Bnoon – Jeddah' | 'Bnoon – Riyadh' | 'Bnoon – Al Ahsa';

  physicianName: string;
  physicianPhone: string;
  physicianEmail: string; // optional
  healthcareFacilityName: string; // optional
  organizationCity: string; // dropdown (Arabic cities)

  patientName: string;
  patientPhone: string;
  gender: '' | 'Male' | 'Female';

  reasons: string[]; // mandatory (at least one)
  medicalReason: string; // optional
  recaptcha: string; // mandatory
};

const AppointmentSection = () => {
  const [formData, setFormData] = useState<ReferralFormData>({
    referTo: '',

    physicianName: '',
    physicianPhone: '',
    physicianEmail: '',
    healthcareFacilityName: '',
    organizationCity: '',

    patientName: '',
    patientPhone: '',
    gender: '',

    reasons: [],
    medicalReason: '',
recaptcha: '',
  });
const [submitted, setSubmitted] = useState(false);
  const messageRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState<React.ReactNode>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
const fieldRefs = {
  referTo: useRef<HTMLDivElement>(null),
  physicianName: useRef<HTMLDivElement>(null),
  physicianPhone: useRef<HTMLDivElement>(null),
  patientName: useRef<HTMLDivElement>(null),
  patientPhone: useRef<HTMLDivElement>(null),
};
const isEmpty = (field: keyof ReferralFormData) => {
  const value = formData[field];
  if (Array.isArray(value)) return value.length === 0;
  return !value;
};

const isInvalid = (field: keyof ReferralFormData) => {
  if (!submitted) return false;
  return isEmpty(field);
};
const scrollToField = (ref?: React.RefObject<HTMLElement>) => {
  if (!ref?.current) return;

  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });

  const el =
    ref.current.querySelector('input, textarea, select') ||
    ref.current;

  if (el) {
    setTimeout(() => (el as HTMLElement).focus(), 300);
  }
};
  const REASONS = useMemo(
    () => [
      'Consultation',
      'Genetic Testing (PGT-A/PGT-M)',
      'IVF/ICSI',
      'Unexplained Infertility',
      'Male Factor Infertility',
      'Ovulation Induction',
      'Previous Vasectomy',
      'Fertility Preservation for Medical Reason',
      'Recurrent Pregnancy Loss',
      'Other',
    ],
    [],
  );

  const SAUDI_CITIES = useMemo(
    () => [
      'Riyadh',
      'Jeddah',
      'Makkah',
      'Madinah',
      'Dammam',
      'Khobar',
      'Dhahran',
      'Al Ahsa',
      'Qatif',
      'Jubail',
      'Taif',
      'Abha',
      'Khamis Mushait',
      'Jazan',
      'Najran',
      'Al Baha',
      'Buraidah',
      'Unaizah',
      'Hail',
      'Tabuk',
      'Sakakah',
      'Arar',
      'Yanbu',
      'Al Qunfudhah',
      'Ar Rass',
      'Zulfi',
      'Wadi ad-Dawasir',
      'Bisha',
      'Al Qurayyat',
      'Rabigh',
      'Al Kharj',
    ],
    [],
  );

  const scrollToMessage = () => {
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  };

  const setField = <K extends keyof ReferralFormData>(key: K, value: ReferralFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleReason = (reason: string) => {
    setFormData((prev) => {
      const exists = prev.reasons.includes(reason);
      return {
        ...prev,
        reasons: exists ? prev.reasons.filter((r) => r !== reason) : [...prev.reasons, reason],
      };
    });
  };



  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setSubmitted(true); 

  const requiredFields: (keyof ReferralFormData)[] = [
    'referTo',
    'physicianName',
    'physicianPhone',
    'patientName',
    'patientPhone',
  ];

  const firstInvalid = requiredFields.find((f) => isEmpty(f));

if (firstInvalid) {
  scrollToField(fieldRefs[firstInvalid as keyof typeof fieldRefs]);
  return;
}

    setMessage(null);
    setShowThankYou(false);

 



    try {
      setSubmitting(true);

      const res = await fetch('/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          (data?.errors && Array.isArray(data.errors) && data.errors.join(', ')) ||
          data?.message ||
          'Submission failed. Please try again.';
        setMessage(
          <div className="alert alert-danger text-start" role="alert">
            {msg}
          </div>,
        );
        scrollToMessage();
        return;
      }

      setMessage(
        <>
          <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
               <h2>Thank you for referring your patient to us.</h2>
              </div>
            </div>

            <div className="left">
              <p >
           We sincerely appreciate your trust and ongoing collaboration. <br />
We will contact the patient within 24 – 48 hours and will keep you updated as appropriate.  </p></div>
          </div>
        </div>
        </>,
      );
      setShowThankYou(true);
      scrollToMessage();

      // ✅ reset only existing fields (district/dateOfBirth removed)
      setFormData({
        referTo: '',
        physicianName: '',
        physicianPhone: '',
        physicianEmail: '',
        healthcareFacilityName: '',
        organizationCity: '',
        patientName: '',
        patientPhone: '',
        gender: '',
        reasons: [],
        medicalReason: '',
        recaptcha: '',
      });

      scrollToMessage();
    } catch {
      setMessage(
        <div className="alert alert-danger text-start" role="alert">
          Network error. Please try again.
        </div>,
      );
      scrollToMessage();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fertility-area mt-3 text-center mb-3">
      <div className="container">
        {!showThankYou && (
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
               
              </div>
            </div>

            <div className="left">
              <p >
           Thank you for placing your trust in Bnoon. Kindly complete the form below,<br />
and a member of our healthcare team will contact the patient promptly to support and facilitate the next steps in their care.  </p></div>
          </div>
        </div>
 )}
        {/* FORM START */}
        {!showThankYou && (
          <form
            onSubmit={handleSubmit}
            className="appointment-form text-start mx-auto refer-form"
            style={{ maxWidth: '1000px' }}
          >
            {/* Refer to */}
                <div className="card p-3 mb-3" ref={fieldRefs.referTo}>
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 gap-md-5">
                <h6 className="mb-0 form-label text-size">Refer to: 
                 <span style={{padding: '0px 0px 0px 8px', color: isInvalid('referTo') ? 'red' : 'black' }}>*</span>
                {isInvalid('referTo') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
    please fill all required fileds
    </span>
  )}</h6>

                <div className="d-flex flex-column flex-md-row gap-2 gap-md-5">
                  {(['Bnoon – Jeddah', 'Bnoon – Riyadh', 'Bnoon – Al Ahsa'] as const).map(
                    (branch) => (
                      <label
                        key={branch}
                        className="form-check-label mb-0 d-flex align-items-center"
                      >
                        <input
                          type="radio"
                          name="referTo"
                          className="form-check-input me-2"
                          value={branch}
                          checked={formData.referTo === branch}
                          onChange={(e) =>
                            setField('referTo', e.target.value as ReferralFormData['referTo'])
                          }
                        />
                        {branch}
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Referring Physician Information */}
            <h5 className="mb-3 text-size title-size">Referring Physician Information</h5>
            <div className="card p-3 mb-3" >
              <div className="mb-3" ref={fieldRefs.physicianName}>
                <label className="form-label text-size">Physician Name    <span style={{padding: '0px 0px 0px 8px', color: isInvalid('physicianName') ? 'red' : 'black' }}>*</span>
                {isInvalid('physicianName') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
    please fill all required fileds
    </span>
  )}</label>
                <input
                  className="form-control"
                  value={formData.physicianName}
                  onChange={(e) => setField('physicianName', e.target.value)}
                  type="text"
                  
                />
              </div>

              <div className="mb-3" ref={fieldRefs.physicianPhone}>
                <label className="form-label text-size">Phone <span style={{padding: '0px 0px 0px 8px', color: isInvalid('physicianPhone') ? 'red' : 'black' }}>*</span>
                {isInvalid('physicianPhone') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
    please fill all required fileds
    </span>
  )}</label>
                <input
                  className="form-control"
                  value={formData.physicianPhone}
                  onChange={(e) => setField('physicianPhone', e.target.value)}
                  type="tel"
                  
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-size">Email Address</label>
                <input
                  className="form-control"
                  value={formData.physicianEmail}
                  onChange={(e) => setField('physicianEmail', e.target.value)}
                  type="email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-size">Healthcare Facility Name</label>
                <input
                  className="form-control"
                  value={formData.healthcareFacilityName}
                  onChange={(e) => setField('healthcareFacilityName', e.target.value)}
                  type="text"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-size">Organization City</label>
                <select
                  className="form-select form-control"
                  value={formData.organizationCity}
                  onChange={(e) => setField('organizationCity', e.target.value)}
                >
                  <option value="">Select City</option>

                  {SAUDI_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Referred Patient Information */}
            <h5 className="mb-3 text-size title-size">Referred Patient Information</h5>
            <div className="card p-3 mb-3" >
              <div className="mb-3" ref={fieldRefs.patientName}>
                <label className="form-label text-size">Patient Name <span style={{padding: '0px 0px 0px 8px', color: isInvalid('patientName') ? 'red' : 'black' }}>*</span>
                {isInvalid('patientName') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
    please fill all required fileds
    </span>
  )}</label>
                <input
                  className="form-control"
                  value={formData.patientName}
                  onChange={(e) => setField('patientName', e.target.value)}
                  type="text"
                />
              </div>

              <div className="mb-3" ref={fieldRefs.patientPhone}>
                <label className="form-label text-size">Patient Phone <span style={{padding: '0px 0px 0px 8px', color: isInvalid('patientPhone') ? 'red' : 'black' }}>*</span>
                {isInvalid('patientPhone') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
    please fill all required fileds
    </span>
  )}</label>
                <input
                  className="form-control"
                  value={formData.patientPhone}
                  onChange={(e) => setField('patientPhone', e.target.value)}
                  type="tel"
                />
              </div>

              <div className="mb-2">
                <label className="form-label d-block text-size">Gender</label>
                <div className="d-flex gap-4 flex-wrap">
                  <label className="form-check-label mb-0">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      name="gender"
                      checked={formData.gender === 'Male'}
                      onChange={() => setField('gender', 'Male')}
                     
                    />
                    Male
                  </label>

                  <label className="form-check-label mb-0">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      name="gender"
                      checked={formData.gender === 'Female'}
                      onChange={() => setField('gender', 'Female')}
                     
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>

            {/* Reason for Referring */}
            <h5 className="mb-3 text-size title-size">Reason for Referring</h5>
            <div className="card p-3 mb-3">
              <div className="row">
                {REASONS.map((r) => (
                  <div className="mb-2" key={r}>
                    <label className="form-check-label">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        checked={formData.reasons.includes(r)}
                        onChange={() => toggleReason(r)}
                       
                      />
                      {r}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <label className="form-label text-size">Insert the medical reason (optional)</label>
                <textarea
                  className="form-control"
                  rows={4}
                  value={formData.medicalReason}
                  onChange={(e) => setField('medicalReason', e.target.value)}
                  placeholder="Write medical reason..."
                />
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="my-3">
                <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(value: string | null) => setField('recaptcha', value || '')}
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary feedback-btn btn-large mt-3"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
        {message && (
          <div ref={messageRef} className="form-message">
            {message}
          </div>
        )}

        {/* FORM END */}
      </div>
      <style jsx>{`
         /* Hard override: affects only the referral form, not navbar or global layout */
  
      `}</style>
    </div>
  );
};

export default AppointmentSection;
