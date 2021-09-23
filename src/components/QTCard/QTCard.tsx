import {
  // Button,
  Card,
  // CardActions,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";

export interface IQTCard {
  heading: string;
  subheading: string;
  content: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 20,
      marginBottom: 20,
    },
    heading: {
      marginBottom: 0,
    },
    subheading: {
      color: "#525252",
      marginBottom: 15,
    },
    content: {},
  })
);

function QTCard({ heading, subheading, content }: IQTCard) {
  const styles = useStyles();

  return (
    <Card variant="outlined" className={styles.root}>
      <CardContent>
        <Typography variant="h4" className={styles.heading}>
          {heading}
        </Typography>
        <Typography variant="h6" className={styles.subheading}>
          {subheading}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
      </CardContent>
      {/* If in the future, I want to modify this component to be accessible for edit: */}
      {/* <CardActions>
        <Button size="small">Modify</Button>
      </CardActions> */}
    </Card>
  );
}

export default QTCard;
