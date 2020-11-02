import React from "react";
import "../Components/Contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
    
    constructor (props) {
        super (props);
        this.state = {
            online : props.online,
        }
    }
    
    render () {
    return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt={this.props.name} />

            <div className="status">
                <h4 className="name">{this.props.name}</h4>
                <div
                    className={this.state.online ? "status-online" : "status-offline"}
                ></div>
                    <button onClick={
                        
                        event => {
                            const offline = !this.state.online;
                            this.setState({online : offline})
                        }
                    }
                >
                    <p className="status-text"> {this.state.online ? "online" : "offline"} </p> 
                    </button>
            </div>
        </div>
    );
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};

export default Contact;
