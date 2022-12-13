import React from "react";
import styled from "styled-components";
import "../shared/theme.css";

const AppLayout = ({ children }) => {
  return <Box>{children}</Box>;
};

export default AppLayout;

let Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 430px;
  height: 115vh;
  // background: black;
  box-shadow: 0 0 2rem 0.1rem rgba(0, 0, 0, 0.2);
  font-family: "Hahmlet-Regular";
`;
