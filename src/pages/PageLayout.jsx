import { MainNav } from "../components/MainNav";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";


export function PageLayout(){
    return(
        // add overflow-x-hidden but check projects page(links) if so
        <div className="flex flex-col h-screen justify-between">
            <MainNav />
            <Outlet/>
            <Footer />
        </div>
    );
}