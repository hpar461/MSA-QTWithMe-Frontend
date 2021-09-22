import { useMutation } from "@apollo/client";
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Avatar,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LOGIN } from "../../api/Mutations";
import { Login } from "../../api/__generated__/Login";
import { Self_self } from "../../api/__generated__/Self";

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
    userInformation: {
      display: "flex",
      marginLeft: "20px",
    },
  })
);

const CLIENT_ID = "c42cc58d3b1e7d54d853";

function Header({ user }: {user: Self_self | undefined}) {
  const history = useHistory();
  const classes = useStyles();
  const query = new URLSearchParams(useLocation().search);

  const [login] = useMutation<Login>(LOGIN);

  console.log("User: ", user);
  
  useEffect(() => {
    const loginMethod = async () => {
      const code = query.get("code");
      if (code != null) {
        try {
          const { data } = await login({ variables: { code } });
          if (data != null) {
            localStorage.setItem("token", data.login.jwt);
          }
        } catch (e) {
          console.log(e);
        }
        history.push("/");
        window.location.reload();
      }
    };
    loginMethod();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

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
          {user == null ? (
            <Button
              color="inherit"
              className={classes.loginButton}
              href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`}>
                Login
                </Button>
          ) : (
            <div className={classes.userInformation}>
              <Hidden smDown>
                <Avatar alt="user-avatar" src={user.imageURI} />
                <Button color="inherit" onClick={handleLogout}>{user.name}</Button>
              </Hidden>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
