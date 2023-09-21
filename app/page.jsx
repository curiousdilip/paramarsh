"use client"
import React from 'react'
import Header from './components/Header'
import "./home.css"
import { clientLogo, clients, expertise, heroSlides, projects } from './data/home'
import Footer from './components/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
const page = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header />

      <section id="hero">
        <div id="hero-slider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {heroSlides.map((item, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#hero-slider"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {heroSlides.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <Image
                  src={item.image}
                  className='d-block w-100 h-100'
                  alt='slider image'
                  width={1920}
                  height={1080}
                  style={{ objectFit: "cover" }}
                />
                {/* <img src={item.image} className="d-block w-100" alt="Slider Image" /> */}
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#hero-slider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#hero-slider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2 data-aos="fade-left">About Paramarsh</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p data-aos="fade-right">
                PARAMARSH is a diverse end to end IT solutions provider offering a comprehensive set of software and IT services including strategic consulting, creative design, technology integration and implementation. With a rich experience of over 25 years, we have successfully completed a large number of projects across diverse platforms, technologies and geographical locations.Our focus is on serving our customers better. We aim to utilize our diverse expertise to help our customers re-engineer and re-invent their businesses in order to compete successfully in an ever-changing marketplace.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="expertise">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2 data-aos="fade-left">Why Choose us
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>A few reasons why our valued customers choose us.</h3>
              <div className="accordion" id="expertise-accordion">
                {expertise.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${index === 0 ? 'collapsed' : ''}`} // Add 'collapsed' class to all except the first one
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`} // Use the index to create unique IDs
                        aria-expanded={index === 0 ? 'true' : 'false'} // Set 'true' for the first item, 'false' for others
                        aria-controls={`collapse${index}`} // Use the index to reference the correct collapse element
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`} // Use the index to reference the correct collapse element
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} // Add 'show' class to the first one
                      data-bs-parent="#expertise-accordion"
                    >
                      <div className="accordion-body">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className="col-md-6">
              <Image
                src="/expertise.jpeg"
                alt='expertise'
                width={500}
                height={500}
                style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2>Our Products
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="products">
                <div className="boxes">
                  <div className="product">
                    <h4>XS-ALL</h4>
                    <h5>Content organised, accessible anywhere anytime
                    </h5>
                    <img src="/xs-all.jpg" alt="" />
                    <ul>
                      <li>XS-ALL provides a central database for all organisation content needs.</li>
                      <li> Manage all of your content from one place and back up to a secure cloud</li>
                      <li>Manage complex approval workflows and content lifecycle</li>
                      <li> Access your content anytime anywhere (supported on multiple platforms)</li>
                      <li> Keep content updated at all times and in sync</li>
                    </ul>
                    {/* {products.map((item, index) => (
                      <div className="box" key={index}>
                        <div className="icon">
                          <i class={item.icon}></i>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}
                        </p>
                      </div>
                    ))} */}
                  </div>
                  <div className="product">
                    <h4>CONTRIEVE</h4>
                    <h5>Your organisation's Smart Address Book
                    </h5>
                    <img src="/contrieve.jpg" alt="" />
                    <ul>
                      <li>Organise and update contacts</li>
                      <li> Import from multiple online sources/address books</li>
                      <li>Search, filter & sort contacts</li>
                      <li>View in tabular & card formats</li>
                      <li>Share contacts</li>
                      <li>Export contacts to csv</li>
                      <li>Prepare custom mailing lists</li>
                      <li>Send bulk & personal emails</li>
                      <li>Send event invitations</li>
                      <li>Print labels and envelopes</li>
                    </ul>
                  </div>
                  <div className="product">
                    <h4>METEOR</h4>
                    <h5>Mobile and Web based Surveillance Toolkit
                    </h5>
                    <img src="/meteor.jpg" alt="" />
                    <ul>
                      <li>Create a questionnaire within minutes</li>
                      <li>Create advanced questionnaires using multiple option, Types, sections & instructions</li>
                      <li>Order questions at runtime based on user response based on user defined rules</li>
                      <li>Capture and synchronize responses in real time</li>
                      <li>Capture location (GPS) and date-time of responses automatically</li>
                    </ul>
                    <a href="http://mymeteor.net/" target='_blank'>Full Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2>Our Recent Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="boxes">

                {projects.map((item, index) => (
                  <div className="project" key={index}>
                    <div className="img-box"><img src={item.image} className='img-fluid' />
                    </div>
                    <div className="details">
                      <h3>{item.title}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="clients">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2>Our Clients
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <p>Our clientele is quite diversified covering a vast range of vertical and horizontal segments. It includes international agencies, government sector, non-profit organizations, start-ups and SMBs in India and overseas, educational institutions and research organizations.
              </p>

              <Swiper
                loop={true}
                autoplay={{
                  delay: 1200,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay]}
                className="client-logo"
              >
                {clientLogo.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      width={130}
                      height={80}
                      src={item.logo}
                      style={{
                        objectFit: "contain"
                      }}
                      alt='client logo'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={10}
                pagination={true}
                loop={true}
                cssMode={true}
                // breakpoints={{
                //   640: {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },
                //   768: {
                //     slidesPerView: 2,
                //     spaceBetween: 40,
                //   },
                //   1024: {
                //     slidesPerView: 3,
                //     spaceBetween: 50,
                //   },
                // }}
                modules={[Navigation, Pagination]}
                className="reviews"
              >
                {clients.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="review-box ">
                      <p>{item.review}</p>

                      <div className="author">
                        <h3>{item.name}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section >
      <section id="works">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2>Work For Us
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>At Paramarsh we believe that employee satisfaction, enhanced performance and customer satisfaction are tied in a symbiotic relationship. Hence our focus lies on developing and harnessing these synergies so as to attain the highest levels of excellence in execution.

                When our clients are faced with a problem, we want to provide them the best solution. The best solutions, we believe result from an amalgamation of imagination and experience. At PARAMARSH, we bring together bright young minds and experienced experts to set the stage for creativity and excellence. Our employees are a true reflection of who we are; an indicator of the competitive advantage we enjoy in the IT industry today.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page
