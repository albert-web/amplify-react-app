import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
const GitHubBornOn = () => {
    const [Info, updateInfo] = useState([]);
    const fetchInfo = async () => {
        const data = await API.get('cryptoapi', `/born`);
        updateInfo(data.borninfo);
    };
    useEffect(
        () => {
            fetchInfo();
        }
        , []
    );
    return (
        <>
        <div>
            <h1>Born Info</h1>
        <h2>Login information is <em >{ Info.login }</em></h2>

        <h2>Creation date information is <em>{ Info.created_at }</em></h2>

        <h2>Updated date of the information is <em>{ Info.updated_at }</em></h2>
       
        <h2>Id number information is <em>{ Info.id }</em></h2>

        <h2>Link information of the html is <em>{Info.html_url}</em></h2>
        
        </div>
        
        </> 
    );
};
export default GitHubBornOn;

