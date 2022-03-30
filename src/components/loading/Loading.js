import React from 'react'
import './Loading.css'
import { Spinner } from 'react-bootstrap';

const Loading = () => (
    <div className='loading-container'>
        <Spinner animation="grow" variant="warning"/>
    </div>
);

export default Loading