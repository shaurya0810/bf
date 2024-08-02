import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/bfhl', JSON.parse(jsonInput));
            setResponseData(response.data);
            setError('');
        } catch (err) {
            setError('Invalid JSON input or server error.');
            setResponseData(null);
        }
    };

    return (
        <div className="App">
            <h1>BFHL Frontend</h1>
            <textarea 
                value={jsonInput} 
                onChange={(e) => setJsonInput(e.target.value)} 
                rows="10" 
                cols="50" 
                placeholder='Enter JSON here'
            ></textarea>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {responseData && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
