'use client';

import React, { useState, useEffect, useRef } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ReCAPTCHA from 'react-google-recaptcha';
import { CgEnter } from 'react-icons/cg';

const AppointmentSection = () => {
    useEffect(() => {
        sessionStorage.removeItem("bnoon_booking_tracked");
    }, []);
    const [formData, setFormData] = useState({
        interest: '',
        branch: '',
        visitType: '',
        doctor: '',
        name: '',
        isForYou: '',
        nationality: '',
        countryOfResidence: '',
        cityIfInSA: '',
        gender: '',
        mobile: '',
        email: '',
        preferredDate: '',
        preferredTime: '',
        howHeard: '',
        recaptcha: '',
    });
    const interestRef = useRef<HTMLDivElement>(null);
    const branchRef = useRef<HTMLDivElement>(null);
    const visitTypeRef = useRef<HTMLDivElement>(null);
    const doctorRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const isForYouRef = useRef<HTMLDivElement>(null);
    const nationalityRef = useRef<HTMLDivElement>(null);
    const countryRef = useRef<HTMLDivElement>(null);
    const cityRef = useRef<HTMLDivElement>(null);
    const genderRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const emailRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLDivElement>(null);
    const howHeardRef = useRef<HTMLDivElement>(null);
    const recaptchaRef = useRef<HTMLDivElement>(null);
    const [isInterestOpen, setIsInterestOpen] = useState(false);
    const [isDoctorOpen, setIsDoctorOpen] = useState(false);
    const [isNationalityOpen, setIsNationalityOpen] = useState(false);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [isHowHeardOpen, setIsHowHeardOpen] = useState(false);
    const [isTimeOpen, setIsTimeOpen] = useState(false);
    const [isVisitTypeOpen, setIsVisitTypeOpen] = useState(false);
    const messageRef = useRef<HTMLParagraphElement | null>(null);
    const [showThankYou, setShowThankYou] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState<React.ReactNode>(null);
const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerVisible, setHeaderVisible] = useState(false);

    const nationalities = [
        'Saudi Arabia',
        'Afghan',
        'Albanian',
        'Algerian',
        'American',
        'Andorran',
        'Angolan',
        'Antiguan',
        'Argentine / Argentinian',
        'Armenian',
        'Australian',
        'Austrian',
        'Azerbaijani',
        'Bahamian',
        'Bahraini',
        'Bangladeshi',
        'Barbadian',
        'Belarusian',
        'Belgian',
        'Belizean',
        'Beninese',
        'Bhutanese',
        'Bolivian',
        'Bosnian / Herzegovinian',
        'Botswanan',
        'Brazilian',
        'Bruneian',
        'Bulgarian',
        'Burkinabé',
        'Burundian',
        'Cambodian',
        'Cameroonian',
        'Canadian',
        'Cape Verdean',
        'Central African',
        'Chadian',
        'Chilean',
        'Chinese',
        'Colombian',
        'Comorian',
        'Congolese',
        'Costa Rican',
        'Croatian',
        'Cuban',
        'Cypriot',
        'Czech',
        'Danish',
        'Djiboutian',
        'Dominican',
        'Dutch',
        'East Timorese',
        'Ecuadorean',
        'Egyptian',
        'Emirati',
        'English',
        'Equatoguinean',
        'Eritrean',
        'Estonian',
        'Ethiopian',
        'Fijian',
        'Finnish',
        'French',
        'Gabonese',
        'Gambian',
        'Georgian',
        'German',
        'Ghanaian',
        'Greek',
        'Grenadian',
        'Guatemalan',
        'Guinean',
        'Guyanese',
        'Haitian',
        'Honduran',
        'Hungarian',
        'Icelander',
        'Indian',
        'Indonesian',
        'Iranian',
        'Iraqi',
        'Irish',
        'Israeli',
        'Italian',
        'Ivorian',
        'Jamaican',
        'Japanese',
        'Jordanian',
        'Kazakhstani',
        'Kenyan',
        'Kittitian / Nevisian',
        'Kiribati',
        'Korean (North)',
        'Korean (South)',
        'Kuwaiti',
        'Kyrgyzstani',
        'Lao / Laotian',
        'Latvian',
        'Lebanese',
        'Liberian',
        'Libyan',
        'Liechtensteiner',
        'Lithuanian',
        'Luxembourger',
        'Macedonian',
        'Malagasy',
        'Malawian',
        'Malaysian',
        'Maldivian',
        'Malian',
        'Maltese',
        'Marshallese',
        'Mauritanian',
        'Mauritian',
        'Mexican',
        'Micronesian',
        'Moldovan',
        'Monégasque',
        'Mongolian',
        'Montenegrin',
        'Moroccan',
        'Mozambican',
        'Myanmar (Burmese)',
        'Namibian',
        'Nauruan',
        'Nepalese',
        'New Zealander',
        'Nicaraguan',
        'Nigerien',
        'Nigerian',
        'Ni-Vanuatu',
        'Norwegian',
        'Omani',
        'Pakistani',
        'Palauan',
        'Palestinian',
        'Panamanian',
        'Papua New Guinean',
        'Paraguayan',
        'Peruvian',
        'Philippine',
        'Polish',
        'Portuguese',
        'Qatari',
        'Romanian',
        'Russian',
        'Rwandan',
        'Saint Lucian',
        'Salvadoran',
        'Sammarinese',
        'Samoan',
        'Saudi',
        'Scottish',
        'Senegalese',
        'Serbian',
        'Seychellois',
        'Sierra Leonean',
        'Singaporean',
        'Slovak',
        'Slovene',
        'Solomon Islander',
        'Somali',
        'South African',
        'Spanish',
        'Sri Lankan',
        'Sudanese',
        'Surinamese',
        'Swazi',
        'Swedish',
        'Swiss',
        'Syrian',
        'Taiwanese',
        'Tajikistani',
        'Tanzanian',
        'Thai',
        'Togolese',
        'Tongan',
        'Trinidadian / Tobagonian',
        'Tunisian',
        'Turkish',
        'Turkmen',
        'Tuvaluan',
        'Ugandan',
        'Ukrainian',
        'Uruguayan',
        'Uzbekistani',
        'Vatican',
        'Venezuelan',
        'Vietnamese',
        'Welsh',
        'Yemeni',
        'Zambian',
        'Zimbabwean',
    ]; // Top pe array define karlo const countriesList = [ "Saudi Arabia", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic (Czechia)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

    const countriesList = [
        'Saudi Arabia',
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo (Congo-Brazzaville)',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic (Czechia)',
        'Democratic Republic of the Congo',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Fiji',
        'Finland',
        'France',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Greece',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Myanmar (Burma)',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North Korea',
        'North Macedonia',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Korea',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates (UAE)',
        'United Kingdom (UK)',
        'United States (USA)',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Vatican City',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe',
    ];

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

    // ✅ Handle form data change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // ✅ Red star show only when field empty on submit
    const isFieldInvalid = (field: keyof typeof formData) => {
        if (field === 'cityIfInSA' && formData.countryOfResidence !== 'Saudi Arabia') return false;
        return submitted && !formData[field];
    };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) return; // ✅ prevent multiple clicks

    setSubmitted(true);

    const requiredFields = Object.keys(formData).filter(
        (key) => key !== 'cityIfInSA' || formData.countryOfResidence === 'Saudi Arabia'
    );

    const firstEmptyField = requiredFields.find(
        (key) => !(formData as Record<string, string>)[key]
    );

    if (firstEmptyField) {
        const refsMap: Record<string, React.RefObject<HTMLDivElement>> = {
            interest: interestRef,
            branch: branchRef,
            visitType: visitTypeRef,
            doctor: doctorRef,
            name: nameRef,
            isForYou: isForYouRef,
            nationality: nationalityRef,
            countryOfResidence: countryRef,
            cityIfInSA: cityRef,
            gender: genderRef,
            mobile: mobileRef,
            email: emailRef,
            preferredDate: dateRef,
            preferredTime: timeRef,
            howHeard: howHeardRef,
            recaptcha: recaptchaRef,
        };

        refsMap[firstEmptyField]?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });

        return;
    }

    // ✅ START loading here
    setIsLoading(true);

    try {
        const response = await fetch('/api/send-appointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            if (typeof window !== "undefined" && !sessionStorage.getItem("bnoon_booking_tracked")) {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: "book_appointment" });
                sessionStorage.setItem("bnoon_booking_tracked", "true");
            }

            setMessage(  <>
                        <div className="section-title">
                            <div className="row justify-content-center align-items-center g-4">
                                <div className="col-lg-12 col-md-12">
                                    <div className="left">
                                        <h2 ref={headerRef} className={`left animate-left ${headerVisible ? 'show' : ''}`}>
                                            Thank you for submitting your appointment request.
                                        </h2>
                                    </div>
                                </div>
                                <div className="left">
                                    <p>
                                        Our team will contact you within 48 hours to discuss your appointment request and arrange the next steps.
                                        <br />
                                        We look forward to connecting with you soon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>);
            setShowThankYou(true);

            setFormData({
                interest: '',
                branch: '',
                visitType: '',
                doctor: '',
                name: '',
                isForYou: '',
                nationality: '',
                countryOfResidence: '',
                cityIfInSA: '',
                gender: '',
                mobile: '',
                email: '',
                preferredDate: '',
                preferredTime: '',
                howHeard: '',
                recaptcha: '',
            });

            setSubmitted(false);
        } else {
            setMessage('❌ ' + data.error);
        }
    } catch (error) {
        setMessage('❌ Something went wrong.');
    } finally {
        setIsLoading(false); // ✅ always stop
    }
};
    return (
        <div className="fertility-area mt-5 text-center mb-5">
            <div className="container">
                {/* ✅ Heading + Paragraph + Form Wrapper */}
                {!showThankYou && (
                    <div className="appointment-wrapper">
                        <div className="section-title">
                            <div className="row justify-content-center align-items-center g-4">
                                <div className="col-lg-12 col-md-12">
                                    <div className="left">
                                        <h2 ref={headerRef} className={`left animate-left ${headerVisible ? 'show' : ''}`}>
                                            Request an Appointment
                                        </h2>
                                    </div>
                                </div>
                                <div className="left ">
                                    <p>
                                        We’re here to support you on your journey — fill out the form below to request an
                                        appointment with one of our doctors. You will receive a call back from one of our
                                        call center agents to book your appointment within 48 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FORM START */}
                        <form
                            onSubmit={handleSubmit}
                            className="appointment-form text-start mx-auto"
                            style={{ maxWidth: '800px' }}
                        >
                            {/* Interest */}
                            <div className="mb-3" ref={interestRef} style={{ position: 'relative' }}>
                                <label className="appointmentform-label">
                                    I am interested in{' '}
                                    <span style={{ color: isFieldInvalid('interest') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('interest') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                {/* Button */}
                                <button
                                    type="button"
                                    className={`form-control ${isFieldInvalid('interest') ? 'is-invalid' : ''}`}
                                    onClick={() => setIsInterestOpen((prev) => !prev)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: formData.interest ? '#000' : '#808080',
                                        padding: '6px 12px',
                                    }}
                                >
                                    <span>{formData.interest || 'Choose one'}</span>

                                    <OptimizedImage imageName="arrow" alt="arrow" />
                                </button>

                                {/* Dropdown List */}
                                {isInterestOpen && (
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
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                        }}
                                    >
                                        {[
                                            'Having a child',
                                            'General fertility consultation',
                                            'Fertility preservation',
                                            'Learning about my fertility',
                                            'Pregnancy follow-up',
                                            'Male/andrology problems',
                                            'Gynecology problem',
                                            'General checkup and screening',
                                            'Other',
                                        ].map((item) => (
                                            <li
                                                key={item}
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, interest: item }));
                                                    setIsInterestOpen(false);
                                                }}
                                                style={{
                                                    padding: '8px',
                                                    cursor: 'pointer',
                                                    background: formData.interest === item ? '#004E78' : '#fff',
                                                    color: formData.interest === item ? '#fff' : '#212529',
                                                }}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Branch */}
                            <div className="mb-3" ref={branchRef} style={{ position: 'relative' }}>
                                <label className="appointmentform-label">
                                    Select Branch{' '}
                                    <span style={{ color: isFieldInvalid('branch') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('branch') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                {/* Button */}
                                <button
                                    type="button"
                                    className={`form-control ${isFieldInvalid('branch') ? 'is-invalid' : ''}`}
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: formData.branch ? '#000' : '#808080',
                                        padding: '6px 12px',
                                    }}
                                >
                                    <span>{formData.branch || 'Select branch'}</span>
                                    <OptimizedImage imageName="arrow" alt="arrow" />
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
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        branch,
                                                        doctor: '', // ✅ reset doctor whenever branch changes
                                                    }));
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

                            {/* Type of Visit */}
                            <div className="mb-3" ref={visitTypeRef} style={{ position: 'relative' }}>
                                <label className="appointmentform-label">
                                    Select Type of Visit{' '}
                                    <span style={{ color: isFieldInvalid('visitType') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('visitType') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                {/* Button */}
                                <button
                                    type="button"
                                    className={`form-control ${isFieldInvalid('visitType') ? 'is-invalid' : ''}`}
                                    onClick={() => setIsVisitTypeOpen((prev) => !prev)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: formData.visitType ? '#000' : '#808080',
                                        padding: '6px 12px',
                                    }}
                                >
                                    <span>{formData.visitType || 'Select visit type'}</span>

                                    <OptimizedImage imageName="arrow" alt="arrow" />
                                </button>

                                {/* Dropdown List */}
                                {isVisitTypeOpen && (
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
                                        {['Clinic Visit', 'Teleconsultation'].map((type) => (
                                            <li
                                                key={type}
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, visitType: type }));
                                                    setIsVisitTypeOpen(false);
                                                }}
                                                style={{
                                                    padding: '8px',
                                                    cursor: 'pointer',
                                                    background: formData.visitType === type ? '#004E78' : '#fff',
                                                    color: formData.visitType === type ? '#fff' : '#212529',
                                                }}
                                            >
                                                {type}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Doctor */}
                            <div className="mb-3" ref={doctorRef} style={{ position: 'relative' }}>
                                <label className="appointmentform-label">
                                    Select Doctor{' '}
                                    <span style={{ color: isFieldInvalid('doctor') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('doctor') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                {/* Button */}
                                <button
                                    type="button"
                                    disabled={!formData.branch}
                                    className={`form-control ${isFieldInvalid('doctor') ? 'is-invalid' : ''}`}
                                    onClick={() => !formData.branch || setIsDoctorOpen((prev) => !prev)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: !formData.branch ? '#999' : formData.doctor ? '#000' : '#808080',
                                        padding: '6px 12px',
                                        background: !formData.branch ? '#f0f0f0' : '#fff',
                                        cursor: !formData.branch ? 'not-allowed' : 'pointer',
                                    }}
                                >
                                    <span>
                                        {!formData.branch ? 'Select Doctor' : formData.doctor || 'Select Doctor'}
                                    </span>

                                    <OptimizedImage imageName="arrow" alt="arrow" />
                                </button>

                                {/* Dropdown */}
                                {/* Doctor Dropdown */}
                                {isDoctorOpen && formData.branch && (
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
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                        }}
                                    >
                                        {(formData.branch === 'Riyadh'
                                            ? [
                                                'Dr. Abdalaziz Al-Shahrani',
                                                'Dr. Asim Al Wohaibi',
                                                'Dr. Wajdi Al Omari',
                                                'Dr. Dalia Nour',
                                                'Dr. Mussa AlNumi ',
                                            ]
                                            : formData.branch === 'Jeddah'
                                                ? [
                                                    'Dr. Fawaz Edris',
                                                    'Dr. Mazin Bishara',
                                                    'Dr. Ahmed Alshaikh',
                                                    'Dr. Maya Albezreh',
                                                    'Dr. Ahmad Haroun',
                                                    'Dr. Razan Ghaith ',
                                                    'Dr. Maram Dadoua',
                                                ]
                                                : formData.branch === 'Al Ahsa'
                                                    ? [
                                                        'Dr. Bassam Nusair',
                                                        'Dr. Ahmed Al-Nowasser',
                                                        'Dr. Median Alkhalaf',
                                                        'Dr. Rania Elsherify',
                                                    ]
                                                    : []
                                        )
                                            // 🔹 Filter out doctor if visit type is Teleconsultation
                                            .filter(
                                                (doc) =>
                                                    !(
                                                        formData.visitType === 'Teleconsultation' &&
                                                        doc === 'Dr. Abdalaziz Al-Shahrani'
                                                    ),
                                            )
                                            .map((doc) => (
                                                <li
                                                    key={doc}
                                                    onClick={() => {
                                                        setFormData((prev) => ({ ...prev, doctor: doc }));
                                                        setIsDoctorOpen(false);
                                                    }}
                                                    style={{
                                                        padding: '8px',
                                                        cursor: 'pointer',
                                                        background: formData.doctor === doc ? '#004E78' : '#fff',
                                                        color: formData.doctor === doc ? '#fff' : '#212529',
                                                    }}
                                                >
                                                    {doc}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </div>

                            {/* Name */}
                            <div className="mb-3" ref={nameRef}>
                                <label className="appointmentform-label">
                                    Your Name <span style={{ color: isFieldInvalid('name') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('name') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name" // <-- placeholder added
                                />
                            </div>

                            {/* Appointment for you */}
                            <div className="mb-3" ref={isForYouRef}>
                                <label className="appointmentform-label d-block">
                                    Is this appointment for you?{' '}
                                    <span style={{ color: isFieldInvalid('isForYou') ? 'red' : 'black' }}>*</span>
                                    {isFieldInvalid('isForYou') && (
                                        <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                            please fill all required fileds
                                        </span>
                                    )}
                                </label>

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isForYou"
                                        id="isForYouYes"
                                        value="yes"
                                        checked={formData.isForYou === 'yes'}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="isForYouYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isForYou"
                                        id="isForYouNo"
                                        value="no"
                                        checked={formData.isForYou === 'no'}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="isForYouNo">
                                        No
                                    </label>
                                </div>
                            </div>

                            {/* Nationality */}
                            <div className="mb-3" ref={nationalityRef} style={{ position: 'relative' }}>
                                <label className="appointmentform-label">
                                    Nationality{' '}
                                    <span style={{ color: isFieldInvalid('nationality') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('nationality') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                {/* Button */}
                                <button
                                    type="button"
                                    className={`form-control ${isFieldInvalid('nationality') ? 'is-invalid' : ''}`}
                                    onClick={() => setIsNationalityOpen((prev) => !prev)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between', // text left + arrow right
                                        color: formData.nationality ? '#000' : '#808080',
                                        padding: '6px 12px',
                                    }}
                                >
                                    <span>{formData.nationality || ''}</span>

                                    <OptimizedImage imageName="arrow" alt="arrow" />
                                </button>

                                {/* Dropdown List */}
                                {isNationalityOpen && (
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
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                        }}
                                    >
                                        {nationalities.map((n, i) => (
                                            <li
                                                key={i}
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, nationality: n }));
                                                    setIsNationalityOpen(false);
                                                }}
                                                style={{
                                                    padding: '8px',
                                                    cursor: 'pointer',
                                                    background: formData.nationality === n ? '#004E78' : '#fff',
                                                    color: formData.nationality === n ? '#fff' : '#212529',
                                                }}
                                            >
                                                {n}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Country */}
                            <div className="mb-3" ref={countryRef} style={{ position: 'relative' }}>
                                <label className="appointmentform-label">
                                    Country of Residence{' '}
                                    <span style={{ color: isFieldInvalid('countryOfResidence') ? 'red' : 'black' }}>
                                        *
                                    </span>
                                </label>
                                {isFieldInvalid('countryOfResidence') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                {/* Button */}
                                <button
                                    type="button"
                                    className={`form-control ${isFieldInvalid('countryOfResidence') ? 'is-invalid' : ''}`}
                                    onClick={() => setIsCountryOpen((prev) => !prev)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: formData.countryOfResidence ? '#000' : '#808080',
                                        padding: '6px 12px',
                                    }}
                                >
                                    <span>{formData.countryOfResidence || ''}</span>

                                    <OptimizedImage imageName="arrow" alt="arrow" />
                                </button>

                                {/* Dropdown List */}
                                {isCountryOpen && (
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
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                        }}
                                    >
                                        {countriesList.map((c, i) => (
                                            <li
                                                key={i}
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, countryOfResidence: c }));
                                                    setIsCountryOpen(false);
                                                }}
                                                style={{
                                                    padding: '8px',
                                                    cursor: 'pointer',
                                                    background: formData.countryOfResidence === c ? '#004E78' : '#fff',
                                                    color: formData.countryOfResidence === c ? '#fff' : '#212529',
                                                }}
                                            >
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* City (Saudi Arabia only) */}
                            {formData.countryOfResidence === 'Saudi Arabia' && (
                                <div className="mb-3" ref={cityRef}>
                                    <label className="appointmentform-label">
                                        If you live in Saudi Arabia, please state the city.{' '}
                                        <span style={{ color: isFieldInvalid('cityIfInSA') ? 'red' : 'black' }}>*</span>
                                    </label>
                                    {isFieldInvalid('cityIfInSA') && (
                                        <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                            please fill all required fileds
                                        </span>
                                    )}
                                    <select
                                        className="form-control"
                                        name="cityIfInSA"
                                        value={formData.cityIfInSA}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select City</option>
                                        <option value="Riyadh">Riyadh</option>
                                        <option value="Madinah">Madinah</option>
                                        <option value="Dammam">Dammam</option>
                                        <option value="Jeddah">Jeddah</option>
                                        <option value="Taif">Taif</option>
                                        <option value="Sakaka">Sakaka</option>
                                        <option value="Makkah">Makkah</option>
                                        <option value="Tabuk">Tabuk</option>
                                        <option value="Buraydah">Buraydah</option>
                                        <option value="Khobar (Al-Khobar)">Khobar (Al-Khobar)</option>
                                        <option value="Dhahran">Dhahran</option>
                                        <option value="Abha">Abha</option>
                                        <option value="Khamis Mushait">Khamis Mushait</option>
                                        <option value="Hail">Hail</option>
                                        <option value="Al-Qassim (Buraydah)">Al-Qassim (Buraydah)</option>
                                        <option value="Al-Ahsa (Hofuf & Al-Mubarraz)">
                                            Al-Ahsa (Hofuf & Al-Mubarraz)
                                        </option>
                                        <option value="Najran">Najran</option>
                                        <option value="Jazan (Jizan)">Jazan (Jizan)</option>
                                        <option value="Yanbu">Yanbu</option>
                                        <option value="Al-Baha">Al-Baha</option>
                                        <option value="Arar">Arar</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            )}

                            {/* Gender */}
                            <div className="mb-3" ref={genderRef}>
                                <label className="appointmentform-label d-block">
                                    Gender <span style={{ color: isFieldInvalid('gender') ? 'red' : 'black' }}>*</span>
                                    {isFieldInvalid('gender') && (
                                        <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                            please fill all required fileds
                                        </span>
                                    )}
                                </label>

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="mb-3" ref={mobileRef}>
                                <label className="appointmentform-label">
                                    Mobile No
                                    <span style={{ color: isFieldInvalid('mobile') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('mobile') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3" ref={emailRef}>
                                <label className="appointmentform-label">
                                    Email Address
                                    <span style={{ color: isFieldInvalid('email') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('email') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Date */}
                            <div className="mb-3" ref={dateRef}>
                                <label className="appointmentform-label">
                                    Select a preferred date for your appointment{' '}
                                    <span style={{ color: isFieldInvalid('preferredDate') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('preferredDate') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                <input
                                    type="date"
                                    className={`form-control ${isFieldInvalid('preferredDate') ? 'is-invalid' : ''}`}
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={(e) => {
                                        const selectedDate = e.target.value;
                                        const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

                                        if (selectedDate < today) {
                                            alert('Past dates are not allowed!'); // ya message show karne ka aur bhi tarika ho sakta
                                            setFormData((prev) => ({ ...prev, preferredDate: '' }));
                                        } else {
                                            handleChange(e);
                                        }
                                    }}
                                    min={new Date().toISOString().split('T')[0]} // ye ensure karega ki past dates select hi na ho
                                />
                            </div>

                            {/* Time */}
                            <div className="mb-3" ref={timeRef} style={{ position: 'relative' }}>
                                <label className="appointmentform-label">
                                    Select preferred time for your appointment{' '}
                                    <span style={{ color: isFieldInvalid('preferredTime') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('preferredTime') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}

                                {/* Button */}
                                <button
                                    type="button"
                                    className={`form-control ${isFieldInvalid('preferredTime') ? 'is-invalid' : ''}`}
                                    onClick={() => setIsTimeOpen((prev) => !prev)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: formData.preferredTime ? '#000' : '#808080',
                                        padding: '6px 12px',
                                    }}
                                >
                                    <span>{formData.preferredTime || ''}</span>
                                    <OptimizedImage imageName="arrow" alt="arrow" />
                                </button>

                                {/* Dropdown List */}
                                {isTimeOpen && (
                                    <ul
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            right: 0,
                                            border: '1px solid #ccc',
                                            background: '#fff',
                                            zIndex: 9999,
                                            listStyle: 'none',
                                            margin: 0,
                                            padding: 0,
                                            borderRadius: '4px',
                                            maxHeight: '210px', // 9:00-10:15 AM approx height
                                            overflowY: 'auto', // scrollable
                                        }}
                                    >
                                        {[
                                            '9:00 AM',
                                            '9:15 AM',
                                            '9:30 AM',
                                            '9:45 AM',
                                            '10:00 AM',
                                            '10:15 AM',
                                            '10:30 AM',
                                            '10:45 AM',
                                            '11:00 AM',
                                            '11:15 AM',
                                            '11:30 AM',
                                            '11:45 AM',
                                            '12:00 PM',
                                            '12:15 PM',
                                            '12:30 PM',
                                            '12:45 PM',
                                            '1:00 PM',
                                            '1:15 PM',
                                            '1:30 PM',
                                            '1:45 PM',
                                            '2:00 PM',
                                            '2:15 PM',
                                            '2:30 PM',
                                            '2:45 PM',
                                            '3:00 PM',
                                            '3:15 PM',
                                            '3:30 PM',
                                            '3:45 PM',
                                            '4:00 PM',
                                            '4:15 PM',
                                            '4:30 PM',
                                            '4:45 PM',
                                            '5:00 PM',
                                            '5:15 PM',
                                            '5:30 PM',
                                            '5:45 PM',
                                            '6:00 PM',
                                            '6:15 PM',
                                            '6:30 PM',
                                            '6:45 PM',
                                            '7:00 PM',
                                            '7:15 PM',
                                            '7:30 PM',
                                            '7:45 PM',
                                            '8:00 PM',
                                        ].map((time) => (
                                            <li
                                                key={time}
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, preferredTime: time }));
                                                    setIsTimeOpen(false);
                                                }}
                                                style={{
                                                    padding: '8px',
                                                    cursor: 'pointer',
                                                    background: formData.preferredTime === time ? '#004E78' : '#fff',
                                                    color: formData.preferredTime === time ? '#fff' : '#212529',
                                                }}
                                            >
                                                {time}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* How heard */}
                            <div className="mb-3" ref={howHeardRef} style={{ position: 'relative' }}>
                                <label className="appointmentform-label">
                                    How did you hear about us?{' '}
                                    <span style={{ color: isFieldInvalid('howHeard') ? 'red' : 'black' }}>*</span>
                                </label>
                                {isFieldInvalid('howHeard') && (
                                    <span style={{ color: 'red', marginTop: '0px', fontSize: '10px' }}>
                                        please fill all required fileds
                                    </span>
                                )}
                                {/* Button */}
                                <button
                                    type="button"
                                    className={`form-control ${isFieldInvalid('howHeard') ? 'is-invalid' : ''}`}
                                    onClick={() => setIsHowHeardOpen((prev) => !prev)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: formData.howHeard ? '#000' : '#808080',
                                        padding: '6px 12px',
                                    }}
                                >
                                    <span>{formData.howHeard || ''}</span>
                                    <OptimizedImage imageName="arrow" alt="arrow" />
                                </button>

                                {/* Dropdown List */}
                                {isHowHeardOpen && (
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
                                            maxHeight: "140px",
                                            overflowY: "auto",
                                        }}
                                    >
                                        {['Google Search', 'Instagram', 'Snapchat', 'Facebook', 'Tiktok', 'Referred by a Friend', 'Referred by a Doctor', 'Newspaper', 'Magazine', 'Event', 'Lecture', 'Billboard Advertisement', 'Radio', 'TV', 'Word of Mouth ', 'Other'].map((item) => (
                                            <li
                                                key={item}
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, howHeard: item }));
                                                    setIsHowHeardOpen(false);
                                                }}
                                                style={{
                                                    padding: '8px',
                                                    cursor: 'pointer',
                                                    background: formData.howHeard === item ? '#004E78' : '#fff',
                                                    color: formData.howHeard === item ? '#fff' : '#212529',
                                                }}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="my-3">
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                    onChange={(value: string | null) =>
                                        setFormData((prev) => ({ ...prev, recaptcha: value || '' }))
                                    }
                                />
                            </div>
                            {/* Submit */}
                         <div className="text-center">
    <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary feedback-btn btn-large mt-3"
    >
        {isLoading ? 'Submitting...' : 'Submit'}
    </button>
</div>
                        </form>
                    </div>
                )}
                {/* FORM END */}
                {/* Mid-form message */}
                {message && (
                    <div ref={messageRef} className="form-message">
                        {message}
                    </div>
                )}
            </div>
            <div className="col-lg-12 col-md-12">
                <div className="left mt-3">
                    <p className="text-left">
                        *Disclaimer: Your appointment will only be confirmed after our call center contacts
                        you.{' '}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;
