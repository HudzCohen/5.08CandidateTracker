import React from "react";

const ConfirmedDeclinedRow = ({ candidate, toggle }) => {

    const { id, firstName, lastName, email, phoneNumber, notes } = candidate;

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            {toggle && <td>{notes}</td>}
        </tr>
    )
}

export default ConfirmedDeclinedRow;

