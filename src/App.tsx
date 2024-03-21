import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Router from "./router";
import useTheme from "./Theme/useTheme";

export default function App() {
  const { theme } = useTheme();

  const colorScheme = theme && theme.colorScheme ? theme.colorScheme : "light";

  return (
    <MantineProvider
      theme={{ colorScheme: colorScheme }}
      withNormalizeCSS
      withGlobalStyles
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
}
