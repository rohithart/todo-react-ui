import React from "react";
import styled from "styled-components";

import Heading from "../components/Heading";

const HomePageContainer = styled.div`
  .message {
    color: #673ab7;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Heading message="Welcome to ToDo App." />
      <div className="row">
        <div className="col-md-offset-4 col-md-4">
          <h2 className="message">
            Stay organized and boost your productivity with our user-friendly
            ToDo App. Stay on top of your commitments, set reminders, and enjoy
            the satisfaction of checking off completed tasks. Start maximizing
            your efficiency and achieving your goals today with our ToDo App.
          </h2>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
