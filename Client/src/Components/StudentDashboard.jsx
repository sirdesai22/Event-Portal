import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import EventCard from './EventCard';

const StudentDashboard = () => {

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

  const handleClick = () => {
    window.location.href = '/event/new'
  }
  return (
    <>
      <Navbar />
      <div className='pt-20 flex justify-end mx-5'>
        <button className='bg-blue-600 font-semibold text-white px-5 py-2 rounded-lg text-2xl' onClick={handleClick}>Create Event</button>
      </div>
      <div className='mx-5 my-5 flex flex-col gap-5'>
      {data !== null ? (
          data.reverse().map((req) => (
            <EventCard key={req._id} name={req.name} description={req.description} date={req.date} funds={req.funds} approved={req.approved} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default StudentDashboard