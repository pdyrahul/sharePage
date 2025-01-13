import React from 'react';
import {SideBar} from "../../components/ui/MyEvents/SideBar";
// import 'bootstrap/dist/css/bootstrap.css'; 
import './dashboard.css'
import './my-events.css'
import "react-toastify/dist/ReactToastify.css";
function DashboardLayout({children}) {
    return (
        <div className="event-wrapper">
            <SideBar/>
            {children}
        </div>
)
    ;
}

export default DashboardLayout;