import { Container } from "react-bootstrap";
import MultiItemCarousel from "./MultiItemCarousel";
import SecondCarousel from "./SecondCarousel";
import { ChevronRight } from "react-bootstrap-icons";
import Suggested from "./Suggested";
import Explore from "./Explore";
import { useMediaQuery } from "react-responsive";
import TopNavLg from "./TopNavLg";

const MyHomepage = () => {
  const lg = useMediaQuery({ query: '(min-width: 992px)' });
  return (
    <>
      <Container fluid className="">
      {lg ? < TopNavLg/> : ''}
      <div className="px-4">
        <h1 className="title mt-4">Novità</h1>
        <MultiItemCarousel />
        <h5 className="mb-3 fw-bolder">
          Nuovi episodi radio{" "}
          <span>
            <ChevronRight size={15} className=" opacity-75" />
          </span>
        </h5>
        <SecondCarousel />
        <Suggested />
        <Explore />
      </div>
        
      </Container>
    </>
  );
};

export default MyHomepage;
