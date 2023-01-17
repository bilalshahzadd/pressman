import React from 'react'
import NewsItem from './NewsItem'
import image from './image/imageNotFound.jpeg'

class News extends React.Component<{ heading: string }, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            articles: [],
            loading: false
        };
    }

    async componentDidMount() {
        const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=abda44f61d834d129ca57a7b3242d585";
        const info = await fetch(api);
        const parsedInfo = await info.json();
        this.setState({
            articles: parsedInfo.articles
        })
    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <hr />
                    <h2 className="fw-normal">{this.props.heading}</h2>
                    <hr />
                </div>
                <div className="container my-4">
                    <div className="row">
                        {this.state.articles?.map((news: any) => {
                            return <div className="col-md-4 my-2" key={news.url ? news.url : ""}>
                                <NewsItem imageUrl={news.urlToImage ? news.urlToImage : image} title={news.title ? news.title?.slice(0, 35) : ""} description={news.description ? news.description?.slice(0, 80) : ""} url={news.url ? news.url : ""} />
                            </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default News