import React from 'react'

const Card = ({ user }) => {
    const handleClick = () => {
        window.location.href = `/${user}/login`
    }
    return (
        <>
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure><img src="https://img.freepik.com/premium-photo/3d-rendering-profile-user-icon-symbols-background-blue-color-front-view_607106-10.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais" alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-4xl mb-5">{user}</h2>
                    <button className="btn btn-primary w-full" onClick={handleClick}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Card