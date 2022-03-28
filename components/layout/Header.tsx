import React from "react";
import { Container } from "styled/Common.styled";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrap>
      <Container>Header</Container>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  text-align: center;
  padding: 20px;
`;
