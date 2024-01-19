import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useShared } from '../Helpers/SharedContext';

//  import { useSelector } from 'react-redux';

const Funds = () => {

  const { sharedVariable, setSharedVariable } = useShared();

  //const sharedVariable = useSelector((state) => state.shared.sharedVariable);

  useEffect(() => {
    const fetchFundValue = async () => {
      try {
        const response = await fetch('http://localhost:3000/getfund');
        if (response.ok) {
          const data = await response.json();
          setSharedVariable(data.fund); // Assuming the response structure includes a 'fund' property
        } else {
          console.error('Failed to fetch fund value');
        }
      } catch (error) {
        console.error('Error fetching fund value:', error);
      }
    }
  },[]);

  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center gap-10 items-center flex-col">
        <h1 className="text-9xl font-bold">Funds Available:</h1>
        <span className='text-8xl font-semibold'>${sharedVariable}</span>
      </div>
    </>
  )
}

export default Funds