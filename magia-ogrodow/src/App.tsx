import {Fragment} from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { useEffect, useState } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Cookies from 'universal-cookie';

import  {useDarkMode} from "./customHooks/useDarkMode";
import Theme from "./context/theme";
import Toggle from "./components/Toggler"
import SideBar from "./components/sidebar";
import HorizontalMenu from "./components/horizontalMenu";
import BodyRouter from "./components/bodyrouter";
import Footer from "./components/footer";
import { GlobalStyles } from './context/global';

import logo from './images/logo.png'

const useStyles = makeStyles((theme) => ({
  appContainer: {
    position: "relative",
  },
  rootScrollTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBarDiv: {
    backgroundColor: '#5CDB95'
  },
  close: {
    padding: theme.spacing(0.5)
  }
}));

type PropsScrollTopType = {
  children: Element,
  window : Function
}

const ScrollTop = (props: PropsScrollTopType) => {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: any): void => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.rootScrollTop}
      >
        {children}
      </div>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

type PropsHideOnScroll = {
  children: any
}

function HideOnScroll(props: PropsHideOnScroll) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const App = (props: any) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:750px)');
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [isCookieRodo, setIsCookieRodo] = useState<boolean>(false);
  const [isShowInfoRodo, setShowInfoRodo] = useState<boolean>(false);

  useEffect(() => {
    if(!isCookieRodo){
      const magiaOgrodowCookieRodo = 'magiaOgrodowCookieRodo';
      const cookies = new Cookies();
      const cookieRodo = cookies.get(magiaOgrodowCookieRodo);
      if(cookieRodo){
        // no action for now
      } else {
        setShowInfoRodo(true)
      }
      setIsCookieRodo(true);
    }
  },[isCookieRodo] )

  const themeMode: object = theme === 'light' ? Theme.lightMode : Theme.darkMode;

  if (!mountedComponent) {
    return <div />
  };

  const handleClose = () => {
    setShowInfoRodo(false);
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className={classes.appContainer}>
        <HideOnScroll {...props}>
          <AppBar position="fixed" className={classes.appBarDiv}>
            <Toolbar>
              {matches ? 
                <HorizontalMenu /> : <SideBar /> }
                <Toggle theme={theme} toggleTheme={themeToggler} />
                {matches ? <div></div>: <img alt="logo" height="50" src={logo}/>}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
        <BodyRouter />
        <Footer />
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={isShowInfoRodo}
        onClose={handleClose}
        message={'Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.'}
        action={
          <Fragment>
            <Button color="primary" size="small" onClick={handleClose}>
              Zgoda
            </Button>
            <Button color="secondary" size="small" onClick={handleClose}>
              Polityka prywatności
            </Button>
          </Fragment>
        }
      />
    </ThemeProvider>
  );
};

export default App;