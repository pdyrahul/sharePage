import React from 'react';
import {SideBar} from "@/components/ui/MyEvents/SideBar";

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