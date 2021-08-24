import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Tariq hi',
            image: 'https://images.pexels.com/photos/3392937/pexels-photo-3392937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            places: 3
        },
        {
            id: 'u2',
            name: 'Tariq Hasan',
            image: 'https://images.pexels.com/photos/3392937/pexels-photo-3392937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            places: 1
        },
    ]

    return <UsersList items={USERS} />
}

export default Users;