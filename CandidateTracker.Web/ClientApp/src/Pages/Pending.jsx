import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PendingRow from "../components/PendingRow";
import axios from "axios";


const Pending = () => {

    const [ pendingCandidates, setPendingCandidates] = useState([]);

    useEffect(() => {
       const getListByStatus = async () => {
         const { data } = await axios.get('/api/candidates/getpending');
         setPendingCandidates(data);
       }
        
       getListByStatus();
    },[]);

    return (
        <div className="container" style={{marginTop: 80}}>
            <div>
                <h1>Pending</h1>
            </div>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingCandidates.map(p => <PendingRow 
                     key={p.id}
                     candidate={p}  />)}
                </tbody>
            </table>
        </div>
    )
}

export default Pending;