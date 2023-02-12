import React, { Component } from 'react'

type linkProps = {
    title: string,
    description: string,
    imageUrl: string,
    url: string,
    author: string,
    date: string
}

class NewsItem extends Component<linkProps> {

    customStyle: object = {
        backgroundColor: "rgb(15 23 42)",
        color: "#fff"
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.imageUrl} className="card-img-top" alt="..." height={"220px"} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p className="card-text"><small className="text-muted">By {this.props.author} on {this.props.date}</small></p>
                    <a href={this.props.url} className="btn btn-sm" style={this.customStyle} target="_blank" rel="noreferrer">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem