import { useState } from "react"; 
import CardComponent from "./components/CardComponent"; 
import MovieCard from "./components/MovieCard";
import JobCard from "./components/JobCArd";

function App() {
  
   const courses = [
  {
    courseName: "Web Development",
    trainer: "Rahul Sharma",
    duration: "3 months",
    fees: 15000,
    isAvailable: true
  },
  {
    courseName: "Data Science",
    trainer: "Anjali Verma",
    duration: "6 months",
    fees: 30000,
    isAvailable: true
  },
  {
    courseName: "Digital Marketing",
    trainer: "Suresh Gupta",
    duration: "2 months",
    fees: 10000,
    isAvailable: false
  },
  {
    courseName: "Graphic Design",
    trainer: "Neha Kapoor",
    duration: "4 months",
    fees: 20000,
    isAvailable: true
  },
  {
    courseName: "Cyber Security",
    trainer: "Amit Singh",
    duration: "5 months",
    fees: 25000,
    isAvailable: false
  }
];


const movies = [
  {
    id: 1,
    title: "Pathaan",
    rating: 7.5,
    genre: "Action",
    releaseYear: 2023,
    isHit: true
  },
  {
    id: 2,
    title: "Jawan",
    rating: 7.8,
    genre: "Action/Thriller",
    releaseYear: 2023,
    isHit: true
  },
  {
    id: 3,
    title: "Brahmastra",
    rating: 5.6,
    genre: "Fantasy",
    releaseYear: 2022,
    isHit: false
  },
  {
    id: 4,
    title: "Dangal",
    rating: 8.4,
    genre: "Drama/Sports",
    releaseYear: 2016,
    isHit: true
  },
  {
    id: 5,
    title: "Heropanti 2",
    rating: 3.5,
    genre: "Action",
    releaseYear: 2022,
    isHit: false
  }
];



const jobs = [
  {
    id: 1,
    companyName: "TCS",
    role: "Frontend Developer",
    salary: "6 LPA",
    location: "Mumbai",
    isRemote: false
  },
  {
    id: 2,
    companyName: "Infosys",
    role: "Backend Developer",
    salary: "8 LPA",
    location: "Bangalore",
    isRemote: true
  },
  {
    id: 3,
    companyName: "Wipro",
    role: "Full Stack Developer",
    salary: "7 LPA",
    location: "Hyderabad",
    isRemote: false
  },
  {
    id: 4,
    companyName: "Google",
    role: "Software Engineer",
    salary: "25 LPA",
    location: "Remote",
    isRemote: true
  },
  {
    id: 5,
    companyName: "Amazon",
    role: "DevOps Engineer",
    salary: "20 LPA",
    location: "Chennai",
    isRemote: false
  }
];


  return(<>

     <h1>Card Components </h1>
      <div style={{display: "flex"}}>
        
         {courses.map((course,index)=>
         <CardComponent key={index} { ...course}/>
       
       )}
       </div> 
       <h1 style={{marginTop:"100px"}}>Movie Cards </h1>
        <div style={{display:"flex"}}> 
            {movies.map((movie,index)=>
              <MovieCard key={index} {...movie}/>
            )}
         </div>

      <h1 style={{marginTop:"100px"}}>Job Cards</h1>
        <div style={{display:"flex"}}> 
            {jobs.map((job,index)=>
              < JobCard key={index} {...job}/>
            )}
         </div>


  </>)
}

export default App