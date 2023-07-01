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
import NotFound from "./pages/NotFound/NotFound";
import Unauthorised from "./pages/Unauthorised/Unauthorised";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
import {P1} from "./common/index.styles";

const LazyDashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const LazyAdmin = React.lazy(() => import("./pages/Admin/Admin"));
const LazyCalendar = React.lazy(() => import("./pages/Calendar/Calendar"));
const LazyMinutes = React.lazy(() => import("./pages/Minutes/Minutes"));
const LazyBoilerGuides = React.lazy(() => import("./pages/BoilerGuides/BoilerGuides"));
const LazyRules = React.lazy(() => import("./pages/Rules/Rules"));
const LazyNewsletter = React.lazy(() => import("./pages/Newsletters/Newsletter"));

function App() {

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/visitor" element={<Visitors/>}/>
                <Route path="/events" element={<Events/>}/>
                {/*<Route path="/gallery" element={<Gallery/>}/>*/}
                <Route path="/club-history" element={<ClubHistory/>}/>
                <Route path="/hire-us" element={<HireUs/>}/>
                <Route path="/committee-members" element={<Committee/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/unauthorised" element={<Unauthorised/>}/>
            </Route>

            <Route path="/" element={<MemberLayout/>}>
                {/*Member only page*/}
                <Route element={<RequireUser allowedRoles={["MEMBER"]}/>}>
                    <Route path="/dashboard" element={
                        <React.Suspense fallback={<P1>Loading...</P1>}>
                            <LazyDashboard/>
                        </React.Suspense>
                    }/>

                    <Route path="/calendar" element={
                        <React.Suspense fallback={<P1>Loading...</P1>}>
                            <LazyCalendar/>
                        </React.Suspense>
                    }/>

                    <Route path="/minutes" element={
                        <React.Suspense fallback={<P1>Loading...</P1>}>
                            <LazyMinutes/>
                        </React.Suspense>
                    }/>
                    <Route path="/boiler-guides" element={
                        <React.Suspense fallback={<P1>Loading...</P1>}>
                            <LazyBoilerGuides/>
                        </React.Suspense>
                    }/>
                    <Route path="/club-rules" element={
                        <React.Suspense fallback={<P1>Loading...</P1>}>
                            <LazyRules/>
                        </React.Suspense>
                    }/>
                    <Route path="/publications" element={
                        <React.Suspense fallback={<P1>Loading...</P1>}>
                            <LazyNewsletter/>
                        </React.Suspense>
                    }/>
                </Route>

                <Route element={<RequireUser allowedRoles={["ADMIN"]}/>}>
                    <Route path="/admin" element={
                        <React.Suspense fallback="Loading...">
                            <LazyAdmin/>
                        </React.Suspense>
                    }/>
                </Route>
            </Route>

            <Route path="/" element={<UnhandledLayout/>}>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App;
