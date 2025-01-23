import React from 'react'
import './Home.css'
const Home = () => {
  return (
   <>
    
<div class="container">
        <div class="info-card">
            <h2>Information</h2>
            <div class="info-item">
                <span class="info-label">Name</span>
                <span>Joshua Morgan</span>
            </div>
            <div class="info-item">
                <span class="info-label">Birthday</span>
                <span>Aug 12, 1986</span>
            </div>
            <div class="info-item">
                <span class="info-label">Phone</span>
                <span>120-240-9600</span>
            </div>
            <div class="info-item">
                <span class="info-label">Email</span>
                <span>hello@.design</span>
            </div>
        </div>

        <div class="stats-card">
            <h2></h2>
            <div class="stats-grid">
                <div class="stat">
                    <strong>20+</strong>
                    <span>Years of Experiences</span>
                </div>
                <div class="stat">
                    <strong>245</strong>
                    <span>Happy Customers</span>
                </div>
                <div class="stat">
                    <strong>640</strong>
                    <span>Project Finished</span>
                </div>
                <div class="stat">
                    <strong>72+</strong>
                    <span>Digital Awards</span>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Home
