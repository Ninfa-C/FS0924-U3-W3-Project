import Slider from "react-slick";
import EpisodeCards from "./EpisodeCards";

const SecondCarousel = () => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <Slider {...settings}>
      <EpisodeCards
        src="public\assets\images\2a.png"
        alt="new radio"
        text="Pròlogo con Abuelo"
      />
      <EpisodeCards
        src="public\assets\images\2b.png"
        alt="new radio"
        text="The Wanderer"
      />
      <EpisodeCards
        src="public\assets\images\2c.png"
        alt="new radio"
        text="Michael Bublè & Carly Pearce"
      />
      <EpisodeCards
        src="public\assets\images\2d.png"
        alt="new radio"
        text="Staphan Moccio: The Zane Lowe Interview"
      />
      <EpisodeCards
        src="public\assets\images\2e.png"
        alt="new radio"
        text="Chat Spotlight: Julia Michaels"
      />
      <EpisodeCards
        src="public\assets\images\2f.png"
        alt="new radio"
        text="Karri & Travis Mills"
      />
    </Slider>
  );
};

export default SecondCarousel;