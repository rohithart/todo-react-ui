import React from 'react';
import styled from 'styled-components';

import Heading from '../../components/Heading';
import { Button } from '@mui/material';

const TodoPageContainer = styled.div`
  .message {
    color: #673ab7;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const TodoPage = () => {
  return (
    <TodoPageContainer>
      <Heading message="All your todos" />
        <div className='actions'>
          <Button color="secondary" variant="contained">Add new ToDo</Button>
        </div>
        <div className="row">
         
        </div>
    </TodoPageContainer>
  );
};

export default TodoPage;
