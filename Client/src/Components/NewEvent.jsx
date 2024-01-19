import React, { useState } from 'react'

const NewEvent = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        funds: '',
      });

    const createEvent = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/addevent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Event created successfully
                console.log('Event created successfully');
                window.location.href = '/dashboard/student'
            } else {
                // Handle error
                console.error('Error creating event');
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-7xl font-bold mb-5'>Event Details</h1>
            <form className='flex flex-col gap-5 w-[50vw]' onSubmit={createEvent}>
                <input type="text" name="name" id="name" className='p-2 text-2xl rounded-md' placeholder='Event name' onChange={handleInputChange} required/>
                <textarea type="text" name="description" id="description" className='p-2 text-2xl rounded-md resize-none' placeholder='Event Description' rows={10} onChange={handleInputChange} required/>
                <input type="date" name="date" id="date" className='p-2 text-2xl rounded-md' onChange={handleInputChange} required/>
                <input type="Number" name="funds" id="funds" className='p-2 text-2xl rounded-md' placeholder='Funds required' onChange={handleInputChange} required/>
                <input type="submit" name="" id="" className='bg-blue-500 p-2 rounded-md text-2xl text-white font-semibold' />
            </form>
        </div>
    )
}

export default NewEvent