import { createStyles, createTheme, CssBaseline, makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import "@fontsource/inter";

import Header from "./Components/Header";

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
    // typography: {
    //   fontFamily: "Inter",
    // },
    palette: {
      primary: {
        main: "#4b4a48",
      },
      secondary: {
        main: "#f5f3ec",
      },
    },
  });

  return (
    <div className={styles.app}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        
      </ThemeProvider>
    </div>
  );
}

export default App;
