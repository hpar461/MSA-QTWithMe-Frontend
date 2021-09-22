import { useMutation, useQuery } from "@apollo/client";
import { Button, TextField, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { EDIT_QT } from "./api/Mutations";
import { QT as QT_QUERY } from "./api/Queries";
import { EditQT } from "./api/__generated__/EditQT";
import { QT } from "./api/__generated__/QT";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 40,
      marginBottom: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "90%",
    },
    heading: {
      marginBottom: 10,
      flex: 1,
      width: "100%",
      fontWeight: "bold",
    },
    subheading: {
      marginBottom: 30,
      flex: 1,
      width: "100%",
    },
    passageText: {
      flex: 1,
      width: "100%",
      marginTop: 10,
      marginBottom: 10,
    },
    contentWriter: {
      flex: 1,
      width: "100%",
      marginTop: 10,
      marginBottom: 10,
    },
    uploadButton: {
      flex: 1,
      marginTop: 20,
    },
  })
);

function WriteQTPage() {
  const styles = useStyles();
  const history = useHistory();

  const [content, setContent] = useState("");

  const qtIdParamValue: string | null = new URLSearchParams(
    useLocation().search
  ).get("qtId");
  if (qtIdParamValue == null) {
    alert("QT ID not set. Please proceed to this website from the main page.");
    history.push("/");
  }

  const qtId: number = parseInt(qtIdParamValue!);
  const { data } = useQuery<QT>(QT_QUERY, {
    variables: { id: qtId },
  });
  const [updateQT] = useMutation<EditQT>(EDIT_QT, {
    variables: { qtId: `${qtId}`, content: `${content}` },
  });

  const passageRaw: string[] = data?.qT.passage.split("+") ?? ["", ""];

  return (
    <div className={styles.root}>
      <Typography variant="h4" className={styles.heading}>
        Write QT
      </Typography>

      <Typography variant="h5" className={styles.subheading}>
        Passage: {passageRaw[0]} {passageRaw[1]}
      </Typography>

      <TextField
        multiline
        focused
        variant="outlined"
        label="Passage"
        value={data?.qT.passageText}
        className={styles.passageText}
        InputProps={{ readOnly: true }}
      ></TextField>

      <TextField
        multiline
        focused
        rows={20}
        variant="outlined"
        label="QT Content"
        defaultValue={data?.qT.content}
        placeholder="Please type here..."
        className={styles.contentWriter}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></TextField>

      <Button
        variant="outlined"
        color="inherit"
        className={styles.uploadButton}
        size="large"
        onClick={async () => {
          await updateQT();
          history.push("/");
        }}
      >
        Upload
      </Button>
    </div>
  );
}

export default WriteQTPage;
