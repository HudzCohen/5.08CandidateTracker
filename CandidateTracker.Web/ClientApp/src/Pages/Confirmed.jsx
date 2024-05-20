import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ConfirmedDeclinedRow from "../components/ConfirmedDeclinedRow";

const Confirmed = () => {

    const [confirmedCandidates, setConfirmedCandidates] = useState([]);
    const [toggleNotes, setToggleNotes] = useState(false);

    useEffect(() => {
        const getListByStatus = async () => {
          const { data } = await axios.get('/api/candidates/getconfirmed');
          setConfirmedCandidates(data);
        }
         
        getListByStatus();
     },[]);

    
    return (
        <div className="container" style={{marginTop: 80}}>
           <div>
            <h1>Confirmed</h1>
            <div>
                <button className="btn btn-success mb-3" onClick={() => setToggleNotes(!toggleNotes)}>Toggle Notes</button>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            {toggleNotes && <th>Notes</th>}
                        </tr>
                    </thead>
                    <tbody>
                    {confirmedCandidates.map(c => <ConfirmedDeclinedRow 
                     key={c.id}
                     candidate={c} 
                     toggle={toggleNotes} />)}
                    </tbody>
                </table>
            </div>
           </div>
        </div>
    )
}

export default Confirmed;