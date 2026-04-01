'use client';

import React, { useState, useEffect, useRef } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { MailIcon, LocationIcon } from '@/components/icons';
const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    branch: '',
    name: '',
    phone: '',
    email: '',
    rating: '',
    story: '',
    feedbackType: [] as string[],
    feedbackDetails: '',
    recaptcha: null as string | null, // ⭐ FIXED
    consent: false,
  });
const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // inside FeedbackSection
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
const fieldRefs: { [K in keyof typeof formData]?: React.RefObject<HTMLElement> } = {
  branch: useRef<HTMLDivElement>(null),
  name: useRef<HTMLInputElement>(null),
  phone: useRef<HTMLInputElement>(null),
  email: useRef<HTMLInputElement>(null),
  rating: useRef<HTMLDivElement>(null),
  feedbackType: useRef<HTMLDivElement>(null),
  feedbackDetails: useRef<HTMLTextAreaElement>(null),
  consent: useRef<HTMLInputElement>(null),
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);
const isFieldInvalid = (field: keyof typeof formData) => {
  if (!submitted) return false;
  return isFieldEmpty(field);
};
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const isFieldEmpty = (field: keyof typeof formData) => {
  const value = formData[field];
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'boolean') return !value;
  return !value;
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const firstInvalidField = Object.keys(fieldRefs).find(
    (key) => isFieldEmpty(key as keyof typeof formData)
  );
const scrollToField = (ref?: React.RefObject<HTMLElement>) => {
  if (!ref?.current) return;

  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });

  // find actual input inside
  const el = ref.current.querySelector(
    'input, textarea, select, button'
  ) as HTMLElement | null;

  if (el) {
    setTimeout(() => el.focus(), 300); // wait for scroll
  }
};
  if (firstInvalidField) {
    setSubmitted(true); // yahan set karo AFTER validation

scrollToField(fieldRefs[firstInvalidField as keyof typeof formData]);
    setStatusMessage('');
    return;
  }

  setSubmitted(true);
   // ✅ reCAPTCHA validation
    if (!formData.recaptcha) {
      setStatusMessage('❌ Please verify reCAPTCHA before submitting');
      return; // stop form submission
    }
    try {
      const res = await fetch('/api/send-feedback-ar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

   if (res.ok) {
      setIsSuccess(true); // ✅ yahan hona chahiye

      setStatusMessage('!Thank you for your valuable feedback');

      setFormData({
        branch: '',
        name: '',
        phone: '',
        email: '',
        rating: '',
        story: '',
        feedbackType: [],
        feedbackDetails: '',
        recaptcha: null as string | null, // ⭐ FIXED
        consent: false,
      });

      setSubmitted(false);
    }
  } catch (error) {
    setStatusMessage('❌ لم يتم الإرسال. تحقق من اتصالك بالإنترنت.');
  }
};

  return (
    <div className="fertility-area mt-5">
      <div className="container">
         {!isSuccess ? (
        <>
          {/* HEADER */}
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div ref={headerRef} className={`left animate-left ${headerVisible ? 'show' : ''}`}>
                <h2>شاركونا تجربتكم </h2>
              </div>
            </div>
            <div className="left">
              <p>
                {' '}
                في بنون، نحرص على تقديم رعاية استثنائية تتمحور حولكم. آراؤكم مهمة جداً بالنسبة لنا —
                فهي تساعدنا على التطور، وتجاوز التوقعات، وتعزيز جودة التجربة التي نطمح لتقديمها لكل
                مريض۔
              </p>
              <div className="d-flex align-items-center mb-2">
                <MailIcon
                  width={24}
                  height={24}
                  className=""
                  style={{ color: 'rgb(0,78,120)', margin: '0px 0px 0px 8px', }}
                />
                <p className="mb-0"> يمكنكم تقييم تجربتكم عبر النموذج أدناه </p>
              </div>
              <div className="d-flex align-items-center">
                <LocationIcon
                  width={24}
                  height={24}
                  className=""
                  style={{ color: 'rgb(0,78,120)', margin: '0px 0px 0px 8px', }}
                />
                <p> أو مراسلتنا على feedback@bnoon.sa </p>
              </div>
              <p className="mt-3">
                هل ترغبون بمشاركة قصتكم ورحلتكم العلاجية؟ قصتكم قد تكون مصدر أمل وإلهام لأزواج آخرين
                يمرون برحلة مشابهة. نرحّب بمشاركتكم، ومع موافقتكم، قد ننشرها على منصاتنا لتصل لمن
                يحتاجها۔
              </p>
            </div>
          </div>
        </div>
         
        <div className="d-flex justify-content-center align-items-center mb-5 pbt-140">
         
          <form
            onSubmit={handleSubmit}
            className="w-100 appointment-form"
            style={{ maxWidth: '750px' }}
          >
            {/* all your existing fields stay exactly same */}
            {/* Branch */}

            <div className="custom-dropdown mb-4" style={{ position: 'relative' }}>
              <label className="form-label">الفرع 
               <span style={{padding: '0px 8px 0px 0px', color: isFieldInvalid('branch') ? 'red' : 'black' }}>*</span>
                {isFieldInvalid('branch') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
     يرجى ملء جميع الحقول المطلوبة
    </span>
  )}
              </label>
              <button
              ref={fieldRefs.branch as React.RefObject<HTMLButtonElement>}
                type="button"
                className={`form-control ${isFieldInvalid('branch') ? 'is-invalid' : ''}`}
                onClick={() => setIsOpen((prev) => !prev)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between', // text left, icon right
                  textAlign: 'right', // keeps Arabic text aligned right
                  color: formData.branch ? '#000' : '#808080',
                  padding: '6px 12px',
                }}
              >
                <span>{formData.branch || 'اختر الفرع'}</span>
                {/* Arrow icon on right */}
                <OptimizedImage imageName="arrow" alt="arrow" />
              </button>

              {isOpen && (
                <ul
                  className="dropdown-list"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    border: '1px solid #020202ff',
                    background: '#fff',
                    zIndex: 10,
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {['الرياض', 'جدة', 'الأحساء'].map((b) => (
                    <li
                      key={b}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, branch: b }));
                        setIsOpen(false);
                      }}
                      style={{
                        padding: '8px',
                        cursor: 'pointer',
                        background: formData.branch === b ? '#004E78' : '#fff',
                        color: formData.branch === b ? '#fff' : ' rgb(33, 37, 41)',
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Patient’s Name */}
            <div className="mb-4" ref={fieldRefs.name}>
              <label className="form-label">اسم المريض/المريضة 
                  <span style={{padding: '0px 8px 0px 0px', color: isFieldInvalid('name') ? 'red' : 'black' }}>*</span>
                {isFieldInvalid('name') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
     يرجى ملء جميع الحقول المطلوبة
    </span>
  )} </label>
              <input
                type="text"
                className={`form-control ${isFieldInvalid('name') ? 'is-invalid' : ''}`}
                name="name"
                placeholder="اسم المريض/المريضة "
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Patient’s Phone */}
            <div className="mb-4" ref={fieldRefs.phone}>
              <label className="form-label">رقم الجوال  
               <span style={{padding: '0px 8px 0px 0px', color: isFieldInvalid('phone') ? 'red' : 'black' }}>*</span>
                {isFieldInvalid('phone') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
     يرجى ملء جميع الحقول المطلوبة
    </span>
  )} </label>
              <input
                type="text"
                className={`form-control ${isFieldInvalid('phone') ? 'is-invalid' : ''}`}
                name="phone"
                placeholder="رقم الجوال"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-4" ref={fieldRefs.email}>
              <label className="form-label">البريد الإلكتروني  
                 <span style={{padding: '0px 8px 0px 0px', color: isFieldInvalid('email') ? 'red' : 'black' }}>*</span>
                {isFieldInvalid('email') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
     يرجى ملء جميع الحقول المطلوبة
    </span>
  )}
  </label>
              <input
                type="email"
                className={`form-control ${isFieldInvalid('email') ? 'is-invalid' : ''}`}
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Overall Rating */}
            <div className="mb-4" ref={fieldRefs.rating}>
              <label className="form-label">تقييم عام   <span style={{padding: '0px 8px 0px 0px', color: isFieldInvalid('rating') ? 'red' : 'black' }}>*</span>
                {isFieldInvalid('rating') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
     يرجى ملء جميع الحقول المطلوبة
    </span>
  )}</label>
              <br />
              <small className="form-text text-muted mb-2">
                بناءً على تجربتكم، ما مدى احتمال أن توصي ب "بنون" لعائلتك أو أصدقائك ؟ من 1 إلى 10،
                حيث 10 هو الأعلى
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

            {/* Share your story */}
            <div className="mb-4" >
              <label className="form-label">شاركوا قصتكم معنا</label> <br />
              <small className="form-text text-muted mb-2">
                إذا رغبتم في مشاركة تجربتكم، يمكنكم كتابتها هنا. خصوصيتكم محفوظة، ولن يتم نشر أي
                معلومات إلا بموافقتكم. قصتكم قد تمنح الأمل وتلهم آخرين في رحلتهم نحو الإنجاب۔
              </small>
              <textarea
                className="form-control"
                name="story"
                rows={4}
                placeholder=""
                value={formData.story}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Type of Feedback */}
            <div className="mb-4" ref={fieldRefs.feedbackType}>
              <label className="form-label">نوع الملاحظة 
               <span style={{padding: '0px 8px 0px 0px', color: isFieldInvalid('feedbackType') ? 'red' : 'black' }}>*</span>
                {isFieldInvalid('feedbackType') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
     يرجى ملء جميع الحقول المطلوبة
    </span>
  )}
              </label>
              <div className="d-flex gap-3 flex-wrap">
                {['شكوى', 'ملاحظة عامة', 'اقتراح'].map((type) => (
                  <div key={type} className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className={`form-check-input ${isFieldInvalid('feedbackType') ? 'is-invalid' : ''}`}
                      id={`feedback-${type}`}
                      value={type}
                      checked={formData.feedbackType.includes(type)}
                      onChange={(e) => {
                        const { value, checked } = e.target;
                        setFormData((prev) => {
                          if (checked) {
                            return { ...prev, feedbackType: [...prev.feedbackType, value] };
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
              {isFieldInvalid('feedbackType') && <div className="invalid-feedback d-block"></div>}
            </div>

            {/* Feedback Details */}
            <div className="mb-4" ref={fieldRefs.feedbackDetails}>
              <label className="form-label">تفاصيل الملاحظة  
                <span style={{padding: '0px 8px 0px 0px', color: isFieldInvalid('feedbackDetails') ? 'red' : 'black' }}>*</span>
                {isFieldInvalid('feedbackDetails') && (
    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
     يرجى ملء جميع الحقول المطلوبة
    </span>
  )}</label>
              <textarea
                className={`form-control ${isFieldInvalid('feedbackDetails') ? 'is-invalid' : ''}`}
                name="feedbackDetails"
                rows={4}
                placeholder=""
                value={formData.feedbackDetails}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* Consent Checkbox */}
            <div className="mb-4 form-check" ref={fieldRefs.consent}>
              <input
                type="checkbox"
                className={`form-check-input ${submitted && !formData.consent ? 'is-invalid' : ''}`}
                id="consent"
                name="consent"
                checked={formData.consent || false}
                onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
              />
              <label className="form-check-label feedback-lable" htmlFor="consent">
                من خلال تعبئة هذا النموذج، فإنك توافق على سياسة الخصوصية الخاصة ببنون، وتسمح لنا
                بالتواصل معك لمتابعة ملاحظاتك إن لزم الأمر۔
              </label>
            </div>

            <div className="my-3">
                <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                hl="ar"
                onChange={(value: string | null) =>
                  setFormData((prev) => ({
                    ...prev,
                    recaptcha: value,
                  }))
                }
              />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary btn-blog btn-large feedback-btn">
                إرسال
              </button>
            </div>
            {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
          </form>
           </div>
           </>
          ) : (
      <div className="section-title ">
          <div className="row justify-content-center align-items-center text-center">
  <div className="row justify-content-center align-items-center">
    
   <div className="col-lg-12 col-md-12">
              <div ref={headerRef} className={`left animate-left ${headerVisible ? 'show' : ''}`}>
                <h2>شكراً لمشاركتكم ملاحظاتكم معنا. </h2>
              </div>
            </div>

      <p className="mt-3 align-items-center text-center mb-3">
        نحن نُقدّر آرائكم واهتمامكم، حيث تُسهم بشكل مباشر في استمرار تطوير خدماتنا وتقديم أعلى مستويات الرعاية.
        <br />
        نثمّن ثقتكم، ونتطلع إلى مواصلة دعمكم ورعايتكم في كل خطوة من رحلتكم.
      </p>
    </div>
     </div>
  </div>

)}
        </div>
      </div>
   
  );
};

export default FeedbackSection;
