import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAmountCount } from "./AmountContext";

const CandidateDetails = () => {

    const navigate = useNavigate();
    const { refreshAmountCount } = useAmountCount();

    const { id } = useParams();
    const [candidate, setCandidate] = useState([]);
    const { firstName, lastName, email, phoneNumber, status, notes } = candidate;
    const [ isSubmitting, setIsSubmitting ] = useState(false);


    useEffect(() => {
        const getCandidateById = async () => {
            const { data } = await axios.get(`/api/candidates/getcandidatebyid?id=${id}`);
            setCandidate(data);
        }

        getCandidateById();
    }, []);

    const onConfirmClick = async () => {
        setIsSubmitting(true);
        candidate.status = 'Confirmed';
        await axios.post('/api/candidates/updatestatus', candidate);
        setIsSubmitting(false);
        refreshAmountCount();
        navigate('/');
    }

    const onDeclineClick = async () => {
        setIsSubmitting(true);
        candidate.status = 'Declined';
        await axios.post('/api/candidates/updatestatus', candidate);
        setIsSubmitting(false);
        refreshAmountCount();
        navigate('/');
    }

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: {status}</h4>
                        <h4>Notes: </h4>
                        <p>{notes}</p>
                        <div>
                            <button className="btn btn-primary" style={{ marginRight: 8 }} onClick={onConfirmClick} disabled={isSubmitting} >{isSubmitting ? 'Confirming...' : 'Confirm'}</button>
                            <button className="btn btn-danger" onClick={onDeclineClick} disabled={isSubmitting}>{isSubmitting ? 'Declining...' : 'Decline'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateDetails;