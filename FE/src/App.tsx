import React from 'react';
import {DefaultLayout, MemberLayout, UnhandledLayout} from "./components/Layout/Layout";
import MainPage from './pages/MainPage/Main';
import Visitors from "./pages/Visitors/Visitors";
import {Routes, Route} from "react-router-dom";
import RequireUser from "./components/RequireAuth/RequireUser";
import ClubHistory from "./pages/ClubHistory/ClubHistory";
import HireUs from "./pages/HireUs/HireUs";
import Committee from "./pages/Committee/Committee";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Admin from "./pages/Admin/Admin";
import Unauthorised from "./pages/Unauthorised/Unauthorised";
import Editor from "./pages/Editor/Editor";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/visitor" element={<Visitors/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/club-history" element={<ClubHistory/>}/>
                <Route path="/hire-us" element={<HireUs/>}/>
                <Route path="/committee" element={<Committee/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/unauthorised" element={<Unauthorised/>}/>
            </Route>

            <Route path="/" element={<MemberLayout/>}>
                {/*Member only page*/}
                <Route element={<RequireUser allowedRoles={["MEMBER"]}/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/agenda" element={<Dashboard/>}/>
                    <Route path="/minute" element={<Dashboard/>}/>
                    <Route path="/boiler-guide" element={<Dashboard/>}/>
                    <Route path="/club-rule" element={<Dashboard/>}/>
                    <Route path="/newsletter" element={<Dashboard/>}/>
                </Route>

                <Route element={<RequireUser allowedRoles={["EDITOR", "ADMIN"]}/>}>
                    <Route path="/editor" element={<Editor/>}/>
                </Route>

                <Route element={<RequireUser allowedRoles={["ADMIN"]}/>}>
                    <Route path="/admin" element={<Admin/>}/>
                </Route>
            </Route>

            <Route path="/" element={<UnhandledLayout/>}>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App;
