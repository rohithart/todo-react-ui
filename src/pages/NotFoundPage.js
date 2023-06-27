import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import Heading from '../components/Heading';

const NotFoundPageContainer = styled.div`
  .message {
    color: #673ab7;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <div>
        <Heading message="Oops, page not found." />
        <div className="row">
          <div className="col-md-offset-4 col-md-4">
            <h2 className='message'>
              The page that you are looking for is not available. Please navigate to the home page.
            </h2>
            <Button component={Link} to='/' color="inherit" variant="contained">
              Home
            </Button>
          </div>
        </div>
      </div>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
