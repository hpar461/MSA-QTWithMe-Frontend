import { useMutation, useQuery } from "@apollo/client";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ADD_QT } from "./api/Mutations";
import { AddQT } from "./api/__generated__/AddQT";
import PassageInput from "./components/PassageInput/PassageInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      maxWidth: "90%",
    },
    greetings: {
      marginTop: "40px",
    },
    heading: {
      marginBottom: "15px",
    },
    subheading: {
      marginBottom: 100,
    },
    qt: {
      marginTop: "10px",
      marginBottom: "20px",
    },
  })
);

function MainPage() {
  const styles = useStyles();
  const history = useHistory();
  const [ createQT ] = useMutation<AddQT>(ADD_QT);

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
            // To be replaced with query logic!
            console.log(passage);
            try {
              const { data } = await createQT({ variables: { passage }});
              
              history.push(`/writeQT/?qtId=${data?.addQT.id}`);

              console.log(`id: ${data?.addQT.id!}`);
              console.log("passage: ", data?.addQT.passage);
              console.log("passageText: ", data?.addQT.passageText);
            } catch (e) {
              console.log(e);
            }
          }}
        />
        {/* {data?.qTs?.nodes?.map(qt => (
          <div className={styles.qt}>
            <Typography>id: {qt.id}</Typography>
            <Typography>passage: {qt.passage}</Typography>
            <Typography>passageText: {qt.passageText}</Typography>
            <Typography>User name: {qt.user.name}</Typography>
          </div>
        ))}; */}
      </div>
    </div>
  );
}

export default MainPage;
