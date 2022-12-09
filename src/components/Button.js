import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return <ButtonContainer>{props.title}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  background-color: #da234f;
  color: white;
  width: 327px;
  height: 56px;
  border-radius: 10px;
  border: none;

  font-family: "Hahmlet";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  text-align: center;
  letter-spacing: -0.07em;

  a {
    text-decoration: none;
    color: white;
  }
`;
