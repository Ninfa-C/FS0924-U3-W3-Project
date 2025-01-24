import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CarouselCard from "./CarouselCards";

const MultiItemCarousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mb-5">
      <CarouselCard
        src="public\assets\images\1a.png"
        alt="new radio"
        text="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill."
      />
      <CarouselCard
        src="public\assets\images\1b.png"
        alt="new radio"
        text="Ecco la nuova casa della musica latina."
      />
      <CarouselCard
        src="public\assets\images\1c.png"
        alt="new radio"
        text="Le nuove hit del momento per il workout."
      />
    </Slider>
  );
};

export default MultiItemCarousel;
