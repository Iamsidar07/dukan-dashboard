import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";

export default function App(){
    return <div className={"flex items-stretch"}>
        <Sidebar/>
        <Main/>
    </div>
}