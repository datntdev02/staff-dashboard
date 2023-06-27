import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.scss'
function Home() {
    // const [staff, setStaff] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get('https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement');
    //             setStaff(res.data);

    //         } catch (err) {
    //             console.error("Error", err);
    //         }
    //     };
    //     fetchData();
    // },[])
    const [staff, setStaff] = useState([]);
    const baseUrl = `https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement`
    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => console.log(error.message));

    }, []);
    return (
        <div className='home-container'>
            {staff.map((staff) => (
                <div className='staff'>
                    <img src={staff.avatar} alt=''></img>
                    <div className='staff-info'>
                        <h3 className='staff-name'><strong>{staff.name}</strong></h3>
                        <p className='staff-address'>{staff.address}</p>
                        <p className='staff-age'>{staff.age} years old</p>
                    </div>
                    <div>
                        <Link className='button' to={`detail/${staff.id}`}>Detail</Link>
                    </div>
                </div>
            ))}
        </div>)
}

export default Home