import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <div>
        <header>
          <h1>EcommRep</h1>
        </header>
      </div>
      <nav>
        <ul>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage</li>
          <li>Resources</li>
        </ul>
      </nav>
      <section>
        <button>Login</button>
        <button>Register</button>
      </section>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  position: fixed;
  z-index: 1000;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  padding: 0 1rem;
  gap: 1rem;
  & div header {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: start;
  }

  & > section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    & > button {
      padding: 0.2rem 0.5rem;
      background-color: inherit;
      border: 1px solid #568dc4;
      outline: none;
      color: whitesmoke;
    }
  }

  & > nav {
    display: grid;
    place-items: center;
    & ul {
      display: flex;
      list-style: none;
      gap: 1rem;
    }
  }
`;
