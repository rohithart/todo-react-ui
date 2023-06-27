import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  55% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const fadeOutIn = keyframes`
  0% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const EmptyBannerContainer = styled.div`
  .empty-banner {
    display: flex;
    flex-direction: column;
  }

  .message  {
    color: #673ab7;
    font-weight: bold;
    margin-bottom: .5rem;
  }

  .message1 {
    font-size: 1rem;
  }

  .message2 {
    font-size: .75rem;
  }

  .fade-container {
    height: 6rem;
    width: 100%;
    position: relative;
  }

  .icon-banner {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #673ab7;
    font-size: 5rem;
  }

  .first {
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-name: ${fadeInOut};
  }

  .next {
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-name: ${fadeOutIn};
  }
`;

const Empty = ({ icon, iconNext, message1, message2 }) => {
  return (
    <EmptyBannerContainer>
      <div className="empty-banner">
        <div className="fade-container">
          <i className={`icon-banner first ${icon}`}></i>
          <i className={`icon-banner next ${iconNext}`}></i>
        </div>
        {message1 && <span className="message message1">{message1}</span>}
        {message2 && <span className="message message2">{message2}</span>}
      </div>
    </EmptyBannerContainer>
  );
};

export default Empty;
