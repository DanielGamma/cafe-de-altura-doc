import { useState } from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import ResponseDisplay from "./components/ResponseDisplay/ResponseDisplay";
import EndpointsList from "./components/EndpointsList/EndpointsList";

function App() {

  const [response, setResponse] = useState(null);

  return (
        <main>
          <NavBar />
          <Hero />
          <EndpointsList setResponse={setResponse} />
          <ResponseDisplay response={response} />
        </main>

  );
}

export default App;
