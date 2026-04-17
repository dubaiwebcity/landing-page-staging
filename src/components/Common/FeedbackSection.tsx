'use client';

import React, { useState, useEffect, useRef } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { MailIcon, LocationIcon } from '@/components/icons';
import ReCAPTCHA from 'react-google-recaptcha';
const FeedbackSection = () => {
  // Form data ka state
  const [formData, setFormData] = useState({
    branch: '',
    name: '',
    phone: '',
    email: '',
    rating: '',
    story: '',
    feedbackType: [] as string[],
    feedbackDetails: '',
      recaptcha: '',
    consent: false,
  });

  // Field refs for scroll/focus
  const fieldRefs: { [K in keyof typeof formData]?: React.RefObject<any> } = {
    branch: useRef<HTMLDivElement>(null),
    name: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    rating: useRef<HTMLDivElement>(null),
    feedbackType: useRef<HTMLDivElement>(null),
    feedbackDetails: useRef<HTMLTextAreaElement>(null),
    consent: useRef<HTMLInputElement>(null),
    recaptcha: useRef<HTMLDivElement>(null),
  };

  const [submitted, setSubmitted] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
const [isLoading, setIsLoading] = useState(false);
  // Header animation
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
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

  // Form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation check
  const isFieldInvalid = (field: keyof typeof formData) => {
    if (!submitted) return false;

    const value = formData[field];
    if (Array.isArray(value)) return value.length === 0; // checkbox array
    if (typeof value === 'boolean') return !value; // consent checkbox
    return !value;
  };

  // Form submit
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isLoading) return; // ✅ block multiple clicks

  setSubmitted(true);

  const requiredFields: (keyof typeof formData)[] = [
    'branch',
    'name',
    'phone',
    'email',
    'rating',
    'feedbackType',
    'feedbackDetails',
    'recaptcha',
    'consent',
  ];

  const firstInvalid = requiredFields.find((field) => isFieldInvalid(field));

  if (firstInvalid) {
    const ref = fieldRefs[firstInvalid];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if ('focus' in ref.current) (ref.current as HTMLElement).focus();
    }
    return;
  }

  // ✅ START loading here
  setIsLoading(true);

  try {
    const res = await fetch('/api/send-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSubmittedSuccessfully(true);
      setStatusMessage('✅ Aapka feedback receive ho gaya! Shukriya!');

      setFormData({
        branch: '',
        name: '',
        phone: '',
        email: '',
        rating: '',
        story: '',
        feedbackType: [],
        feedbackDetails: '',
        recaptcha: '',
        consent: false,
      });

      setSubmitted(false);
    }
  } catch (err) {
    console.error('Submit error:', err);
    setStatusMessage('❌ Something went wrong');
  } finally {
    setIsLoading(false); // ✅ ALWAYS stop loading
  }
};

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        {!submittedSuccessfully && (
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div ref={headerRef} className={`left animate-left ${headerVisible ? 'show' : ''}`}>
                <h2>Submit Feedback</h2>
              </div>
            </div>
            <div className="left">
              <p>
                At Bnoon, we’re committed to exceptional care. We truly value your input — it
                enables us to grow, exceed expectations, and enhance the patient-centered experience
                we aim to provide.
              </p>
              <div className="d-flex align-items-center mb-2">
                <MailIcon
                  width={24}
                  height={24}
                  className="me-2"
                  style={{ color: 'rgb(0,78,120)' }}
                />
                <p className="mb-0">Fill out the form below to rate your experience.</p>
              </div>
              <div className="d-flex align-items-center">
                <LocationIcon
                  width={24}
                  height={24}
                  className="me-2"
                  style={{ color: 'rgb(0,78,120)' }}
                />
                <p>Or share your feedback at feedback@bnoon.sa</p>
              </div>
              <p>
                Want to share your story? We'd love to hear it — and with your permission, we may
                feature it on our social media to inspire other couples trying to conceive. Email us
                or fill it below.
              </p>
              <p>
                <strong>Thank you for being part of the Bnoon family. </strong>
              </p>
              <p>Please take a moment to share your feedback by filling the below survey:</p>
            </div>
          </div>
        </div>
)}
        {/* FORM START */}
        <div className="d-flex justify-content-center align-items-center mb-5 pbt-140">
          {!submittedSuccessfully && (
          <form
            onSubmit={handleSubmit}
            className="w-100 appointment-form"
            style={{ maxWidth: '750px' }}
          >
            {/* Branch */}
            <div className="custom-dropdown mb-3" ref={fieldRefs.branch} style={{ position: 'relative' }}>
              <label className="form-label">
                Select Branch{' '}
                <span style={{ color: isFieldInvalid('branch') ? 'red' : 'black' }}>*</span>
                {isFieldInvalid('branch') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
      please fill all required fileds
    </span>
  )}
              </label>

              {/* Button */}
              <button
                type="button"
                className={`form-control ${isFieldInvalid('branch') ? 'is-invalid' : ''}`}
                onClick={() => setIsOpen((prev) => !prev)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between', // text left, arrow right
                  color: formData.branch ? '#000' : '#808080',
                  padding: '6px 12px',
                }}
              >
                <span>{formData.branch || 'Select branch'}</span>

                <OptimizedImage
                  imageName="arrow"
                  alt="arrow"
                  style={{ width: '16px', height: '16px' }}
                />
              </button>

              {/* Dropdown List */}
              {isOpen && (
                <ul
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    border: '1px solid #ccc',
                    background: '#fff',
                    zIndex: 20,
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    borderRadius: '4px',
                  }}
                >
                  {['Riyadh', 'Jeddah', 'Al Ahsa'].map((branch) => (
                    <li
                      key={branch}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, branch }));
                        setIsOpen(false);
                      }}
                      style={{
                        padding: '8px',
                        cursor: 'pointer',
                        background: formData.branch === branch ? '#004E78' : '#fff',
                        color: formData.branch === branch ? '#fff' : '#212529',
                      }}
                    >
                      {branch}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Patient’s Name */}
            <div className="mb-3" ref={fieldRefs.name}>
              <label className="form-label">
                Patient’s Name{' '}
                <span style={{ color: isFieldInvalid('name') ? 'red' : 'black' }}>*</span>
                 {isFieldInvalid('name') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
      please fill all required fileds
    </span>
  )}
              </label>
              <input
                type="text"
                className={`form-control ${isFieldInvalid('name') ? 'is-invalid' : ''}`}
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Patient’s Phone */}
            <div className="mb-3" ref={fieldRefs.phone}>
              <label className="form-label">
                Patient’s Phone No.{' '}
                <span style={{ color: isFieldInvalid('phone') ? 'red' : 'black' }}>*</span>
                  {isFieldInvalid('phone') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
      please fill all required fileds
    </span>
  )}
              </label>
              <input
                type="text"
                className={`form-control ${isFieldInvalid('phone') ? 'is-invalid' : ''}`}
                name="phone"
                placeholder="Enter phone no."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3" ref={fieldRefs.email}>
              <label className="form-label">
                Email Address{' '}
                <span style={{ color: isFieldInvalid('email') ? 'red' : 'black' }}>*</span>
                 {isFieldInvalid('email') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
      please fill all required fileds
    </span>
  )}
              </label>
              <input
                type="email"
                className={`form-control ${isFieldInvalid('email') ? 'is-invalid' : ''}`}
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Rating */}
            <div className="mb-3" ref={fieldRefs.rating}>
              <label className="form-label">
                Overall Rating{' '}
                <span style={{ color: isFieldInvalid('rating') ? 'red' : 'black' }}>*</span>
                 {isFieldInvalid('rating') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
      please fill all required fileds
    </span>
  )}
              </label>
              <br />
              <small className="form-text text-muted">
                Based on your experience today, how likely are you to recommend Bnoon to your
                friends and family? On a scale of 1–10 where 10 is the highest.
              </small>

              <div className="d-flex flex-wrap gap-2 mt-2">
                {[...Array(10)].map((_, i) => (
                  <div className="form-check form-check-inline" key={i + 1}>
                    <input
                      className={`form-check-input ${isFieldInvalid('rating') ? 'is-invalid' : ''}`}
                      type="radio"
                      name="rating"
                      id={`rating-${i + 1}`}
                      value={i + 1}
                      checked={formData.rating === String(i + 1)}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={`rating-${i + 1}`}>
                      {i + 1}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Story */}
            <div className="mb-3" >
              <label className="form-label">Share your Story</label>
              <br />
              <small className="form-text text-muted">
                If you’d like to share your story, please do so below. Your information will remain
                confidential and will only be shared publicly with your consent. Your story could
                offer hope and inspiration to other couples trying to conceive.
              </small>
              <textarea
                className="form-control"
                name="story"
                rows={4}
                placeholder="Please type here..."
                value={formData.story}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Type of Feedback */}
            <div className="mb-3" ref={fieldRefs.feedbackType}>
              <label className="form-label">
                Type of Feedback{' '}
               
                <span style={{ color: isFieldInvalid('feedbackType') ? 'red' : 'black' }}>*</span>
                 {isFieldInvalid('feedbackType') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
      please fill all required fileds
    </span>
  )}
              </label>
              <div className="d-flex gap-3 flex-wrap">
                {['Service', 'Doctor', 'Facilities', 'Other'].map((type) => (
                  <div key={type} className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className={`form-check-input ${
                        isFieldInvalid('feedbackType') ? 'is-invalid' : ''
                      }`}
                      id={`feedback-${type}`}
                      value={type}
                      checked={formData.feedbackType.includes(type)}
                      onChange={(e) => {
                        const { value, checked } = e.target;
                        setFormData((prev) => {
                          if (checked) {
                            return {
                              ...prev,
                              feedbackType: [...prev.feedbackType, value],
                            };
                          } else {
                            return {
                              ...prev,
                              feedbackType: prev.feedbackType.filter((item) => item !== value),
                            };
                          }
                        });
                      }}
                    />
                    <label className="form-check-label" htmlFor={`feedback-${type}`}>
                      {type}
                    </label>
                  </div>
                ))}
              </div>
             
            </div>

            {/* Feedback Details */}
            <div className="mb-3" >
              <label className="form-label">
                Patient's Feedback Details{' '}
                <span
                  style={{
                    color: isFieldInvalid('feedbackDetails') ? 'red' : 'black',
                  }}
                >
                  *
                </span>
                  {isFieldInvalid('feedbackDetails') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
      please fill all required fileds
    </span>
  )}
              </label>
              <textarea
              ref={fieldRefs.feedbackDetails} 
                className={`form-control ${isFieldInvalid('feedbackDetails') ? 'is-invalid' : ''}`}
                name="feedbackDetails"
                rows={4}
                placeholder=""
                value={formData.feedbackDetails}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Consent */}
            <div className="mb-3 form-check">
              <input
              ref={fieldRefs.consent}
                type="checkbox"
                className={`form-check-input ${submitted && !formData.consent ? 'is-invalid' : ''}`}
                id="consent"
                name="consent"
                checked={formData.consent || false}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    consent: e.target.checked,
                  }))
                }
              />
              <label className="form-check-label" htmlFor="consent">
                By filling this form, you agree to Bnoon’s Privacy Policy, and you give us
                permission to contact you to discuss your feedback.
              </label>
            </div>
           <div className="my-3" ref={fieldRefs.recaptcha}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(value: string | null) =>
                  setFormData((prev) => ({ ...prev, recaptcha: value || '' }))
                }
              />
            </div>
            <div className="d-flex justify-content-center mt-3">
  <button
    type="submit"
    disabled={isLoading}
    className="btn btn-primary btn-large feedback-btn"
  >
    {isLoading ? 'Submitting...' : 'Submit'}
  </button>
</div>
            {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
          </form>
          )}

{statusMessage && submittedSuccessfully && (
  <div className="d-flex justify-content-center align-items-center" style={{  textAlign: 'center' }}>
  <div className="section-title">
    <div className="row justify-content-center align-items-center g-4">
      <div className="col-lg-12 col-md-12">
        <div className="left">
          <h2 ref={headerRef} className={`left  ${headerVisible ? 'show' : ''}`}>
            Thank you for taking the time to share your feedback with us.
          </h2>
        </div>
      </div>
      <div className="left">
        <p>
          We truly value your insights, as they help us continuously improve and provide the highest standard of care. 
          <br/>
          We appreciate your trust and look forward to supporting you throughout your journey. 
        </p>
      </div>
    </div>
  </div>
</div>
)}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
