import React from 'react'
import { useShared } from '../Helpers/SharedContext';

// import { useDispatch, useSelector } from 'react-redux';
// import { updateSharedVariable } from '../Helpers/sharedActions';

const RequestCard = ({ id, name, description, funds }) => {

    // New Lines 
    //const dispatch = useDispatch();
    //const sharedVariable = useSelector((state) => state.shared.sharedVariable);

    const { sharedVariable, setSharedVariable } = useShared();

    const reduceFunds = async () => {
        try {
            setSharedVariable(prevValue => prevValue - 100);
            const response = await fetch('http://localhost:3000/reducefund', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fund: sharedVariable-funds, id:id }),
            });
            if (response.ok) {
                console.log(sharedVariable)
                // Event created successfully
                window.location.href = '/dashboard/admin'
                console.log('Fund submitted');
            } else {
                // Handle error
                console.error('Error submiting funds');
            }
        } catch (error) {
            console.error('Error submiting funds:', error);
        }
        //dispatch(updateSharedVariable(sharedVariable - 100));
    }

    return (
        <div className="bg-slate-400 flex p-5 rounded-lg text-black gap-5">
            <div className="w-[50%] h-60 overflow-hidden rounded-md">
                <img src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="flex flex-col justify-evenly items-start">
                <h2 className='text-5xl font-semibold'>{name}</h2>
                <p>{description}</p>
                <span className='text-z2xl font-semibold'>Funds Needed: ${funds}</span>
                <div className="flex gap-5 justify-end">
                    <button className='px-5 py-2 bg-green-600 rounded-lg shadow-lg' onClick={reduceFunds}>Approve Funds</button>
                    {/* <button className='px-5 py-2 bg-red-500 rounded-lg shadow-lg'>Deny</button> */}
                </div>
            </div>
        </div>
    )
}

export default RequestCard