import React from 'react';
import './App.css';
import './Icons.css';
import pin from './pin.png';
import insta from './insta.png';
import phone from './phone.png';
import linkedin from './linkedin.png';

const ContactBar = ()=> {
    
    return (
        <div className="ContactBar">
            <a href="https://www.linkedin.com/in/joseph-combopiano-09b9ab1a/"><img className="Icon" src={linkedin} alt="linkedin link" /></a>
            <a href="tel:814-881-1020"><img className="Icon" src={phone} alt="phone number tel link" /></a>
            <a href="https://www.instagram.com/joecombopiano/"><img className="Icon" src={insta} alt="instagram link" /></a>
            <a href="https://www.pinterest.com/joecombopiano/"><img className="Icon" src={pin} alt="pinterest link"/></a>
        </div>
    )
};

export default ContactBar;