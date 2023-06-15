import React, { useContext, useState } from "react";
import {
  TileName,
  IconContainer,
  FlippedTile,
  TileContent,
  Tile,
} from "./TileStyles";
import { ThemeContext } from "../ThemeContext";
import { getRandomSize } from "../utils";

export const Tiles = ({
  tileName,
  content,
  isSquare,
  color,
  shuffleColors,
  flipped,
}) => {
 
  const [isFlipped, setIsFlipped] = useState(flipped);
  const [isAnimating, setIsAnimating] = useState(false);
  const [tileSize, setTileSize] = useState(`${getRandomSize()}px`);
  
  const handleClick = () => {
    setTileSize(`${getRandomSize()}px`);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      if (tileName === "Color Shuffle") {
        shuffleColors();
      }
    }, 300);

    if(tileName !== "Color Shuffle")
      setIsFlipped(!isFlipped);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      window.open(content.url, "_blank");
    }, 500);
  };

  const renderContent = () => {
    if (content.type === "iconLink") {
      return (
        <IconContainer isAnimating={isAnimating} onClick={handleLinkClick}>
          {!isFlipped ? (
            <FlippedTile src={content.iconSrc} alt={content.iconAlt} />
          ) : (
            <Tile />
          )}
        </IconContainer>
      );
    } else {
      return <TileContent isDarkMode={isDarkMode}>{content}</TileContent>;
    }
  };
  
  const {isDarkMode} = useContext(ThemeContext);

  const tileStyle = {
    "--tile-color": color,
    "--text-color": isDarkMode==="dark" ? "white" : "black",
  };
  if (isSquare) {
    tileStyle["--tile-width"] = tileSize;
    tileStyle["--tile-height"] = tileSize;
  } else {
    tileStyle["--tile-width"] = "400px";
    tileStyle["--tile-height"] = tileSize;
  }

  return (
    <Tile
      style={tileStyle}
      isAnimating={isAnimating}
      tileSize={tileSize}
      onClick={handleClick}
      isDarkMode={isDarkMode}
    >
      <TileName isDarkMode={isDarkMode}>{isFlipped ? tileName : renderContent()}</TileName>
    </Tile>
  );
};
