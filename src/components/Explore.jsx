import { Row } from "react-bootstrap";
import ExplorerCard from "./ExplorerCard";

const Explore = () => {
  return (
    <>
      <h5 className="mb-3 fw-bolder">Altro da Esplorare</h5>
      <Row className="w-100 mb-5">
        <ExplorerCard text="Esplora per genere" />
        <ExplorerCard text="Decenni" />
        <ExplorerCard text="Attività e stati d'animo" />
        <ExplorerCard text="Worldwide" />
        <ExplorerCard text="Classifiche" />
        <ExplorerCard text="Audio spaziale" />
        <ExplorerCard text="Video musicali" />
        <ExplorerCard text="Nuovi Artisti" />
        <ExplorerCard text="Hit del passato" />
      </Row>
    </>
  );
};

export default Explore;
