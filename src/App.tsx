import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { store } from "./store";
import { router } from "./router";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </Provider>
        </div>
    );
}

export default App;
