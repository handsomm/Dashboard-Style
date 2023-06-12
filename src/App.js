import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/Topbar";
import Dashboard from "./screens/dashboard";
import Sidebar from "./screens/global/Sidebar";
import Team from "./screens/team";
import Contacts from "./screens/contacts";
import Invoices from "./screens/invoices";
import Bar from "./screens/bar";
// import Form from "./screens/form";
// import Line from "./screens/line";
// import Pie from "./screens/pie";
// import FAQ from "./screens/faq";
// import Geography from "./screens/geography";
// import Calender from "./screens/calender";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            {/* <Route path="/form" element={<Form />} /> */}
                            <Route path="/bar" element={<Bar />} />
                            {/* <Route path="/pie" element={<Pie />} /> */}
                            {/* <Route path="/line" element={<Line />} /> */}
                            {/* <Route path="/faq" element={<FAQ />} /> */}
                            {/* <Route path="/geography" element={<Geography />} /> */}
                            {/* <Route path="/calender" element={<Calender />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
