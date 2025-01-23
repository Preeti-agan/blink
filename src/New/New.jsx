import React from 'react'
import './New.css'
const New = () => {
  return (
    <>
    <div className='footer-main'>
    <div className='footer'>
      <div className='foot-top'>
        <img className='foot-img' src=" https://templatemo.com/templates/templatemo_578_first_portfolio/images/aerial-view-man-using-computer-laptop-wooden-table.jpg" alt=""></img>
        <h2 className='foot-h2'>Say Hi</h2>
      </div>
    </div>


    <div className="containerr">
      <div className="left-column">
        <div className="sectionnn">
          <h2 className='foot-strong'>SERVICES</h2>
          <div className="footer-menu">
            <button className='footer-items'>Websites</button>
            <button className='footer-items'>Branding</button>
            <button className='footer-items'>Ecommerce</button>
            <button className='footer-items'>SEO</button>
          </div>
        </div>

        <div className="sectionnn">
          <h2 className='site-footer'>STAY CONNECTED</h2>
          <div className="social-icon">
            <a  className="social-items"href="#"><img src="/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/pinterest.png" alt="Pinterest" /></a>
            <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
          </div>
        </div>
        <div className="section">
          <h2>START A PROJECT</h2>
          <p>I'm available for freelance projects</p>
        </div>
      </div>

      <div className="middle-column">
        <div className="section">
          <h2>ABOUT</h2>
          <p>Joshua is a professional web developer. Feel free to get in touch with me.</p>
        </div>
        <div className="section contact">
          <div>
            <h2>EMAIL</h2>
            <p>hello@josh.design</p>
          </div>
          <div>
            <h2>CALL</h2>
            <p>120-240-9600</p>
          </div>
        </div>
      </div>

      <div className="right-column">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email address" />
          <div className="icon-buttons">
            <button type="button"><img src="/website.png" alt="Website" /></button>
            <button type="button"><img src="/branding.png" alt="Branding" /></button>
            <button type="button"><img src="/ecommerce.png" alt="Ecommerce" /></button>
            <button type="button"><img src="/seo.png" alt="SEO" /></button>
          </div>
          <textarea placeholder="Tell me about the project"></textarea>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default New
