import React, { useState, useEffect } from "react";
import { Sun, Moon } from "react-feather";
import {
  Portfolio,
  Header,
  Content,
  TitleContainer,
  LogoContainer,
  ThemeIconContainer,
  Title,
} from "./AppStyles";
import { LogoImage, HiGif } from "../assets";
import data from "../data.json";
import { Tiles } from "../tiles";
import { ThemeContext } from "../ThemeContext";
import { getTileSizes, getRandomColors } from "../utils";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState("light");
  const [areTilesVisible, setAreTilesVisible] = useState(true);
  const [tileColors, setTileColors] = useState([]);
  const [tileSizes, setTileSizes] = useState({});

  const toggleTheme = () => {
    setIsDarkMode((current) => (current === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setTileSizes(getTileSizes());
  }, [areTilesVisible]);

  const handleTitleClick = () => {
    setAreTilesVisible(!areTilesVisible); // Toggle the visibility of tiles
  };

  const shuffleColors = () => {
    let shuffledColors;
    shuffledColors = data.tiles.map(() => getRandomColors());
    setTileColors([...shuffledColors]);
  };

  return (
    <ThemeContext.Provider value={{isDarkMode}}>
      <Portfolio isDarkMode={isDarkMode}>
        <Header>
          <TitleContainer>
            <LogoContainer src={LogoImage} alt="Logo image" />
            <Title isDarkMode={isDarkMode} onClick={handleTitleClick}>Aswin Shailajan <img src={HiGif} alt="Hai..!" width="30px" /></Title>
          </TitleContainer>
          <ThemeIconContainer onClick={toggleTheme}>
            {isDarkMode==="dark" ? <Moon color="#D3D3D3" size={30}/> : <Sun color="#E8A317" size={30}/>}
          </ThemeIconContainer>
        </Header>
        <Content>
          {areTilesVisible &&
            data.tiles.map((tile, index) => (
              <Tiles
                key={index}
                tileName={tile.tileName}
                content={tile.content}
                isSquare={tile.isSquare}
                color={tileColors[index] || tile.color} // Use the shuffled color if available
                shuffleColors={shuffleColors} // Pass the shuffleColors function
                tileSize={tileSizes[index]}
                flipped={tile.flipped}
              />
            ))}
        </Content>
      </Portfolio>
    </ThemeContext.Provider>
  );
};
