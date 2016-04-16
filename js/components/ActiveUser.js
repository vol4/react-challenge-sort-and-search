import React, { Component } from 'react';

const ActiveUser = ({user}) => {
  return (
    <div>
        <div className="thumbnail">
            <img src={`images/${user.image}.svg`} />
            <div className="caption">
                <h3>{user.name}</h3>

                <table className="table table-responsive">
                <tbody>
                <tr>
                    <td>Age:</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Favorite animal:</td>
                    <td>{user.image}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>8 {user.phone}</td>
                </tr>
                </tbody>
                </table>

                <p>
                    <b>Favorite phrase:</b>
                    <span>{user.phrase}</span>
                </p>
            </div>
        </div>
    </div>
  );
}


export default ActiveUser;
