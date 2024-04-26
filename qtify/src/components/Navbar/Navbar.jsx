import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, List } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import * as React from 'react';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { grey, blue } from '@mui/material/colors';
import  "./Navbar.css"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#ffffff", 1),
    // '&:hover': {
    //   backgroundColor: alpha("#ffffff", 1),
    // },
    marginLeft: 0,
    display: "flex",
    flexDirection: "row",
    width: '568px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#121212",
    width: '100%',
    alignItems: "center",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    //   transition: theme.transitions.create('width'),
    //   [theme.breakpoints.up('sm')]: {
    //     width: '12ch',
    //     '&:focus': {
    //       width: '20ch',
    //     },
    //   },
    },
  }));

export default function Navbar ({data}){
    const theme = useTheme();
    const [value, setValue] = React.useState(null);

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        focused,
    } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: data,
        getOptionLabel: (option) => option,
        value,
        onChange: (event, newValue) => setValue(newValue),
    });
    return (
        <Box>
            <AppBar component="nav">
                <Toolbar className="navbar">
                    <img src={require("../../assets/logo.png")} alt="logo"/>
                    <Search sx={{"position": "relative"}} {...getRootProps()}>
                        
                        <StyledInputBase 
                            {...getInputProps()}
                            placeholder="Search an album of your choice"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="button" sx={{ p: '5px'}} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        {groupedOptions.length > 0 && (
                            <Listbox className="list" {...getListboxProps()}>
                                {groupedOptions.map((option, index) => (
                                    <Option {...getOptionProps({ option, index })}>{option}</Option>
                                ))}
                            </Listbox>
                        )}
                    </Search>
                    
                    <Button sx={{"backgroundColor": theme.palette.secondary.main}}>Give Feedback</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    width: 100%;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    max-height: 300px;
    z-index: 1;
    position: absolute;
    top: 35px;
    left:0;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 2px 3px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
    };
    `,
);
const Option = styled('li')(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &:hover {
      cursor: pointer;
    }
  
    &[aria-selected=true] {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.Mui-focused,
    &.Mui-focusVisible {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.Mui-focusVisible {
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    &[aria-selected=true].Mui-focused,
    &[aria-selected=true].Mui-focusVisible {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
    `,
);