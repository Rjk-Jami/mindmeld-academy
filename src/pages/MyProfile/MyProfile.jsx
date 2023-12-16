import React, { useContext } from 'react';
import { AuthContext } from '../../components/hooks/AuthProvider';

const MyProfile = () => {
    const {user,SignOutUser} = useContext(AuthContext)
    const handleLogOut = () => {
        SignOutUser();
      };
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{user?.displayName=== null && "No name found!" ||user?.displayName}</h1>
      <p className="py-6">Email: {user?.email}</p>
      <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default MyProfile;