import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// Import useState and useEffect hooks from React
import './App.css';

import GitHubBornOn from './GitHubBornOn';

// Import the API category from AWS Amplify
import { API } from 'aws-amplify';
//import app from '../amplify/backend/function/cryptofunction/src/app';

const App = () => {

    // Create coins variable and set to empty array
    const [coins, updateCoins] = useState([]);

    // Define function to all API
    const fetchCoins = async () => {
        try {
            setLoading(true);
            const data = await API.get('cryptoapi', `/coins?limit=${input.limit}&start=${input.start}`);
            updateCoins(data.coins);
            console.log(loading);
           // loading = false;
           setLoading(false);
            
        }
        catch(err) {
            console.error(err);
        }
        
        

    }

    // const fetchCoins = () => {
    //     API.get('cryptoapi', `/coins?limit=${input.limit}&start=${input.start}`)
    //     .then(response => {
    //         console.log(response);
    //         updateCoins(response.coins);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }

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


     //let loading = true;
     const [loading, setLoading] = useState(true);

    return (
        <>
        <div className="App">
            <input 
            placeholder='start here...'
            onChange={ e => updateInputValues('start', e.target.value)}
            />
            <input
             placeholder='limit to...'
             onChange={ e => updateInputValues('limit', e.target.value)}
            />
            

            <button
                onClick={fetchCoins}
            >
                Fetch Coins
            </button>

            { loading && <h3>Loading coin data ...</h3>}

        {
            !loading &&
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
        <GitHubBornOn />
        </>
    );
}

export default App;
