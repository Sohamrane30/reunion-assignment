import React from "react";
import styled from "styled-components";
import { country_list, price_range, property_type } from "../dummy";
const Filter = () => {
  return (
    <Container>
      <section>
        <div>
          <header>
            <h1>Get Your Desired Propery Here</h1>
          </header>
        </div>
        <form>
          <input type={"text"} placeholder="Search" />
          <button type="button">icon</button>
        </form>
      </section>
      <Box>
        <div>
          <header>
            <h2>Location</h2>
          </header>
          <select name="location" id="location">
            {country_list.map((country) => {
              return <option value={country.toLowerCase()}>{country}</option>;
            })}
          </select>
        </div>
        <div>
          <header>
            <h2>Rate</h2>
          </header>
          <select name="price" id="price">
            {price_range.map((range) => {
              return <option value={range}>{range}</option>;
            })}
          </select>
        </div>
        <div>
          <header>
            <h2>Move-In Date</h2>
          </header>
          <input type="date" />
        </div>
        <div>
          <header>
            <h2>Type</h2>
          </header>
          <select name="type" id="type">
            {property_type.map((type) => {
              return <option value={type.toLowerCase()}>{type}</option>;
            })}
          </select>
        </div>
        <div>
          <button type="button">Search</button>
        </div>
      </Box>
    </Container>
  );
};

export default Filter;

const Container = styled.section`
  position: fixed;
  z-index: 900;
  background-color: #171616;
  top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1.5rem;
  & > section {
    display: flex;
    padding: 0.5rem 1.5rem;
    width: 100%;
    & > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      & > header {
        justify-self: left;
        font-weight: bold;
        & h1 {
          font-size: larger;
        }
      }
    }
    & form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      & input {
        height: 4vh;
        width: auto;
        border-radius: 2rem;
        outline: none;
        border: 2px solid black;
        padding: 0.1rem 0.5rem;
      }

      & button {
        outline: none;
        border: none;
        background: inherit;
      }
    }
  }
`;

const Box = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  height: 10vh;
  width: 100%;
  & > div {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    height: 4rem;
    width: auto;
    background-color: #211f1f;
    & > header {
      font-size: small;
      & h2 {
        padding: 0;
        margin: 0;
      }
    }

    & > select {
      width: 100%;
    }

    & > input {
      width: 80%;
    }
  }
`;
