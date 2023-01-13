import React, { Component } from 'react'

type linkProps = {
    title: string,
    description: string,
    imageUrl: string,
    url: string
}

class NewsItem extends Component<linkProps> {

    render() {
        return (
            <div className="card" style={{ "width": "23rem" }}>
                <img src={this.props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href={this.props.url} className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem