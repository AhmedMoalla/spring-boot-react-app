import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {HashRouter, Route, Routes} from "react-router";
import {theme} from "./theme";
import {AppContainer} from "./pages/layout/AppContainer.tsx";
import Home from "./pages/Home.tsx";
import Features from "./pages/Features.tsx";
import Pricing from "./pages/Pricing.tsx";
import Learn from "./pages/Learn.tsx";
import Community from "./pages/Community.tsx";

export default function App() {
    return (<MantineProvider theme={theme}>
        <HashRouter>
            <Routes>
                <Route element={<AppContainer/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/features" element={<Features/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/learn" element={<Learn/>}/>
                    <Route path="/community" element={<Community/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </MantineProvider>);
}
