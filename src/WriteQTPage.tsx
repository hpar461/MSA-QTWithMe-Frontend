import { useMutation, useQuery } from "@apollo/client";
import { Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { EDIT_QT } from "./api/Mutations";
import { QT as QT_QUERY } from "./api/Queries";
import { EditQT } from "./api/__generated__/EditQT";
import { QT } from "./api/__generated__/QT";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

function WriteQTPage() {
  const styles = useStyles();
  const history = useHistory();

  const [context, setContext] = useState("");

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
    variables: { id: `${qtId}` },
  });

  return (
    <div className={styles.root}>
      <Typography variant="h4">Write QT</Typography>
    </div>
  );
}

export default WriteQTPage;
