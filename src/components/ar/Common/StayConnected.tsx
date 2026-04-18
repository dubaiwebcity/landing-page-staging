'use client'; // Client-side component for form handling

import React, { useState } from 'react';

const HowItWorks = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const subscriberPayload = new FormData();
            subscriberPayload.append('email', email);
            fetch('https://indentme.io/newsletter/bnoon/subscriber/add/', {
                method: 'POST',
                body: subscriberPayload,
            }).catch(() => { });
            const res = await fetch('/api/subscribe-ar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (data.success) {
                setMessage('✅ تم الاشتراك بنجاح! شكراً لكم.');
                setEmail('');
            } else {
                setMessage('❌ ' + (data.error || 'حدث خطأ، حاول مرة أخرى.'));
            }
        } catch (err) {
            console.error(err);
            setMessage('⚠️ خطأ في الخادم. الرجاء المحاولة لاحقاً.');
        }
    };

    return (
        <div className="stay-area ptb-140">
            <div className="container">
                <div className="section-title">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-12">
                            <div className="left">
                                <h2> ابقوا على تواصل مع بنون – شاركونا بريدكم الإلكتروني !</h2>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="right">
                                <p>
                                    هل ترغبون في معرفة كل جديد لدينا؟ من انضمام أطباء جدد، إلى تحديثات الخدمات،
                                    ومعلومات صحية موثوقة تهمكم؟
                                </p>
                            </div>
                        </div>

                        {/* ✅ P + Form in Same Column */}
                        <div className="col-lg-7 col-md-12">
                            <p className="mb-3">
                                فقط أضيفوا بريدكم الإلكتروني وسنشارككم بكل ما يهمكم. نعدكم أن تكون رسائلنا مفيدة
                                وذات صلة۔
                            </p>

                            {/* Form directly under the paragraph */}
                            <form onSubmit={handleContact} className="w-full">
                                <div className="flex w-full items-center gap-2 max-w-xl">
                                    {/* Input */}
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder=""
                                        className="form-input flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-primary px-5 py-2 rounded-lg submit-btn">
                                        إرسال
                                    </button>
                                </div>
                                {message && <p className="text-success mt-2">{message}</p>}
                            </form>
                        </div>

                        {/* ✅ P Below Form */}
                        <p className="mt-3">
                            يمكنكم إلغاء الاشتراك في أي وقت عبر التواصل معنا على:
                            <br />
                            communications@bnoon.sa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
