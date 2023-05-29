import { styled } from "@mui/material";

export const Tile = styled("div")(({ isDarkMode }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--tile-color)",
  padding: "10px",
  width: "var(--tile-width)",
  height: "var(--tile-height)",
  cursor: "pointer",
  perspective: "1000px",
  transformStyle: "preserve-3d",
  textAlign: "center",
  maxWidth: "30vw",
  borderRadius: "5PX",
  boxShadow: isDarkMode ? "" : "5px 5px 5px #111111",
}));

export const TileName = styled("div")(() => ({
  fontSize: "24px",
  color: "var(--text-color)",
  fontWeight: "bold",
  whiteSpace: "normal" /* Allow multiline text */,
  overflow: "hidden" /* Hide overflowing content */,
  textOverflow: "ellipsis" /* Add ellipsis for very long content */,
  overflowWrap: "anywhere",
}));

export const TileContent = styled("div")(() => ({
  fontWeight: "lighter",
  fontSize: "18px",
  color: "var(--text-color)",
  whiteSpace: "normal" /* Allow multiline text */,
  overflow: "hidden" /* Hide overflowing content */,
  textOverflow: "ellipsis" /* Add ellipsis for very long content */,
  WebkitLineClamp: 4 /* Number of lines to show */,
  WebkitBoxOrient: "vertical",
}));

export const FlippedTile = styled("img")(() => ({
  height: "100%",
  width: "100%",
}));

export const IconContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
}));