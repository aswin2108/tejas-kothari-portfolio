import { styled } from "@mui/material";

export const Tile = styled("div")(({ isDarkMode, isAnimating }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--tile-color)",
  width: "var(--tile-width)",
  height: "var(--tile-height)",
  cursor: "pointer",
  perspective: "1000px",
  transformStyle: "preserve-3d",
  textAlign: "center",
  maxWidth: "30vw",
  borderRadius: "5PX",
  boxShadow: isDarkMode==="dark" ? "5px 5px 5px #808080" : "5px 5px 5px #111111",
  animation: isAnimating ? "rotation 0.4s forwards" : "none",
  transition:
    "background-color 0.2s ease, box-shadow 0.2s ease, width 0.2s ease 0.2s, height 0.2s ease 0.2s",
  padding: "2px",
        
  "@keyframes rotation": {
    "0%": {
      transform: "rotateY(0deg)",
    },
    "100%": {
      transform: "rotateY(360deg)",
    },
  },
  "&:hover": {
    padding:"0px",
    textShadow: "-1px -1px 0 var(--tile-color), 1px -1px 0 var(--tile-color), -1px 1px 0 var(--tile-color), 1px 1px 0 var(--tile-color)",
    backgroundColor: isDarkMode==="dark" ? "black": "white",
    border: "2px solid var(--tile-color)",
  },
  "&:hover div": {
    textShadow: "-1px -1px 0 var(--tile-color), 1px -1px 0 var(--tile-color), -1px 1px 0 var(--tile-color), 1px 1px 0 var(--tile-color)",
    color: isDarkMode==="dark" ? "black":"white",
    
    transition: "color 0.2s"
  }, 
}));

export const TileName = styled("div")(({isDarkMode}) => ({
  fontSize: "24px",
  color: isDarkMode==="light"? "black":"white",
  fontWeight: "bold",
  whiteSpace: "normal" /* Allow multiline text */,
  overflow: "hidden" /* Hide overflowing content */,
  textOverflow: "ellipsis" /* Add ellipsis for very long content */,
  overflowWrap: "anywhere",
  transition: "color 1s",
 
}));

export const TileContent = styled("div")(({isDarkMode}) => ({
  fontWeight: "lighter",
  fontSize: "18px",
  color: isDarkMode==="light"? "black":"white",
  whiteSpace: "normal" /* Allow multiline text */,
  overflow: "hidden" /* Hide overflowing content */,
  textOverflow: "ellipsis" /* Add ellipsis for very long content */,
  WebkitLineClamp: 4 /* Number of lines to show */,
  WebkitBoxOrient: "vertical",
  transition: "color 1s",
}));

export const FlippedTile = styled("img")(({ isAnimating }) => ({
  height: "100%",
  width: "100%",
  
  borderRadius:"20px",
}));

export const IconContainer = styled("div")(({ isAnimating }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  animation: isAnimating ? "rotation 0.4s forwards" : "none",
  transition:
    "background-color 0.2s ease, box-shadow 0.2s ease, width 0.2s ease 0.2s, height 0.2s ease 0.2s",
  "@keyframes rotation": {
    "0%": {
      transform: "rotateY(0deg)",
    },
    "100%": {
      transform: "rotateY(360deg)",
    },
  },
}));
