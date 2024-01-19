import React from 'react'
import Card from './Card'
import Navbar from './Navbar'

const Home = () => {

  const usersLogin = [
    {
      id: 1,
      type: 'Admin',
    },
    {
      id: 2,
      type: 'Student',
    },
    {
      id: 3,
      type: 'Guest',
    }
  ]

  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex justify-evenly items-center">
        {
          usersLogin.map((user) => (
            <Card key={user.id} user={user.type} />
          ))
        }
      </div>
    </>
  )
}

export default Home