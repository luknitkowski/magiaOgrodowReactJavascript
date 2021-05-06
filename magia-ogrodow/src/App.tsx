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
  logo: {
    
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

  const themeMode: object = theme === 'light' ? Theme.lightMode : Theme.darkMode;

  if (!mountedComponent) {
    return <div />
  };

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
                {matches ? <div></div>: <img alt="logo" height="50" src={logo} className={classes.logo}/>}
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
    </ThemeProvider>
  );
};

export default App;