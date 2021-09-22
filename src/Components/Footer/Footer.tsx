import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: "auto",
      minHeight: "50px",
      
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: "#383736",
      textAlign: "center",
    },
    text: {
      flex: 1,
      fontSize: "14px",
      color: "#f2f2f2",
      textTransform: "uppercase",
    }
  })
);

function Footer() {
  const styles = useStyles();

  return (
    <footer className={styles.root}>
      <div className={styles.text}>
        Copyright © Hyungsang Park, 2021, All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
