import React from "react";
import styled from "styled-components";

const FeedItem = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <header>
        <h3>{data.property_name}</h3>
      </header>
      <section>
        <p>{data.price}</p>
        <p>{data.location}</p>
        <p>{data.property_type}</p>
      </section>
    </Container>
  );
};

export default FeedItem;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  height: auto;
  width: 60%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5), 0px 0px 20px rgba(0, 0, 0, 0.5),
    0px 0px 30px rgba(0, 0, 0, 0.5);
`;
