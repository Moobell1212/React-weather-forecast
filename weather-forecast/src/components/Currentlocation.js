import React from "react";

export default function Location() {
    const successCallback = (position) => {
        console.log(position);
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}