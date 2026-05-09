import Sidebar from "./components/layouts/sidebar";
import Header from "./components/layouts/header";
import Stats from "./components/ui/StatsCards";
import Dashboard from "./pages/Dashboard/dashboard";
import Equipe from "./pages/Equipe/Equipe";
import { Routes, Route } from "react-router-dom";

export default function App(){
    return(

        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-y-auto scrollbar-none">
                <Header/>
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/equipe" element={<Equipe/>}   />
                </Routes>
                 
            </div>
        </div>
    )
}