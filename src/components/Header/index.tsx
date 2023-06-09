import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountMenu from '../MenuList';
import Logo from './../../assets/tech-talent.png'
import { Container } from './Header.style';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  return (
    <Container>
      <AppBar position="static" sx={{ background: '#027da7' }}>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0px 10px'
            }}
            className='content'
          >
            <Box sx={{display: 'flex'}}>
              <img src={Logo} style={{ width: '160px'}} />
            </Box>
            <Box sx={{
              display: 'flex',
              gap: '30px',
            }}>
              <Box className="search-container">
                <Search
                  onKeyDown={(e: any) => e.keyCode == 13 ? console.log(e.target.value) : ""}

                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}                    
                    className='search-input'
                  />
                </Search>
              </Box>
              <Box>
                <AccountMenu />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}