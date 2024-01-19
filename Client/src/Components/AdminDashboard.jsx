import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Admin = () => {
    const redirectFunds = () => {
        window.location.href = '/admin/funds'
    }
    const redirectRequests = () => {
        window.location.href = '/admin/requests'
    }

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a request to your backend API
                const response = await fetch('http://localhost:3000/allevents');
                const result = await response.json();
                setData(result);
                console.log(result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            <Navbar />
            <div className='pt-20 flex gap-5 justify-end mr-5'>
                <button className='bg-blue-600 text-white text-2xl py-2 px-4 rounded-xl font-semibold w-40' onClick={redirectFunds}>Funds</button>
                <button className='bg-blue-600 text-white text-2xl py-2 rounded-xl font-semibold w-40' onClick={redirectRequests}>Requests</button>
            </div>
            <div className="h-[80vh] flex justify-evenly items-center mx-20">
                <h1 className='text-9xl font-bold'>Upcoming Events</h1>
                <div className="w-[50%] h-96 bg-red-100 p-3 rounded-md overflow-y-scroll text-center">
                    {data && data.length > 0 ? (
                        <ul className='text-black text-left'>
                            {data.filter((event) => event.approved === true).map((event) => (
                                <div key={event._id}>
                                <li className='text-3xl'>
                                    <strong>{event.name}</strong> - {new Date(event.date).toLocaleDateString()}
                                </li>
                                <div className='h-1 bg-[#0005] my-5'></div>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p>No upcoming events.</p>
                    )}

                </div>
            </div>
        </>
    )
}

export default Admin