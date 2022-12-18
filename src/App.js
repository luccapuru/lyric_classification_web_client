import { useState } from "react";
import axios from "axios";

// STYLES
import { Form, Container, Title, TextArea, Button, Result } from "./styles";

function App() {
  const [lyrics, setLyrics] = useState("");
  const [result, setResult] = useState("Sertanejo");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = lyrics;

    setTimeout(() => {
      setResult("Rock");
    }, 500);
  };

  const onPostLyrics = () => {};

  const handleChange = (event) => {
    setLyrics(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Lyrics Classification</Title>

        <TextArea onChange={handleChange} cols="80" rows="30" />

        <Button>Submeter Letra</Button>
      </Form>

      <Result>Resultado: {result}</Result>
    </Container>
  );
}

export default App;
