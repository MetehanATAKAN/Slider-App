import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import type { Photo } from "../../types/photo";
import { keyframes } from "@emotion/react";

const slideFromRight = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;

const slideFromLeft = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

const transitionTime = 800;
const autoSlideInterval = 3000;

type PhotoSliderProps = {
  data: Photo[] | undefined;
};

const PhotoSlider: React.FC<PhotoSliderProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [mode, setMode] = useState<"manual" | "auto">("manual");

  const handleSlide = (dir: "left" | "right") => {
    if (!data || nextIndex !== null) return;

    const newIndex =
      dir === "right"
        ? (currentIndex + 1) % data.length
        : (currentIndex - 1 + data.length) % data.length;

    setDirection(dir);
    setNextIndex(newIndex);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
    }, transitionTime);
  };

  useEffect(() => {
    if (mode !== "auto" || !data) return;

    const interval = setInterval(() => {
      handleSlide("right");
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [mode, data, currentIndex]);

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value as "manual" | "auto");
  };

  return (
    <Box>
      {data && (
        <Box>
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <Typography>Slider Mode</Typography>
            <RadioGroup
              row
              value={mode}
              onChange={handleModeChange}
              aria-label="slider-mode"
              name="slider-mode"
            >
              <FormControlLabel
                value="manual"
                control={<Radio />}
                label="Manual"
              />
              <FormControlLabel value="auto" control={<Radio />} label="Auto" />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 400,
              overflow: "hidden",
              borderRadius: 2,
              backgroundColor: "#000",
            }}
          >
            <Box
              component="img"
              src={data[currentIndex].download_url}
              alt="current"
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />

            {nextIndex !== null && (
              <Box
                component="img"
                src={data[nextIndex].download_url}
                alt="next"
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 2,
                  animation: `${
                    direction === "right" ? slideFromRight : slideFromLeft
                  } ${transitionTime}ms ease-in-out forwards`,
                }}
              />
            )}

            {mode === "manual" && (
              <>
                <IconButton
                  aria-label="back"
                  onClick={() => handleSlide("left")}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 16,
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 3,
                  }}
                >
                  <ArrowBackIos />
                </IconButton>
                <IconButton
                  aria-label="forward"
                  onClick={() => handleSlide("right")}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: 16,
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 3,
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PhotoSlider;
