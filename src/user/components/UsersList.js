import React from 'react';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElement/Card';
import './UsersList.css';

const UserList = (props) => {
    if (props.items.length === 0) {
        return <div className="conter">
            <Card><h2>No User Found</h2></Card>
        </div>
    }
    return <ul className='users-list'>
        {props.items.map( user => 
            <UserItem
                key={user.key}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
            />
        )}
    </ul>
}
export default UserList;