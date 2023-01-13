import React, { Component } from 'react'

type linkProps = {
    imageUrl: string,
    title: string,
    description: string
}

class NewsItem extends Component<linkProps> {

    constructor(props: linkProps) {
        super(props);
    }

    render() {
        return (
            <div className="card" style={{ "width": "35rem" }}>
                <img src={this.props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href="/item" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem