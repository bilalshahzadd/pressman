import React, { Component } from 'react'
import loader from './image/spinner.gif'

class Loader extends Component {
    render() {
        return (
            <>
                <img src={loader} alt="loading..." />
            </>
        )
    }
}

export default Loader