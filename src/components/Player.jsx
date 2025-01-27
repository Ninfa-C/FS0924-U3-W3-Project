import { Col, Image } from "react-bootstrap";
import {
  FastForwardFill,
  PauseFill,
  PlayFill,
  Repeat,
  RewindFill,
  Shuffle,
  VolumeMuteFill,
  VolumeUpFill,
} from "react-bootstrap-icons";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { useSelector } from "react-redux";

const Player = () => {
  const song = useSelector((state) => state.user.playing);

  return (
    <Col className="fixed-bottom d-flex px-3 bg-custom-light ">
      <div className="d-flex gap-3 justify-content-center align-items-center">
        <Image src={song.cover} />
        <div>
          <p>{song.song}</p>
          <p className=" opacity-50">{song.artist}</p>
        </div>
      </div>
      <AudioPlayer
        autoPlay
        src={song.preview}
        onPlay={() => console.log("onPlay")}
        volume={0.5}
        showFilledVolume={true}
        customIcons={{
          play: <PlayFill size={30} />,
          pause: <PauseFill size={30} />,
          loop: <Shuffle size={25} />,
          loopOff: <Repeat size={25} />,
          volume: <VolumeUpFill size={25} />,
          volumeMute: <VolumeMuteFill size={25} />,
          forward: <FastForwardFill size={25} />,
          rewind: <RewindFill size={25} />,
        }}
      />
    </Col>
  );
};

export default Player;
