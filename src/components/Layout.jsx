import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Main>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow-x: hidden;
`;
