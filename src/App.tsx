import { useQuery } from "@apollo/client";
import { createStyles, createTheme, CssBaseline, makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { QTS, SELF } from "./api/Queries";
import { QT as QT_TYPE } from "./api/__generated__/QT";
import { QTs } from "./api/__generated__/QTs";
import { Self } from "./api/__generated__/Self";

import Header from "./Components/Header/Header";
import MainPage from "./MainPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
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

  // const {loading, error, data } = useQuery<QTs>(QTS);

  const {loading, error, data } = useQuery<Self>(SELF);

  console.log("loading: ", loading);
  console.log("error: ", error);
  console.log("data: ", data);

  return (
    <div className={styles.app}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header user={data?.self} />
        <Switch>
          <Route path="/write-qt">

          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
