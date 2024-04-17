import { useEffect, useState } from "react";
import VideoStyled, {
  VideoContainer,
  VideoLabel,
  VideoLink,
  VideoFrame,
} from "./VideoStyled";



function Video() {
  const [linkVideo, setLinkVideo] = useState("");  
  useEffect(() => {
    const video = JSON.parse(localStorage.getItem("video"));
    if (video) {
      setLinkVideo(video);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("video", JSON.stringify(linkVideo));
  }, [linkVideo]);

  return (
    <VideoStyled>
      <VideoContainer>
        <VideoLabel>Cole o link do video</VideoLabel>
        <VideoLink
          value={linkVideo}
          onChange={(ev) => setLinkVideo(ev.target.value)}
        ></VideoLink>
        <VideoFrame
          src={linkVideo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></VideoFrame>
      </VideoContainer>
    </VideoStyled>
  );
}


export default Video;
