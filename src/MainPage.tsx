import { useMutation, useQuery } from "@apollo/client";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ADD_QT } from "./api/Mutations";
import { QTS } from "./api/Queries";
import { AddQT } from "./api/__generated__/AddQT";
import { QTs } from "./api/__generated__/QTs";
import PassageInput from "./components/PassageInput/PassageInput";
import QTCard from "./components/QTCard/QTCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      maxWidth: "90%",
    },
    greetings: {
      marginTop: 40,
    },
    heading: {
      marginBottom: 15,
    },
    subheading: {
      marginBottom: 100,
    },
    qt: {
      marginTop: 10,
      marginBottom: 20,
    },
    qtList: {
      marginTop: 100,
    },
  })
);

function MainPage() {
  const styles = useStyles();
  const history = useHistory();
  const [ createQT ] = useMutation<AddQT>(ADD_QT);
  const { data } = useQuery<QTs>(QTS);
  
  useEffect(() => {
    
  }, []);

  // const modifiedDate = Date.parse(data?.qTs?.nodes?.modified);

  return (
    <div className={styles.root}>
      <div className={styles.greetings}>
        <Typography variant="h2" className={styles.heading}>
          Welcome to QTWithMe.
        </Typography>
        <Typography variant="h5" className={styles.subheading}>
          Share your daily portion of the Bible.
        </Typography>
        <PassageInput
          onClick={async (passage: string) => {
            try {
              const { data } = await createQT({ variables: { passage }});
              history.push(`/writeQT/?qtId=${data?.addQT.id}`);
            } catch (e) {
              console.log(e);
            }
          }}
        />
        <div className={styles.qtList}>
          {data?.qTs?.nodes?.map(qt => (
            <QTCard 
            heading={qt.passage.split("+").join(" ")}
            subheading={`${qt.user.name}, ${new Date(qt.modified).toLocaleString("en-NZ")}`}
            content={qt.content === "" ? "No Content" : qt.content}
            />
          ))};
        </div>
      </div>
    </div>
  );
}

export default MainPage;
