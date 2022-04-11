import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 50px;
  margin: auto;
  width: 50vw;
`;

const Home = () => {
  return (
    <Container>
    <div>
        <Link to="/animals">
          <h2>All Animals</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          facilisi nullam vehicula ipsum. Hac habitasse platea dictumst
          vestibulum rhoncus est pellentesque.{" "}
        </p>

        <Link to="/new-animal">
          <h2>New Animal</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          facilisi nullam vehicula ipsum. Hac habitasse platea dictumst
          vestibulum rhoncus est pellentesque.{" "}
        </p>
      </div>
    </Container>
  );
};

export default Home;
