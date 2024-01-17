import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
//ultima aula assistida: Configurando temas, modulo
export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="success" />
        <Button variant="danger" />
        <Button />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
