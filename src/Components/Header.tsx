import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    loginButton: {
    },
    title: {
      flex: 1,
      textTransform: "uppercase",
      fontWeight: 250,
    },
  })
);

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            QTWithMe
          </Typography>
          <Button
            color="inherit"
            className={classes.loginButton}
            onClick={() => {
              alert("Not Implemented Yet.");
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
