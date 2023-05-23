/* eslint-disable no-unused-vars */
import React from "react";
import { reactLocalStorage } from 'reactjs-localstorage';
import moment from 'moment'


export const setOnStorage = (name, data) => {
    if (data == "") return;
    reactLocalStorage.set(name, JSON.stringify(data));
    return true;
}

export const getOnStorage = (name) => {
    let localData = reactLocalStorage.get(name);
    return localData;
}

export const clearStorage = () => {
   reactLocalStorage.clear();
    return true;
}

export const removeOnStorage = (name) => {
   reactLocalStorage.remove(name)
    return true;
}

export const dateFormat = (data) => {
     return moment(data).format("YYYY-MM-DD")
}
