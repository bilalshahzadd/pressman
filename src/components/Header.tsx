import React, { Component } from 'react'

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
                        <a className="navbar-brand" href="/about">Pressman</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/about">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">Pricing</a>
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