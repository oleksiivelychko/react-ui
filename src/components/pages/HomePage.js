import React from 'react';
import {Link} from "react-router-dom";

export default class HomePage extends React.Component {
    render(){
        return (
            <div className="content">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        );
    }
}
