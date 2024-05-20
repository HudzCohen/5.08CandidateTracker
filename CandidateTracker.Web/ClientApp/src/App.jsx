import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Declined from './Pages/Declined';
import CandidateDetails from './Pages/CandidateDetails';
import AmountContextComponent from './Pages/AmountContext';


const App = () => {
    return (
        <AmountContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addcandidate' element={<AddCandidate />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/declined' element={<Declined />} />
                    <Route path='/details/:id' element={<CandidateDetails />} />
                </Routes>
            </Layout>
        </AmountContextComponent>
    );
}

export default App;