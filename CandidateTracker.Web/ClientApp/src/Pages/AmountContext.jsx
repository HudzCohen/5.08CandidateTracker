import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const AmountContext = createContext();

const AmountContextComponent = (props) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [declinedCount, setDeclinedCount] = useState(0);

    const refreshAmountCount = async () => {
        const { data } = await axios.get('/api/candidates/getallcounts');
        setPendingCount(data.pendingCount);
        setConfirmedCount(data.confirmedCount);
        setDeclinedCount(data.declinedCount);
    }

    useEffect(() => {
        refreshAmountCount();
    }, []);

    const obj = {
       refreshAmountCount,
       pendingCount,
       setPendingCount,
       confirmedCount,
       setConfirmedCount,
       declinedCount,
       setDeclinedCount
    }

    return <AmountContext.Provider value={obj}>
        {props.children}
    </AmountContext.Provider>
}

const useAmountCount = () => {
    return useContext(AmountContext);
}

export default AmountContextComponent;
export { useAmountCount };