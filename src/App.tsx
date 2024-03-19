import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Router from "./router";
import useTheme from "./Theme/useTheme";

export default function App() {
  const theme = useTheme((state) => (state as ThemeState).theme);

  return (
    <MantineProvider
      theme={{ colorScheme: theme }}
      withNormalizeCSS
      withGlobalStyles
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
}
