import React, {useState} from 'react'
import "./Contact.css";
import { Link } from "react-router-dom";
import logo from "../../images/mwi-logo.png";


function Contact() {
    const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [title, setTitle] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');




    return (
        <div className='contact-container'>
            <section className='contact-left-side'>
            <img className='contact-logo' src={logo} alt='Midwestern Logo'/>
            <div className='contact-left-side-content'>
            <h1 className="contact-left-side-header">
          <span className="contact-gold-underline">Heading</span> One
        </h1>
            <p className='contact-left-side-para'>
                {`            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua. 
                
                Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.`}
            </p>
            </div>
            </section>

            <section className='contact-right-side'>
            <Link className='contact-page-link contact-link' to="/">home</Link>
            <div className='contact-right-side-content'>
            <h1 className='contact-right-side-header'>Heading Two</h1>
            <form className='contact-form'>
                <input className='contact-input' placeholder='First Name'></input>
                <input className='contact-input' placeholder='Last Name'></input>
                <input className='contact-input' placeholder='Title'></input>
                <input className='contact-input' type='email' required placeholder='Email'></input>
                <textarea className='contact-textarea' placeholder='Message'></textarea>
            </form>
            <button className="contact-submit learn-more">Submit</button>
            </div>
            </section>
        </div>
    )
}

export default Contact
