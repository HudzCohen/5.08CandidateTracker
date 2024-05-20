import React from "react";
import { Link } from "react-router-dom";

const PendingRow = ({ candidate }) => {

    const { id, firstName, lastName, email, phoneNumber, notes } = candidate;

    return (
        <tr>
            <td>
                <Link to={`/details/${id}`}>View Details</Link>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{notes}</td>
        </tr>
    )
}

export default PendingRow;