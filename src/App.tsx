import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Router from "./router";

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
}
