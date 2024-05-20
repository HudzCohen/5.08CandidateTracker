import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAmountCount } from "./AmountContext";

const AddCandidate = () => {

    const navigate = useNavigate();
    const { refreshAmountCount } = useAmountCount();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    const onSubmitClick = async () => {
        setIsSubmitting(true);
        await axios.post('/api/candidates/addcandidate', {firstName, lastName, email, phoneNumber, notes});
        setIsSubmitting(false);
        refreshAmountCount();
        navigate('/');
    }

    return (
        <div className="container" style={{marginTop: 80}}>
            <div className="row" style={{marginTop: 20}}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <form>
                            <input type="text" name="firstName" placeholder="First Name"
                            className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                            <br />
                            <input type="text" name="lastName" placeholder="Last Name" className="form-control"
                            value={lastName} onChange={e => setLastName(e.target.value)}></input>
                            <br />
                            <input type="email" name="email" placeholder="Email" className="form-control"
                            value={email} onChange={e => setEmail(e.target.value)}></input>
                            <br />
                            <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control"
                            value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>
                            <br />
                            <textarea rows={5} className="form-control" name="notes"
                            value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                            <br />
                            <button className="btn btn-primary" onClick={onSubmitClick} disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit' }</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCandidate;