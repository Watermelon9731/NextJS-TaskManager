import { useState } from "react";
import { Roboto } from "next/font/google";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import NavSection from "./NavSection/NavSection";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const drawerWidth = 240;

const Main = styled("main", {
  shouldForwardProp: (prop: any) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }: any) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: any) => prop !== "open",
})<AppBarProps>(({ theme, open }: any) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);

  const navSection = ["Dashboard", "Task"];
  const navUser = ["Setting", "Logout"];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderLoginButton = () => {
    if (!login) {
      return (
        <>
          <button type='button' className='px-3'>
            <div>Login</div>
          </button>
          <button type='button' className='btn px-3'>
            <div>Sign up</div>
          </button>
        </>
      );
    }
    return (
      <>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          User
        </Typography>
      </>
    );
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position='fixed' open={open}>
          <Toolbar>{renderLoginButton()}</Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <NavSection listSection={navSection} />
          </List>
          <Divider />
          <List>
            <NavSection listSection={navUser} />
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <main className={roboto.className}>{children}</main>
        </Main>
      </Box>
      {/* <Footer /> */}
    </>
  );
}
