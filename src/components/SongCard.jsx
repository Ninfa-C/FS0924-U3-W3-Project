/* eslint-disable react/prop-types */
import { Col, Image, Row } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const SongCard = ({ item }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => {
    return state.user.favourites;
  });

  return (
    <Col>
      <div className="text-white">
        <Image
          src={item.album.cover_medium}
          alt={item.album.title}
          fluid
          className=" rounded-3 img-fluid"
        />
        <Row className="card-body bg-custom-dark py-3 align-items-center">
          <Col xs={10}>
            <p className="mb-2 song-title ">{item.title}</p>
            <p className="card-text mb-2 opacity-50">{item.artist.name}</p>
          </Col>
          <Col xs={2}>
            {songs.includes(item.id) ? (
              <HeartFill
                onClick={() => {
                  dispatch({
                    type: "REMOVE",
                    payload: item.id,
                  });
                }}
                style={{ color: "#FA586A", cursor: "pointer" }}
              />
            ) : (
              <Heart
                onClick={() => {
                  dispatch({
                    type: "ADD",
                    payload: item.id,
                  });
                }}
                style={{ cursor: "pointer" }}
              />
            )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};
export default SongCard;
