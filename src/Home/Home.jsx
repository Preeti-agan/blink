// import React from 'react'
// import './Home.css'
// const Home = () => {
//   return (
//    <>
    
// <div class="container">
//         <div class="info-card">
//             <h2>Information</h2>
//             <div class="info-item">
//                 <span class="info-label">Name</span>
//                 <span>Joshua Morgan</span>
//             </div>
//             <div class="info-item">
//                 <span class="info-label">Birthday</span>
//                 <span>Aug 12, 1986</span>
//             </div>
//             <div class="info-item">
//                 <span class="info-label">Phone</span>
//                 <span>120-240-9600</span>
//             </div>
//             <div class="info-item">
//                 <span class="info-label">Email</span>
//                 <span>hello@.design</span>
//             </div>
//         </div>

//         <div class="stats-card">
           
//             <div class="stats-grid">
//                 <div class="stat">
//                     <strong>20+</strong>
//                     <span>Years of Experiences</span>
//                 </div>
//                 <div class="stat">
//                     <strong>245</strong>
//                     <span>Happy Customers</span>
//                 </div>
//                 <div class="stat">
//                     <strong>640</strong>
//                     <span>Project Finished</span>
//                 </div>
//                 <div class="stat">
//                     <strong>72+</strong>
//                     <span>Digital Awards</span>
//                 </div>
//             </div>
//         </div>
//     </div>
//    </>
//   )
// }

// export default Home


import React from 'react';
import './home.css'
const Home = () => {
  return (
    <div className="container">
      <div className="info-card">
        <h2>Information</h2>
        <InfoItem label="Name" value="Johua Morgan" />
        <InfoItem label="Birthday
        " value="Aug 12, 1986" />
        <InfoItem label="Phone" value="120-240-9600" />
        <InfoItem label="Email" value="hello@.design" />
      </div>

      <div className="stats-card">
        <StatsGrid
          stats={[
            { value: "20+", label: "Years of Experiences" },
            { value: "245", label: "Happy Customers" },
            { value: "640", label: "Project Finished" },
            { value: "72+", label: "Digital Awards" },
          ]}
        />
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="info-item">
    <span className="info-label">{label}</span>
    <p>{value}</p> 
  </div>
);

const StatsGrid = ({ stats }) => (
  <div className="stats-grid">
    {stats.map((stat, index) => (
      <Stat key={index} value={stat.value} label={stat.label} />
    ))}
  </div>
);

const Stat = ({ value, label }) => (
  <div className="stat">
    <strong>{value}</strong>
    <p>{label}</p> 
  </div>
);

export default Home;