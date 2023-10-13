import { heroSlides } from "../data/home";
import "./hero-slider.css";
import Image from "next/image";
export default function HeroSlider({ }) {
  return (
    <>
      <div id="hero-slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {heroSlides.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#hero-slider"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {heroSlides.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <Image
                src={item.image}
                className="d-block w-100 h-100"
                alt="slider image"
                width={1920}
                height={1080}
                style={{ objectFit: "cover" }}
              />
              {/* <img
                src={item.image}
                className="d-block w-100"
                alt="Slider Image"
              /> */}

              <div className="overlay"></div>
              <div className="carousel-caption">
                <div className="content">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-slider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-slider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
