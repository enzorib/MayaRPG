import Sidebar from "./components/layouts/sidebar";
import Header from "./components/layouts/header";
import Stats from "./components/ui/StatsCards";
import Dashboard from "./pages/Dashboard/dashboard";

export default function App(){
    return(

        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-y-auto scrollbar-none">
                <Header/>
                 <Dashboard/>
            </div>
        </div>
    )
}