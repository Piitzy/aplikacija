import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import ServiceSelection from "./components/ServiceSelection";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import Development from "./pages/Development";
import Design from "./pages/Design";
import Marketing from "./pages/Marketing";
import SEO from "./pages/SEO";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import CreateProject from "./pages/CreateProject";
import { AppLayout, MainContent } from "./styles/StyledComponents";

function App() {
    const location = useLocation();
    const [userName, setUserName] = useState("PM");
    const [userImage, setUserImage] = useState(null);

    return (
        <AppLayout>
            <Sidebar currentPath={location.pathname} />
            <MainContent>
                <Header userName={userName} userImage={userImage} />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/development" element={<Development />} />
                    <Route path="/design" element={<Design />} />
                    <Route path="/marketing" element={<Marketing />} />
                    <Route path="/seo" element={<SEO />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/service-selection" element={<ServiceSelection />} />
                    <Route path="/create-project" element={<CreateProject />} />
                </Routes>
            </MainContent>
        </AppLayout>
    );
}

export default App;
