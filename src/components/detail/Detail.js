import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.scss'
function Detail() {
    const id = useParams();
    const pr = id.id;
    const [staff, setStaff] = useState([]);
    const baseUrl = `https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement/`
    useEffect(() => {
        fetch(baseUrl + pr)
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => console.log(error.message));

    }, [id]);

    return (
        <div className='detail-container'>
            <div className='staff-avatar'>
                <img src={staff.avatar} alt='' />
            </div>
            <div className='staff-info'>
                <div className='info-name'><strong>Name: </strong>{staff.name}</div>
                <div className='info-address'><strong>Address: </strong>{staff.address}</div>
                <div className='info-age'><strong>Age: </strong>{staff.age}</div>
            </div>
        </div>
    )
}

export default Detail