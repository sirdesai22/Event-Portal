import React from 'react'
import { useShared } from '../Helpers/SharedContext';

// import { useDispatch, useSelector } from 'react-redux';
// import { updateSharedVariable } from '../Helpers/sharedActions';

const EventCard = ({ name, description, funds, approved, date }) => {

    // New Lines 
    //const dispatch = useDispatch();
    //const sharedVariable = useSelector((state) => state.shared.sharedVariable);

    return (
        <div className="bg-slate-400 flex p-5 rounded-lg text-black gap-5">
            <div className="w-[50%] h-60 overflow-hidden rounded-md">
                <img src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="flex flex-col justify-evenly">
                <h2 className='text-5xl font-semibold'>{name}</h2>
                <p className='text-xl font-semibold'>Date: {new Date(date).toLocaleDateString()}</p>
                <p>{description}</p>
                <span className='text-z2xl font-semibold'>Funds Needed: ${funds}</span>
                
                    {
                        (approved)
                        ?<span className='text-1xl font-semibold text-white bg-green-600 p-2 rounded-xl w-fit'>Aproved</span>
                        :<span className='text-1xl font-semibold text-white bg-red-600 p-2 rounded-xl w-fit'>Not-Approved</span>
                    }
                {/* <div className="flex gap-5 justify-end">
                    <button className='px-5 py-2 bg-green-600 rounded-lg shadow-lg' onClick={reduceFunds}>Accept</button>
                    <button className='px-5 py-2 bg-red-500 rounded-lg shadow-lg'>Deny</button>
                </div> */}
            </div>
        </div>
    )
}

export default EventCard