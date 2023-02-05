import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
  } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import AuthedRoute from './AuthedRoute';
import UnauthedRoute from './UnauthedRoute';
import Signup from './Signup';
import Login from './Login';
import Workspace from './dashboard/Workspace';
import Inbox from './dashboard/Inbox';
import Notifications from './dashboard/Notifications';
import Profile from './dashboard/Profile';
import Projects from './dashboard/Projects';
import Settings from './dashboard/Settings';
import Tasks from './dashboard/Tasks';
import Home from './Home';


const WithoutNav = ()=>{
    return <Outlet/>
}

const WithNav = ()=> (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
)

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<WithoutNav/>}>
                    {/* If not authenticated */}
                    <Route element={<UnauthedRoute/>}>
                        <Route path="/auth/signup" element={<Signup/>}/>
                        <Route path="/auth/login" element={<Login/>}/>
                    </Route>
                    {/* If authenticated */}
                    <Route element={<AuthedRoute />}>
                        <Route path="/dashboard/workspace" element={<Workspace/>}/>
                        <Route path="/dashboard/inbox" element={<Inbox/>}/>
                        <Route path="/dashboard/notifications" element={<Notifications/>}/>
                        <Route path="/dashboard/profile" element={<Profile/>}/>
                        <Route path="/dashboard/projects" element={<Projects/>}/>
                        <Route path="/dashboard/settings" element={<Settings/>}/>
                        <Route path="/dashboard/tasks" element={<Tasks/>}/>
                    </Route>
                    {/* any other route not defined redirect to 404 page */}
                    <Route path='*' element={<PageNotFound/>}/>
                </Route>
                <Route element={<WithNav/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}