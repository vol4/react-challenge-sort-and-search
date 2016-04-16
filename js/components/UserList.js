import React, { Component } from 'react';
import UserData from './UserData';

const UserList = ({users, onActiveUser}) => {
  return (
    <div>
        <table className="table table-bordered table-striped user-list">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {users.map(function(user) {
              return <UserData key={user.id} user={user} onActiveUser={onActiveUser} />;
            })}
        </tbody>
        </table>
    </div>
  );
}


export default UserList;
