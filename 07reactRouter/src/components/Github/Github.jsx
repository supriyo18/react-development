import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData()
    //const [data, setData] = useState([]);

    //  useEffect(() => {
    //fetch("https://api.github.com/users/supriyomukherjee")
    //  .then(response => response.json())
    //.then(data => {
    //  console.log(data);
    //setData(data);
    // })
    //.catch(error => console.error('Error fetching data:', error));
    //}, []);

    return (
        <div className='text-center m-4 bg-gray-800 p-8 rounded-md shadow-md'>
            <h1 className="text-2xl text-white font-bold mb-4">GitHub Stats</h1>
            <div className="flex items-center justify-center mb-4">
                <img src={data.avatar_url} alt='Git Picture' className="rounded-full w-16 h-16 mr-4" />
                <div>
                    <p className="text-lg text-white font-semibold">Followers: {data.followers}</p>
                    <p className="text-gray-400">Username: {data.login}</p>
                </div>
            </div>
        </div>
    );
}

export default Github;

export const gihubLoader = async () => {
    const response = await fetch("https://api.github.com/users/supriyomukherjee")
    return response.json()
}