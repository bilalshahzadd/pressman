import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

    customStyle: object = {
        backgroundColor: "rgb(15 23 42)",
        color: "#61dafb"
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark" style={this.customStyle}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Pressman</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Entertainment" className="nav-link">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Sports" className="nav-link">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Health" className="nav-link">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Business" className="nav-link">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Science" className="nav-link">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Technology" className="nav-link">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Header