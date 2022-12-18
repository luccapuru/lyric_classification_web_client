import { useState } from "react";
import axios from "axios";

// STYLES
import {
  Form,
  Container,
  Title,
  TextArea,
  Button,
  Result,
  ResultTypes,
} from "./styles";

function App() {
  const [lyrics, setLyrics] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    onPostLyrics(lyrics);
  };

  const onPostLyrics = async (lyrics) => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `http://127.0.0.1:81/classification?lyric=${lyrics}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      setResult(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setLyrics(event.target.value);
  };

  const onRenderResult = () => {
    if (isLoading) {
      return <Result>Carregando...</Result>;
    }

    return (
      <>
        <Result>Resultados</Result>
        <ResultTypes>
          Logistic Regression: {result?.logistic_regression}
        </ResultTypes>
        <ResultTypes>Random Forest: {result?.random_forest}</ResultTypes>
        <ResultTypes>SVM: {result?.svm}</ResultTypes>
      </>
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Lyrics Classification</Title>

        <TextArea onChange={handleChange} cols="80" rows="30" />

        <Button disabled={isLoading}>Submeter Letra</Button>
      </Form>

      {onRenderResult()}
    </Container>
  );
}

export default App;
