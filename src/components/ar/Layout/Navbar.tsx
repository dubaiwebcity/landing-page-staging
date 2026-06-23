'use client';

import React, { useState, useEffect } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { DropArrowIcon } from '@/components/icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { usePathname } from 'next/navigation';
import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import { menus } from '@/components/ar/Layout/Menus';
import { getBookNowUrl } from '@/utils/booking';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-expect-error
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }

    const element = document.getElementById('navbar');
    const onScroll = () => {
      if (!element) return;
      if (window.scrollY > 170) {
        element.classList.add('sticky');
      } else {
        element.classList.remove('sticky');
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      element?.classList.remove('sticky');
    };
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mobileActive, setMobileActive] = useState(pathname);
  const [clickedItem, setClickedItem] = useState<string | null>(null); // click highlight
  const isActive = (href: string) => pathname === href;
  const isArabic = pathname.startsWith('/ar');
  return (
    <>
      <nav className="navbar navbar-expand-xl sticky" id="navbar" dir="rtl">
        <div className="container d-flex justify-content-between align-items-center">
          {/* 🟢 LEFT SIDE (Logo + Mobile) */}
          <div className="d-flex align-items-center  space-mobile">
            <Link href="/ar" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 183 76"
                width={183}
                height={75}
                aria-label="Bnoon"
              >
                <path
                  fill="#39bced"
                  d="m137.17 7.27c-12.45 0-22.54 10.1-22.54 22.56 0 12.46 10.09 22.56 22.54 22.56 12.44 0 22.53-10.1 22.53-22.56 0-12.46-10.09-22.56-22.53-22.56zm0 32.04c-5.23 0-9.47-4.24-9.47-9.48 0-5.24 4.24-9.48 9.47-9.48 5.23 0 9.47 4.24 9.47 9.48 0 5.24-4.24 9.48-9.47 9.48zm28.63 29.54c-5.23 0-9.47-4.24-9.47-9.48 0-5.24 4.24-9.48 9.47-9.48 5.23 0 9.48 4.24 9.48 9.48 0 5.24-4.25 9.48-9.48 9.48z"
                />
                <g fill="#ffffff">
                  <path d="m26.59 61.35c0 3.13-2.05 7.37-9.31 7.37h-9.28v-24.32h8.86c5.42 0 6.74 3.41 7.02 5.4 0.28 2.36-0.94 4.38-2.22 5.18 3.23 1.11 4.93 3.34 4.93 6.37zm-15.01-6.89h5.28c1.91 0 3.44-1.53 3.44-3.41 0-1.88-1.53-3.45-3.44-3.45h-5.28v6.86zm11.5 7.13c0-2.16-1.74-3.93-3.93-3.93h-7.57v7.86h7.57c2.19 0 3.93-1.74 3.93-3.93z" />
                  <path d="m43.73 58.15v10.43h-3.59v-10.71c0-2.26-1.8-4.07-4.03-4.07-2.22 0-4.03 1.81-4.03 4.07v10.71h-3.61v-10.43c0-4.22 3.4-7.63 7.64-7.63 4.24 0 7.62 3.41 7.62 7.63z" />
                  <path d="m63.67 59.08v1.33c0 4.73-3.96 8.55-8.86 8.55-4.9 0-8.86-3.82-8.86-8.55v-1.33c0-4.73 3.96-8.55 8.86-8.55 4.9 0 8.86 3.82 8.86 8.55zm-3.4-0.03c0-2.92-2.44-5.29-5.46-5.29-3.02 0-5.49 2.37-5.49 5.29v1.39c0 2.93 2.47 5.29 5.49 5.29 3.03 0 5.46-2.37 5.46-5.29z" />
                  <path d="m82.81 59.08v1.33c0 4.73-3.96 8.55-8.86 8.55-4.9 0-8.86-3.82-8.86-8.55v-1.33c0-4.73 3.96-8.55 8.86-8.55 4.9 0 8.86 3.82 8.86 8.55zm-3.41-0.03c0-2.92-2.43-5.29-5.45-5.29-3.03 0-5.49 2.37-5.49 5.29v1.39c0 2.93 2.46 5.29 5.49 5.29 3.02 0 5.45-2.37 5.45-5.29z" />
                  <path d="m100.26 58.15v10.43h-3.59v-10.71c0-2.26-1.8-4.07-4.03-4.07-2.22 0-4.03 1.81-4.03 4.07v10.71h-3.61v-10.43c0-4.22 3.4-7.63 7.64-7.63 4.24 0 7.62 3.41 7.62 7.63z" />
                  <path d="m18.05 40.25q-2.55 0-4.49-0.88-1.94-0.89-3.28-2.45-1.34-1.57-2.03-3.65-0.68-2.08-0.68-4.5 0-1.43 0.23-2.9 0.22-1.47 0.62-2.82l3.13 0.59q-0.33 1.38-0.51 2.63-0.18 1.26-0.18 2.5 0 2.42 0.85 4.16 0.85 1.73 2.47 2.64 1.62 0.92 3.87 0.92c1.5 0 2.82-0.31 3.88-0.92q1.6-0.91 2.45-2.64 0.85-1.74 0.85-4.16v-12.97h3.3v12.97q0 2.42-0.69 4.5-0.68 2.08-2.02 3.65-1.34 1.57-3.28 2.45-1.95 0.88-4.49 0.88zm0-24.03q-0.92 0-1.55-0.64-0.64-0.63-0.64-1.55c0-0.61 0.21-1.15 0.64-1.57q0.63-0.62 1.55-0.62c0.61 0 1.15 0.21 1.56 0.62q0.62 0.62 0.62 1.57 0 0.93-0.62 1.55-0.62 0.64-1.56 0.64z" />
                  <path d="m40.19 31.55q-2.55 0-4.43-1.11-1.87-1.11-2.92-2.99-1.04-1.88-1.04-4.13 0-1.83 0.65-3.39 0.65-1.55 1.83-2.71 1.17-1.16 2.71-1.82 1.53-0.65 3.29-0.65c1.18 0 2.28 0.18 3.37 0.54q1.63 0.54 2.9 1.19l-1.47 3.37q-2.67-1.34-4.8-1.34-1.46 0-2.64 0.64-1.18 0.64-1.86 1.71-0.69 1.08-0.69 2.46c0 0.91 0.21 1.64 0.64 2.32q0.64 1.01 1.78 1.58 1.14 0.57 2.68 0.57h4.7v3.76h-4.7zm-7.09 8.7v-3.76h6.37q2.02 0 2.9-0.82 0.88-0.81 0.88-2.61v-16.58h3.3v16.58q0 2.28-0.86 3.9-0.87 1.62-2.45 2.45-1.59 0.84-3.77 0.84h-6.37zm12.57-8.7v-3.76h4.77v3.76zm4.77 0v-3.76q0.35 0 0.5 0.51 0.15 0.51 0.15 1.36 0 0.85-0.15 1.37-0.15 0.52-0.5 0.52z" />
                  <path d="m50.44 31.55q-0.36 0-0.5-0.52-0.15-0.52-0.15-1.41c0-0.58 0.05-1.01 0.15-1.34q0.14-0.49 0.5-0.49zm0 0v-3.75h5.65v3.75zm5.65 0v-3.75q0.36 0 0.51 0.5 0.14 0.51 0.14 1.36 0 0.85-0.14 1.37-0.15 0.53-0.51 0.52z" />
                  <path d="m56.09 31.55q-0.36 0-0.51-0.52-0.14-0.52-0.14-1.41c0-0.58 0.05-1.01 0.14-1.34q0.15-0.49 0.51-0.49zm0 0v-3.75h5.65v3.75zm5.65 0v-3.75q0.36 0 0.51 0.5 0.14 0.51 0.14 1.36 0 0.85-0.14 1.37-0.15 0.53-0.51 0.52z" />
                  <path d="m61.74 31.55q-0.36 0-0.51-0.52-0.14-0.52-0.14-1.41c0-0.58 0.05-1.01 0.14-1.34q0.15-0.49 0.51-0.49zm0 0v-3.75h5.65v3.75zm5.65 0v-3.75q0.36 0 0.51 0.5 0.14 0.51 0.14 1.36 0 0.85-0.14 1.37-0.15 0.53-0.51 0.52z" />
                  <path d="m67.39 31.55q-0.36 0-0.51-0.52-0.14-0.52-0.14-1.41c0-0.58 0.04-1.01 0.14-1.34q0.15-0.49 0.51-0.49zm0 0v-3.75h5.65v3.75zm5.65 0v-3.75q0.36 0 0.5 0.5 0.15 0.51 0.15 1.36 0 0.85-0.15 1.37-0.14 0.53-0.5 0.52z" />
                  <path d="m73.04 31.55q-0.36 0-0.51-0.52-0.15-0.52-0.15-1.41c0-0.58 0.05-1.01 0.15-1.34q0.15-0.49 0.51-0.49zm0 0v-3.75h5.65v3.75zm5.65 0v-3.75q0.36 0 0.5 0.5 0.15 0.51 0.15 1.36 0 0.85-0.15 1.37-0.14 0.53-0.5 0.52z" />
                  <path d="m78.69 31.55q-0.36 0-0.51-0.52-0.15-0.52-0.15-1.41c0-0.58 0.05-1.01 0.15-1.34q0.15-0.49 0.51-0.49zm0 0v-3.75h1.66q1.41-0.01 2.09-0.22 0.69-0.21 0.92-0.8 0.23-0.59 0.23-1.7v-9.28h3.29v9.28q0 2.19-0.68 3.63-0.69 1.44-2.13 2.14-1.43 0.7-3.72 0.7c0 0-1.66 0-1.66 0zm6.56-20.13q-0.91 0-1.55-0.64-0.64-0.64-0.64-1.55c0-0.61 0.22-1.16 0.64-1.57q0.64-0.62 1.55-0.62c0.61 0 1.15 0.2 1.57 0.62q0.62 0.62 0.62 1.57 0 0.93-0.62 1.55-0.62 0.64-1.57 0.64zm4.87 20.13q-2.29 0-3.73-0.7-1.43-0.7-2.12-2.14-0.69-1.44-0.69-3.63h3.3q0 1.11 0.23 1.7 0.23 0.59 0.93 0.8 0.7 0.22 2.07 0.22h1.34v3.75c0 0-1.34 0-1.33 0zm1.33 0v-3.75q0.36 0 0.51 0.5 0.15 0.51 0.15 1.36 0 0.85-0.15 1.37-0.15 0.53-0.51 0.52z" />
                  <path d="m91.46 31.55q-0.36 0-0.51-0.52-0.15-0.52-0.15-1.41c0-0.58 0.05-1.01 0.15-1.34q0.15-0.49 0.51-0.49zm4.57-15.75h3.29v15.76h-7.87v-3.76h4.58c0 0 0-12 0-12zm0.39 24.52q-0.92 0-1.55-0.64-0.64-0.64-0.64-1.55c0-0.61 0.21-1.16 0.64-1.57q0.64-0.62 1.55-0.62c0.61 0 1.15 0.2 1.57 0.62q0.62 0.62 0.62 1.57c0 0.63-0.21 1.12-0.62 1.55q-0.62 0.64-1.57 0.64z" />
                </g>
              </svg>
            </Link>

            {/* 🌐 Mobile Language Switcher */}
            <div className="d-md-none me-5 ">
              {isArabic ? (
                <Link
                  href={pathname.replace(/^\/ar/, '/en')}
                  className="btn btn-outline-secondary btn-language"
                  style={{ fontSize: '0.9rem', padding: '4px 10px' }}
                >
                  EN
                </Link>
              ) : (
                <Link
                  href={pathname.replace(/^\/en/, '/ar')}
                  className="btn btn-outline-secondary btn-language"
                  style={{ fontSize: '0.9rem', padding: '4px 10px' }}
                >
                  العربية
                </Link>
              )}
            </div>

            {/* ☰ Mobile Menu Icon */}
            <button
              className="btn d-md-none me-2"
              type="button"
              onClick={handleShow}
              aria-label="Toggle navigation"
              style={{
                background: 'transparent',
                border: 'none',
                padding: '4px 8px',
              }}
            >
              <i
                className="bi bi-list"
                style={{ fontSize: '2rem', color: '#ffffffff', transform: 'scaleX(-1)' }}
              ></i>
            </button>
          </div>

          {/* 🟢 RIGHT SIDE (Desktop view) */}
          <div className="d-none d-md-flex flex-column align-items-start dropdown-nav">
            <div
              className="mb-3 d-flex gap-4 align-items-center dropdown-box"
              style={{ justifyContent: 'flex-end', width: '100%', gap: '32px !important' }}
            >
              {/* Dropdown (Phones) */}
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle btn-dropdown d-flex align-items-center gap-2"
                  type="button"
                  id="extraDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaPhone
                    style={{ color: 'white', transform: 'scaleX(-1)', marginRight: 'auto' }}
                  />
                  <span style={{ margin: '0px 10px 0px 0px' }}> +966 11 444 8080 :الرياض</span>
                  {/* ⭐ Custom Dropdown Arrow Icon */}
                  <DropArrowIcon width={22} height={22} />
                </button>
                <ul className="dropdown-menu contactus-drop text-center" aria-labelledby="extraDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="https://api.whatsapp.com/send?phone=966114448080&text=Hello"
                    >
                      <span style={{ marginLeft: 'auto' }}> +966 11 444 8080 :الرياض</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="https://api.whatsapp.com/send?phone=966126800800&text=Hello"
                    >
                      +966 12 680 0800 :جدة
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Language */}
              {isArabic ? (
                <Link
                  href={pathname.replace(/^\/ar/, '/en')}
                  className="btn btn-outline-secondary btn-language"
                >
                  EN
                </Link>
              ) : (
                <Link
                  href={pathname.replace(/^\/en/, '/ar')}
                  className="btn btn-outline-secondary btn-language"
                >
                  العربية
                </Link>
              )}

              {/* Appointment */}
              <a href={getBookNowUrl('ar')} className="btn btn-success btn-appointment">
                طلب موعد
              </a>
            </div>

            {/* Navigation Menu */}
            <div className=" justify-content-start">
              <ul className="navbar-nav">
            {menus
  .filter((item) => item.id !== 'english' && !item.mobileOnly)
  .map((item) =>
    item.dropdown ? (
      <li key={item.id} className="nav-item dropdown contactus-drpdown-btn">
    
<button
  className="nav-link dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-1"
  data-bs-toggle="dropdown"
  type="button"
>
  <span className="d-flex align-items-center gap-1">
    {item.title}
    <DropArrowIcon width={18} height={18} />
  </span>
</button>
        <ul className="dropdown-menu contactus-menu">
          {item.dropdown.map((subItem, index) => (
            <li key={index}>
              <Link className="dropdown-item contactus-btn" href={subItem.href}>
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    ) : (
      <li key={item.id} className="nav-item">
        <Link
          href={item.href || '#'}
          className={`nav-link ${isActive(item.href || '') ? 'active' : ''}`}
        >
          {item.title}
        </Link>
      </li>
    )
  )}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="start" className="mobile-offcanvas">
        <Offcanvas.Header closeButton className="border-0">
          <Offcanvas.Title>
            <OptimizedImage imageName="logo-mob" alt="Bnoon" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column justify-content-center align-items-center text-center">
          <ul className="list-unstyled w-100 px-3">
            {menus.map((item, index) => (
              <li key={item.id} className=" itmes">
                <Link
                  href={item.id === 'english' ? pathname.replace(/^\/ar/, '/en') : item.href || '#'}
                  className={`text-decoration-none d-block ${
                    clickedItem === item.href
                      ? 'click-active'
                      : mobileActive === item.href
                        ? 'active-btn'
                        : ''
                  }`}
                  style={{
                    padding: '14px',
                  }}
                  onClick={(e) => {
                    e.preventDefault(); // ⛔ instant navigation roko

                    setClickedItem(item.href || ''); // 🎯 CLICK color turant
                    setMobileActive(item.href || ''); // 🟢 page active

                    handleClose(); // offcanvas band

                   
                   setTimeout(() => {
  const targetUrl =
    item.id === 'english'
      ? pathname.replace(/^\/ar/, '/en')
      : item.href || '#';

  window.location.href = targetUrl;
}, 200);
                  }}
                >
                  {item.title}
                </Link>

                {index !== menus.length - 1 && (
                  <hr
                    style={{
                      border: '1px solid #0000005e',
                      margin: '0px',
                    }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="mt-4 d-flex flex-column align-items-center">
            {isArabic ? (
              <Link
                href={pathname.replace(/^\/ar/, '/en')}
                className="btn btn-outline-secondary btn-language px-4"
              >
                EN
              </Link>
            ) : (
              <Link
                href={pathname.replace(/^\/en/, '/ar')}
                className="btn btn-outline-secondary btn-language px-4"
              >
                العربية
              </Link>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx global>{`
        .click-active {
          background: #115479ff; /* click color (light) */
          color: #ffffff !important;
        }
ul.dropdown-menu.contactus-menu {
       width: 100px !important;
    margin-left: -75px !important;
    backdrop-filter: none !important;
    background-color: #00000000 !important;
     
}
    .contactus-drpdown-btn{
    margin:-5px 0px;
    }
        .active-btn {
          background: #004e78; /* active page color (dark) */
          color: #ffffff !important;
          font-weight: 600;
        }
.contactus-btn{
    background: gray;
}
    .dropdown-menu{
    backdrop-filter: none !important;
    }
    a.dropdown-item.contactus-btn {
    font-size: 14px;
    text-align: right;
    background-color: gray;
        padding: 10px;
}
      a.dropdown-item.contactus-btn:hover {
    font-size: 14px;
    text-align: right;
    background-color: #3f3f3f;
}
    a.text-decoration-none.d-block
 {
    color: #004e78;
}
        .dropdown-menu .dropdown-item {
          background: gray;
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          margin: 6px 0px 0px;
          padding: 10px 5px;
          -webkit-border-radius: 6px;
          -moz-border-radius: 6px;
          border-radius: 6px;
          -webkit-transition: background 0.3s ease;
          -moz-transition: background.3s ease;
          -o-transition: background.3s ease;
          transition: background 0.3s ease;
          color: #fff !important;
        }
           .dropdown-menu .dropdown-item:hover {
          background: #3f3f3f;
        }
          ul.dropdown-menu.show li:hover a{
          background: #3f3f3f;
          }
        ul.dropdown-menu.show {
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px !important;
          width: 100%;
          padding: 0px;
          background-color: hsla(0, 0%, 100%, 0) !important;
          border: 1px !important;
          margin: 0px;
        }
        .offcanvas-title {
    margin-left: auto;
}
        .navbar .navbar-brand {
          padding-top: 0;
          padding-bottom: 0;
          padding-right: 0;
          margin-left: 10px;
          margin-right: -10px !important;
          margin-top: 10px !important;
          margin-bottom: 0;
          padding-left: 20px;
        }
        .btn-language {
          font-size: 18px;
          padding: 9px 0px;
        }
        .btn-dropdown.dropdown-toggle::after {
          display: none !important;
        }
        .mobile-offcanvas {
          width: 100vw !important;
          height: 100vh !important;
          background: #fff;
          animation: slideUp 0.5s ease forwards;
        }
        .dropdown-item {
          direction: ltr;
        }
        .sticky {
          position: fixed !important;
          top: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          background-color: #fff;
        }
        .navbar .navbar-nav .nav-item .nav-link {
          padding-right: 35px !important;
          padding-top: 20px !important;
          padding-bottom: 0px !important;
        }
        .navbar .navbar-nav .nav-item {
          position: relative;
          margin-left: 0px;
          margin-right: 24px;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .offcanvas-backdrop.show {
          opacity: 0.8;
        }

        .offcanvas-header .btn-close {
          position: absolute;
          left: 20px;
          top: 20px;
        }

        nav[dir='rtl'] .navbar-nav {
          direction: rtl;
        }

        nav.sticky {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: #ffffff;
          z-index: 1000;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        button#extraDropdown {
          width: 307px;
          padding: 0px 20px;
          height: 42px;
          text-align: left;
          justify-content: right;
          direction: ltr;
        }

        @media only screen and (max-width: 767px) {
          nav#navbar {
            padding: 0px !important;
            height: 70px;
          }
          li.itmes {
            font-size: 16px !important;
          }
          .navbar .navbar-brand {
            padding-left: 0px;
            width: 130px;
            height: 54px;
            padding-top: 0;
            padding-bottom: 0;
            padding-right: 0;
            margin-left: 56px;
            margin-right: 5px !important;
            margin-top: 0px !important;
            margin-bottom: 0;
          }
          .space-mobile {
          }
        }
        @media (max-width: 767px) {
          .active-btn {
            background: #004e78 !important;
            color: #ffffff !important;
            padding: 14px 14px !important;
            display: inline-block;
            border-radius: 0px;
            font-weight: 600;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
