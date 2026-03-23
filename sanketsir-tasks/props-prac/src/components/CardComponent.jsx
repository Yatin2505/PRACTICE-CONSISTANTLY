

function CardComponent({courseName, trainer, duration, fees, isAvailable}) {

    
    return(
        <>
         <div style={{border:"2px solid blue" , borderRadius : " 10%", padding : "10px", margin:"10px" }}>
          
            <h1> COURSE : {courseName}</h1>
            <h2>TRAINER : {trainer}</h2>
            <h3>DURATION : {duration}</h3>
            <h2>FEES : {fees}</h2>
            <p>CURRENT STATUS: {isAvailable ? "Available" : "Not Available"}</p>

         </div>
        
         
        </>
    )
}

export default CardComponent