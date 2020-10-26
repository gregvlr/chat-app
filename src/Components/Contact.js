import React from 'react'
import '../Components/Contact.css'

const avatar = "https://randomuser.me/api/portraits/women/45.jpg";
const name = "Christine Allen";
const online = true;

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} />

            <div className="status">
                <h4 className="name">{name}</h4>
                <div className="status-online"></div>
                <p className="status-text">{online ? "online" : "offline"}</p>

            </div>
        </div>
    )
}

export default Contact