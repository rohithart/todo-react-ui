import React from 'react';
import styled from 'styled-components';

const HeadingContainer = styled.div`
  .heading h1{
    color: #673ab7;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.5em;
    padding: 1rem .5rem 1rem 2rem;
    position: relative;
  }
  .heading h1:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 5rem;
    background-color: #673ab7;
  }
  .heading h1:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    height: 1px;
    width: 95%;
    background-color: #673ab7;
  }
`;

const Heading = ({message}) => {
  return (
    <HeadingContainer>
        <div className="heading">
          <h1>{message} </h1>
        </div>
    </HeadingContainer>
  );
};

export default Heading;
