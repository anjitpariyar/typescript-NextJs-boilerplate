import React from "react";
import { Container } from "styled/Common.styled";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderWrap>
      <Container>
        <Nav>
          <Brand>
            <Link href="/">
              <a>Logo</a>
            </Link>
          </Brand>
          <Action>
            <span>Action</span>
          </Action>
        </Nav>
      </Container>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  text-align: center;
  padding: 20px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  a {
    color: currentColor;
    text-decoration: none;
  }
`;

const Action = styled.div``;
