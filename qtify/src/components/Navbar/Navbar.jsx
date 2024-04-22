
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import  "./Navbar.css"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#ffffff", 1),
    // '&:hover': {
    //   backgroundColor: alpha("#ffffff", 1),
    // },
    marginLeft: 0,
    // width: '100%',
    display: "flex",
    flexDirection: "row",
    width: '568px',
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

export default function Navbar (){
    const theme = useTheme();
    return (
        <Box>
            <AppBar component="nav">
                <Toolbar className="navbar">
                    <img src={require("../../assets/logo.png")} alt="logo"/>
                    <Search>
                        
                        <StyledInputBase
                            placeholder="Search an album of your choice"
                            inputProps={{ 'aria-label': 'search' }}
                        >
                            {/* <SearchIconWrapper>
                                <IconButton type="button" sx={{ p: '5px'}} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </SearchIconWrapper> */}
                        </StyledInputBase>
                        <IconButton type="button" sx={{ p: '5px'}} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Search>
                    <Button sx={{"background-color": theme.palette.secondary.main}}>Give Feedback</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
