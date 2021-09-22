import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 60,
      textAlign: "center",
      fontSize: "12px",
      color: "white",
    },
  })
});

function Footer() {
  const styles = useStyles();

  return (
    <footer>
      
    </footer>
  );
}

export default Footer;