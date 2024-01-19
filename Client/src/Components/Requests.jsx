import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import RequestCard from './RequestCard'
import fundRequests from '../Data/fundRequests'

const Requests = () => {

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
      <div className='py-20 px-10 flex flex-col gap-10'>
        {data !== null ? (
          data.filter((event)=> event.approved === false).map((req) => (
            <RequestCard key={req._id} id={req._id} name={req.name} description={req.description} funds={req.funds} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default Requests