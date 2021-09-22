import {
  Button,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 30,
    },
    form: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    bibleSelector: {
      flex: 1.5,
      marginRight: 5,
      marginLeft: 5,
    },
    inputField: {
      flex: 1,
      marginRight: 5,
      marginLeft: 5,
    },
    button: {
      marginTop: 20,
    },
  })
);

export interface IPassageInput {
  onClick: (p: string) => void;
}

function PassageInput({ onClick }: IPassageInput) {
  const styles = useStyles();
  const [book, setBook] = useState("");
  const [startChapter, setStartChapter] = useState(0);
  const [startVerse, setStartVerse] = useState(0);
  const [endChapter, setEndChapter] = useState(0);
  const [endVerse, setEndVerse] = useState(0);

  const commaSeparatedBooks =
    "Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, " +
    "Ruth, 1 Samuel, 2 Samuel, 1 Kings, 2 Kings, 1 Chronicles, 2 Chronicles, Ezra, " +
    "Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon, Isaiah, " +
    "Jeremiah, Lamentations, Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, " +
    "Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi, Matthew, Mark, Luke, John, " +
    "Acts, Romans, 1 Corinthians, 2 Corinthians, Galatians, Ephesians, Philippians, " +
    "Colossians, 1 Thessalonians, 2 Thessalonians, 1 Timothy, 2 Timothy, Titus, Philemon, " +
    "Hebrew, James, 1 Peter, 2 Peter, 1 John, 2 John, 3 John, Jude, Revelation";
  const books: string[] = commaSeparatedBooks.split(", ");

  return (
    <div className={styles.root}>
      <FormControl variant="outlined" className={styles.form}>
        <InputLabel id="book-select-label">Book</InputLabel>
        <Select
          labelId="book-select-label"
          value={book}
          label="Book"
          className={styles.bibleSelector}
          onChange={(event) => setBook(event.target.value as string)}
        >
          {books.map((b: string) => (
            <MenuItem value={`${b}`}>{b}</MenuItem>
          ))}
        </Select>

        <TextField
          variant="outlined"
          label="Chapter"
          type="number"
          className={styles.inputField}
          onChange={(e) => {
            setStartChapter(parseInt(e.target.value));
          }}
        ></TextField>

        <TextField
          variant="outlined"
          label="Verse"
          type="number"
          className={styles.inputField}
          onChange={(e) => {
            setStartVerse(parseInt(e.target.value));
          }}
        ></TextField>

        <Typography variant="h4" style={{ marginLeft: 5, marginRight: 5 }}>
          to
        </Typography>

        <TextField
          variant="outlined"
          label="Chapter"
          type="number"
          className={styles.inputField}
          onChange={(e) => {
            setEndChapter(parseInt(e.target.value));
          }}
        ></TextField>

        <TextField
          variant="outlined"
          label="Verse"
          type="number"
          className={styles.inputField}
          onChange={(e) => {
            setEndVerse(parseInt(e.target.value));
          }}
        ></TextField>
      </FormControl>

      <Button
        color="inherit"
        variant="outlined"
        className={styles.button}
        size="large"
        onClick={() => {
          if (
            startChapter < endChapter ||
            (startChapter === endChapter && startVerse <= endVerse)
          ) {
            onClick(
              `${book}+${startChapter}:${startVerse}-${endChapter}:${endVerse}`
            );
          } else {
            alert(
              "The end chapter and verse must be after the starting chapter and verse!"
            );
          }
        }}
      >
        Write!
      </Button>
    </div>
  );
}

export default PassageInput;
