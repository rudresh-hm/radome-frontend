import React from 'react';
import './dashboard.scss';
const Dashboard=(props)=>{
    return (
        <div className="dashboard">
            {props.children}
        </div>
    )
}
export default Dashboard;