import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container, Switch, withStyles } from "@mui/material";
import Header from "./Components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Definition from "./Components/Definition";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const DictionaryApi = async () => {
    try {
      let data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeaning(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    DictionaryApi();
  }, [word]);

  return (
    <div className="App">
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header
          word={word}
          setWord={setWord}
          meaning={meaning}
          setMeaning={setMeaning}
        />
        {meaning && <Definition word={word} meaning={meaning} />}
      </Container>
    </div>
  );
}

export default App;
