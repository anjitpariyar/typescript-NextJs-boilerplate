import React from "react";
import { Container } from "styled/Common.styled";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrap>
      <Container>Footer</Container>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  text-align: center;
  padding: 20px;
`;
