import Sidebar from "./components/layouts/sidebar";
import Header from "./components/layouts/header";

export default function App(){
    return(

        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex-col">
                <Header/>
            </div>

        </div>
    )
}