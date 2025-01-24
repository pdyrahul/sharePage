import React from "react";

export default function DraftEnvetLayout({children}) {
    return (<div>
        <script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAPpH4FGQaj_JIJOViHAeHGAjl7RDeW8OQ&libraries=places`}
            async></script>
        {children}
    </div>)
}