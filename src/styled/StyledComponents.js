import { InputBase } from "@material-ui/core";
import styled from "styled-components";

export const NetflixInput = styled(InputBase)`
  width: ${({ width }) => width};
  z-index: 30;
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  padding: ${({ padding }) => padding || "13px 10px"};
  border-radius: ${({ borderRadius }) => borderRadius || "2px"}; ;
`;

const handleWidth = (wide) => {
  switch (wide) {
    case "fullwidth":
      return "100%";
    case "middlewidth":
      return "200px";
    default:
      return "auto";
  }
};

export const NetflixButton = styled.button`
  z-index: 15;
  background-color: ${({ color }) =>
    color === "gray" ? "rgba(51, 51, 51, 0.5)" : "#e50914"};
  color: #fff;
  border-radius: 4px;
  text-transform: inherit;
  padding: 7px 17px;
  font-size: 1.1rem;
  border: none;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  width: ${({ wide }) => handleWidth(wide)};
`;

export const NetflixButtonStarted = styled.button`
  z-index: 15;
  background-color: #e50914;
  color: #fff;
  border-radius: 2px;
  text-transform: inherit;
  padding: 15px;
  font-size: 26px;
  border: none;
  outline: none;
  cursor: pointer;
`;
