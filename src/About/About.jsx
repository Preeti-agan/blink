import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="leftt">
        <img className="leftimgg"src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/couple-working-from-home-together-sofa.jpg" alt=""></img>
      </div>
      <div className="rightt">
        <div className="mystory">
            <h2 className="heading">My Story </h2>
            <img className="storyimg" src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/happy-bearded-young-man.jpg"alt=""></img>
        </div>
        <h3 className="heading1">a little bit about Joshua</h3>
        
        <p className="para">This one-page HTML portfolio is provided by TemplateMo. This layout is based on Bootstrap v5.1.3 CSS and JS libraries. Image credits go to Unsplash and FreePik for images used in this page.</p>
        <p className="para">You are allowed to use this template for your websites. You are not allowed to redistribute the template ZIP file on any other website. Please contact us for more info.</p>
      </div>
    </div>
  );
};

export default About;
