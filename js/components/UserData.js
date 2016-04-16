import React, { Component } from 'react';

const UserData = ({user, onActiveUser}) => {
  return (
    <tr onClick={() => onActiveUser(user.id)}>
        <td>
            <img src={`images/${user.image}.svg`} className="user-image" />
        </td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>8 {user.phone}</td>
    </tr>
  );
}


export default UserData;
