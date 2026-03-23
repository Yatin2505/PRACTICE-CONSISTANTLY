import React from 'react'

const JobCard = ({companyName, role, salary, location, isRemote}) => {
  return (
     <div style={{border:"2px solid black" , borderRadius : " 10%", padding : "10px", margin:"10px" }}>
          
            <h1> COMPANY : {companyName}</h1>
            <h2> ROLE: {role}</h2>
            <h3> SALARY : {salary}</h3>
            <h3> LOCATION : {location}</h3>
            <p> <b> TYPE : {isRemote ? "Remote Job":"OnSite Job"}</b></p>
    </div>
  )
}

export default JobCard