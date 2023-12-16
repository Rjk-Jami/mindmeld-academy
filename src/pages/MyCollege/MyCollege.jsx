import React, { useContext } from 'react';
import { AuthContext } from '../../components/hooks/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyCollege = () => {
    const {user} = useContext(AuthContext)
    const myCollege = useLoaderData()
    console.log(myCollege)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{user?.displayName=== null && "No name found!" ||user?.displayName}</h1>
                        <p className="py-6">Admission Requested : {myCollege.map((m,i)=><p>{m.college}</p>)}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollege;