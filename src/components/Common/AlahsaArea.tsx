'use client';
import React, { useRef, useState, useEffect } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { LocationIcon, MailIcon } from '@/components/icons';

const Riyadharea = () => {
  const contentRefRiyadh = useRef<HTMLDivElement>(null);
  const imageRefRiyadh = useRef<HTMLDivElement>(null);
  const contentRefKing = useRef<HTMLDivElement>(null);
  const imageRefKing = useRef<HTMLDivElement>(null);

  const [contentVisibleRiyadh, setContentVisibleRiyadh] = useState(false);
  const [imageVisibleRiyadh, setImageVisibleRiyadh] = useState(false);
  const [contentVisibleKing, setContentVisibleKing] = useState(false);
  const [imageVisibleKing, setImageVisibleKing] = useState(false);

  useEffect(() => {
    // Riyadh content
    const observerContentRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleRiyadh(true);
          observerContentRiyadh.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (contentRefRiyadh.current) observerContentRiyadh.observe(contentRefRiyadh.current);

    // Riyadh image
    const observerImageRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleRiyadh(true);
          observerImageRiyadh.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (imageRefRiyadh.current) observerImageRiyadh.observe(imageRefRiyadh.current);

    // King Salman content
    const observerContentKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleKing(true);
          observerContentKing.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (contentRefKing.current) observerContentKing.observe(contentRefKing.current);

    // King Salman image
    const observerImageKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleKing(true);
          observerImageKing.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (imageRefKing.current) observerImageKing.observe(imageRefKing.current);

    return () => {
      observerContentRiyadh.disconnect();
      observerImageRiyadh.disconnect();
      observerContentKing.disconnect();
      observerImageKing.disconnect();
    };
  }, []);

  return (
    <div className="service-overview-area mb-5 mt-3 mt-lg-5">
      <div className="container">
        {/* Riyadh Section */}
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-6 col-md-12">
            <div
              ref={contentRefRiyadh}
              className={`service-overview-content animate-left ${contentVisibleRiyadh ? 'show' : ''}`}
            >
              <h2>Bnoon – Al Ahsa</h2>
              <p>
                Situated within{' '}
                <strong>
                  <a
                    href="https://almoosahealthgroup.org/en/hospital-services/bnoon-fertility-center/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none link-color"
                  >
                    Almoosa Specialist Hospital,
                  </a>
                </strong>{' '}
                Bnoon – Al Ahsa brings world-class fertility and women’s health services to the
                heart of Saudi Arabia’s Eastern Province. The center is designed to offer an
                exceptional patient experience, combining advanced reproductive technologies with a
                compassionate, holistic model of care.
              </p>

              <p>
                As part of Bnoon’s growing national network, the Al Ahsa center reinforces our
                commitment to ensuring families across the Kingdom have access to the highest
                standards of reproductive medicine, delivered by leading IVF consultants in a
                state-of-the-art clinical environment.
              </p>
              <p>
                Equipped with cutting-edge embryology laboratories, the center provides a
                comprehensive range of fertility services—including IVF, ICSI, IUI, egg and sperm
                freezing, PGT-AI, reproductive endocrinology, and full male and female fertility
                diagnostics—supported by streamlined workflows and direct collaboration with other
                departments within Almoosa Specialist Hospital.
              </p>
              <p>
                <strong>Bnoon – Al Ahsa</strong> marks a significant step forward in elevating
                fertility care across the Eastern Region, uniting innovation, clinical excellence,
                and unwavering support for every family’s journey to parenthood.
              </p>
              <div className="d-flex mt-3 gap-4 flex-column flex-md-row">
                {/* Location */}
                <div className="d-flex align-items-center">
                  <LocationIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a
                    href="https://maps.app.goo.gl/JvtSAza6ZwKchCBP8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color text-decoration-none"
                  >
                    Bnoon – Al Ahsa
                  </a>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center">
                  <MailIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a href="mailto:info@bnoon.sa" className="text-color text-decoration-none">
                    info@bnoon.sa
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={imageRefRiyadh}
              className={`service-overview-image animate-right ${imageVisibleRiyadh ? 'show' : ''}`}
              style={{
                boxShadow: '50px 50px 0px #d7f2fb',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              <OptimizedImage
                imageName="location-alahsa"
                alt="Bnoon Al Ahsa"
                width={580}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
         .link-color{
          color: #000000ff;
         }
           a.text-color.text-decoration-none {
    color: #004E78;
     font-size: 18px !important;
}
  span.text-color {
    color: #004E78 !important;
    font-size: 18px !important;
  }
    .location-text h2{
    margin-bottom: 10px;
    }
     /* Mobile Responsive */
  @media (max-width: 767px) {
   span.text-color {
    color: #004E78 !important;
    font-size: 14px !important;
  }
    .image-loc{
text-align: right;
}
  a.text-color.text-decoration-none {
    color: #004E78;
     font-size: 14px !important;
}
  }
  }
`}</style>
    </div>
  );
};

export default Riyadharea;
