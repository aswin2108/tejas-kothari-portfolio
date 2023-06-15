import { styled } from "@mui/material";

export const Portfolio = styled("div")(({ isDarkMode }) => ({
  textAlign: "center",
  padding: "20px",
  minHeight: "100vh",
  transition: "all 2s",
  backgroundColor: isDarkMode==="dark" ? "black" : "white",
}));

export const Header = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
}));

export const Content = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignContent: "space-between",
  alignItems: "center",
  gap: "10px",
  opacity: 1,
  transition: "opacity 0.5s",
  padding: "20px",
}));

export const TitleContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const LogoContainer = styled("img")(() => ({
  display: "block",
  objectFit: "contain",
  height: "40px",
  width: "40px",
  borderRadius: "5px",
}));

export const Title = styled("span")(({isDarkMode}) => ({
  marginLeft: "20px",
  fontSize: "30px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-position 2s",
  fontFamily: "Bagel Fat One",
  background: isDarkMode==="dark"? "linear-gradient(to right, #ff00cc, #3333ff)" : "",
  WebkitBackgroundClip: isDarkMode === "dark" ? "text" : "",
  WebkitTextFillColor: isDarkMode === "dark" ? "transparent" : "black",
  color: isDarkMode==="dark"? "transparent": "black",
}));

export const ThemeIconContainer = styled("span")(() => ({
  display: "block",
  objectFit: "contain",
  height: "30px",
  width: "30px",
  cursor: "pointer",
  transition: "all 2s",
}));
