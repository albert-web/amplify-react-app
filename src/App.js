import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// Import useState and useEffect hooks from React
import './App.css';

// Import the API category from AWS Amplify
import { API } from 'aws-amplify';

const App = () => {

    // Create coins variable and set to empty array
    const [coins, updateCoins] = useState([]);

    // Define function to all API
    const fetchCoins = async () => {
        console.log('you');
        const data = await API.get('cryptoapi', `/coins?limit=${input.limit}&start=${input.start}`);
        updateCoins(data.coins);

    }

    // Call fetchCoins function when component loads
    useEffect(
        () => {
        fetchCoins();
        }
        , []
    );
     const [input, updateInput] = useState({ start: 0, limit: 3 })

     const updateInputValues = (type, value) => {
         updateInput({
             ...input
             , [type]: value
         });
     }



    return (
        <div className="App">
        {
            coins.map(x => (
            <div 
                key={ x.symbol }
            >
                <h2>
                    { x.name } - { x.symbol }
                </h2>
                <h5>
                    ${ x.price_usd }
                </h5>
            </div>
            ))
        }
        </div>
    );
}

export default App;
