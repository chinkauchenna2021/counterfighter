/* eslint-disable no-unused-vars */
import React from "react";


export const setOnStorage = (name, data) => {
    if (data == "") return;
    window.localStorage.setItem(name, data);
    return true;
}


export const getOnStorage = (name) => {
    let localData = window.localStorage.getItem(name);
    return localData;
}

export const clearStorage = () => {
    window.localStorage.clear();
    return true;
}

export const removeOnStorage = (name) => {
    window.localStorage.removeItem(name)
    return true;
}