import { useQuery } from "@apollo/client";
import { createStyles, createTheme, CssBaseline, makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { useLocation } from "react-router-dom";
import { SELF } from "./api/Queries";
import { Self } from "./api/__generated__/Self";
import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import MainPage from "./MainPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  })
);

function App() {
  const styles = useStyles();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4b4a48",
      },
      secondary: {
        main: "#f5f3ec",
      },
    },
  });

  const { data } = useQuery<Self>(SELF);

  const code = new URLSearchParams(useLocation().search).get("code");

  return (
    <div className={styles.app}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header user={data?.self} code={code} />
        <Switch>
          <Route path="/write-qt">

          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
