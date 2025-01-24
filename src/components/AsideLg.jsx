import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Broadcast, Grid, House, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const AsideLg = () => {
  const [searchInput, setSearchInput] = useState();

  return (
    <>
<div className="px-3">
          <Image
        src="public\assets\logos\music.svg"
        alt="Apple Music Logo"
        style={{ filter: "invert(0.9)" }}
        className="mt-4 mb-4"
      />
      <Form
        className="d-flex search-container mb-4"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //  // navigate(`/Cities/${searchInput}`); DA INSERIRE DOVE VOGLIO NAVIGARE
        // }}
      >
        <Button type="submit" variant="link" className="p-0">
          <Search size={12} className="" />
        </Button>
        <Form.Control
          type="text"
          placeholder="Cerca"
          aria-label="Cerca"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </Form>
      <Link to="/" className="text-light opacity-75 text-decoration-none ">
        <div className="d-flex gap-2 mb-3 py-2 px-1 sideMenu rounded-2">
          <House/>
          <p className=" ">Home</p>
        </div>
      </Link>
      <Link to="/" className="text-light opacity-75 text-decoration-none ">
      <div className="d-flex gap-2 mb-3 py-2 px-1 sideMenu rounded-2">
          <Grid/>
          <p className=" ">Novità</p>
        </div>
      </Link>
      <Link to="/" className="text-light opacity-75 text-decoration-none">
      <div className="d-flex gap-2 mb-3 py-2 px-1 sideMenu rounded-2">
          <Broadcast/>
          <p className=" ">Radio</p>
        </div>
      </Link>
</div>


    </>
  );
};

export default AsideLg;
