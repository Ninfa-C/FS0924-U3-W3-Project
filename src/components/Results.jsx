/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongCard from "./SongCard";
import { Container, Row } from "react-bootstrap";

const Result = () => {
  const param = useParams();
  const [song, setSong] = useState();

  const getSongs = async () => {
    const artistUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${param.id}`;
    try {
      const response = await fetch(artistUrl);
      if (response.ok) {
        const { data } = await response.json();
        setSong(data);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }};


  useEffect(()=>{
    getSongs()
    console.log(song)
  },[param])

  return(<>
  <h2 className="px-3 py-4">Result</h2>
  {song && (
    <Container fluid>
        <Row xs={3} md={5} className="song-list px-3">
          {song.map((item) => (
            <SongCard item={item} key={item.id} />
          ))}
        </Row>
    </Container>
        
      )}
  </>);
};

export default Result;
