import React, { Component } from 'react'
import NewsItem from './NewsItem'

class News extends Component {

    image = "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"

    render() {
        return (
            <>
                <h1 className="text-3xl font-bold text-center mt-5">Pressman - Watch Latest News Daily For Free</h1>
                <div className="flex justify-between px-5 mt-5">
                    <NewsItem imageLink={this.image} />
                    <NewsItem imageLink={this.image} />
                    <NewsItem imageLink={this.image} />
                </div>
            </>
        )
    }
}

export default News