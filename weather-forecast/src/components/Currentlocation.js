import React, { useState } from "react";

export default function Location() {

    const [location, setLocation] = useState({});

    const successCallback = (position) => {
        console.log(position);
        setLocation(position.coords)
    };

    // const errorCallback = (error) => {
    //     console.log(error);
    // };

    navigator.geolocation.getCurrentPosition(successCallback);
    {/*, errorCallback*/} 

    console.log(location)

}