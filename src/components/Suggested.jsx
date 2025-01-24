/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import SongCard from "./SongCard";

const Suggested = () => {
  const [random, setRandom] = useState("");
  const [songs, setSongs] = useState();

  const artists = useSelector((state) => {
    return state.default.artists;
  });

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5).slice(0, 1);
  };

  const getSongs = async () => {
    //console.log(random);
    const artistUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${random}`;
    try {
      const response = await fetch(artistUrl);
      if (response.ok) {
        const { data } = await response.json();
        setSongs(data.slice(0, 9));
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setRandom(shuffle(artists));
  }, []);

  useEffect(() => {
    if (random) {
      getSongs(random);
      //console.log(songs);
    }
  }, [random]);

  return (
    <>
      <h5 className="mb-3 fw-bolder">
        Nuove uscite
        <span className="ms-1">
          <ChevronRight size={15} className=" opacity-75" />
        </span>
      </h5>
      {songs && (
        <Row xs={3} md={5} className="song-list">
          {songs.map((item) => (
            <SongCard item={item} key={item.id} />
          ))}
        </Row>
      )}
    </>
  );
};

export default Suggested;
