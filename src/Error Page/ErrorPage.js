import React from 'react';
import './errorPage.css';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>4<span>0</span>4</h1>
                    </div>
                    <h2>Oops! Page Not Be Found</h2>
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;