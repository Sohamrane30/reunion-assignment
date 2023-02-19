import React from "react";
import styled from "styled-components";
import FeedItem from "../components/FeedItem";
import Filter from "../components/Filter";
import { dummy } from "../dummy";

const Feed = () => {
  return (
    <Container>
      <Filter />
      <FeedList>
        {dummy?.map((entry) => {
          return <FeedItem data={entry} />;
        })}
      </FeedList>
    </Container>
  );
};

export default Feed;

const Container = styled.main`
  width: 100%;
  height: auto;
`;

const FeedList = styled.section`
  position: absolute;
  top: 28vh;
  left: 0;
  width: 100%;
  padding: 2rem 0;
  display: grid;
  row-gap: 3rem;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;
