import React, { useState } from "react";

export default function Location() {

    const [location, setLocation] = useState({});

    const locationCallback = position => {
        setLocation(position.coords)
    };

    // const errorCallback = (error) => {
    //     console.log(error);
    // };

    navigator.geolocation.getCurrentPosition(locationCallback);
    {/*, errorCallback*/} 
}