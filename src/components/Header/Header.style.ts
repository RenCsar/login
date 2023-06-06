import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const Container = styled(Box)`
  flex-grow: 1;

  & .search-container {
        width: 400px;
        
        & .search-input {
          width: 100%;
      }
    }

  @media (max-width: 800px) {
    & .search-container {
        width: 300px; 
    }    
  }

  @media (max-width: 700px) {
    & .search-container {
        width: 250px;
    }    
  }

  @media (max-width: 600px) {

    & .search-container {
        display: none;
    }    
  }
`;