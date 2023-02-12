import React from 'react'
import NewsItem from './NewsItem'
import image from './image/imageNotFound.jpeg'
import Loader from './Loader'

interface infoProps {
    heading: string,
    pageSize: number,
    category: string
}

class News extends React.Component<infoProps, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async fetch() {
        const api = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=abda44f61d834d129ca57a7b3242d585&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        const info = await fetch(api);
        const parsedInfo = await info.json();
        this.setState({
            articles: parsedInfo.articles,
            totalResults: parsedInfo.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.fetch();
    }

    nextPage = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.fetch();
    }

    prevPage = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.fetch();
    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <hr />
                    <h2 className="fw-normal">{this.props.heading}</h2>
                    <hr />
                </div>
                <div className="text-center">
                    {this.state.loading && <Loader />}
                </div>
                <div className="container my-4">
                    <div className="row">
                        {!this.state.loading && this.state.articles?.map((news: any) => {
                            return <div className="col-md-4 my-2" key={news.url ? news.url : ""}>
                                <NewsItem imageUrl={news.urlToImage ? news.urlToImage : image} title={news.title ? news.title?.slice(0, 20) : ""} description={news.description ? news.description?.slice(0, 80) : ""} url={news.url ? news.url : ""} author={news.author ? news.author : "Unknown"} date={news.publishedAt ? new Date(news.publishedAt).toTimeString() : "Time not available"} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="container my-4">
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.prevPage}>&larr; Previous</button>
                        <button type="button" className="btn btn-primary" onClick={this.nextPage}>Next &rarr; </button>
                    </div>
                </div>
            </>
        )
    }
}

export default News