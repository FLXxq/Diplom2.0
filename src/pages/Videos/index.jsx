import React from "react";
import YouTube from "react-youtube";

import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";

const Videos = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <Header content="Видео" />
      <Typography>Zivem</Typography>
      <Box>
        <YouTube
          videoId="U1q99Wr6nE0"
          opts={opts}
          onReady={(e) => e.target.pauseVideo()}
        />
      </Box>
    </>
  );
};

export default Videos;
