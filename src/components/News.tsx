import React from 'react'
import NewsItem from './NewsItem'

class News extends React.Component<{ heading: string }, any>{

    //! FETCH DATA FROM API

    articles = [
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Chantz Martin",
            "title": "NFL selects Atlanta's Mercedes-Benz Stadium for potential Bills-Chiefs AFC Championship matchup - Fox News",
            "description": "A potential AFC Championship game between the No. 2 seed Buffalo Bills and No. 1 seed Kansas City Chiefs would take place in Atlanta at Mercedes-Benz Stadium, the NFL announced Thursday.",
            "url": "https://www.foxnews.com/sports/nfl-selects-atlantas-mercedes-benz-stadium-for-potential-bills-chiefs-afc-championship-matchup",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2019/01/Super-Bowl-5.jpg",
            "publishedAt": "2023-01-12T18:41:00Z",
            "content": "Mercedes-Benz Stadium, home of the Atlanta Falcons, has been chosen at the neutral site for a potential Bills-Chiefs matchup in the AFC Championship, the NFL announced.\r\nThe AFC Championship is sched… [+3460 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Ron Amadeo",
            "title": "Leaked Samsung Galaxy S23 pictures show off new camera design - Ars Technica",
            "description": "Samsung's new smartphones are launching February 1, and a lot has leaked.",
            "url": "https://arstechnica.com/gadgets/2023/01/leaked-samsung-galaxy-s23-pictures-show-off-new-camera-design/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/01/Samsung-Galaxy-S23-1673477741-0-0-660x380.png",
            "publishedAt": "2023-01-12T18:32:46Z",
            "content": "Enlarge/ The base-model Galaxy S23, which has a new camera design.\r\n26 with 0 posters participating\r\nSamsung is gearing up to launch the Galaxy S23 soon, with an event already officially scheduled fo… [+3008 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Jennifer Garner Has the Perfect Response After 'White Lotus' Star Says She Wants to 'Play a Dolphin' - Yahoo Life",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiVWh0dHBzOi8vd3d3LnlhaG9vLmNvbS9saWZlc3R5bGUvamVubmlmZXItZ2FybmVyLXBlcmZlY3QtcmVzcG9uc2Utd2hpdGUtMTgyOTQ2NjM3Lmh0bWzSAV1odHRwczovL3d3dy55YWhvby5jb20vYW1waHRtbC9saWZlc3R5bGUvamVubmlmZXItZ2FybmVyLXBlcmZlY3QtcmVzcG9uc2Utd2hpdGUtMTgyOTQ2NjM3Lmh0bWw?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-01-12T18:29:46Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kevin Liptak, Evan Perez, Phil Mattingly, Marshall Cohen",
            "title": "Garland appoints special counsel to take over Biden classified documents investigation - CNN",
            "description": "Attorney General Merrick Garland has appointed a special counsel to take over the investigation into the classified documents found at President Joe Biden's home and former private office.",
            "url": "https://www.cnn.com/2023/01/12/politics/joe-biden-classified-documents-counsels-office/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230112134315-garland-biden-split.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-12T18:25:00Z",
            "content": "Attorney General Merrick Garland has appointed a special counsel to take over the investigation into the classified documents found at President Joe Bidens home and former private office.\r\nThe specia… [+7860 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Samantha Murphy Kelly",
            "title": "Why Apple may finally be embracing touchscreen laptops - CNN",
            "description": "Over the years, Apple has added touchscreens to almost every computing device imaginable, from phones and tablets to smartwatches, but it has refrained from bringing the feature to its Mac product line -- even as a long list of rivals did so with their laptop…",
            "url": "https://www.cnn.com/2023/01/12/tech/apple-mac-touchscreen/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230112120629-apple-store-laptops-0104-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-12T18:21:00Z",
            "content": "Over the years, Apple has added touchscreens to almost every computing device imaginable, from phones and tablets to smartwatches, but it has refrained from bringing the feature to its Mac product li… [+2810 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Kevin Breuninger",
            "title": "GOP Rep. George Santos vows to serve out his full term as more Republicans push him to resign - CNBC",
            "description": "Santos, a freshman GOP lawmaker from New York, has come under fire after admitting he lied about parts of his background.",
            "url": "https://www.cnbc.com/2023/01/12/gop-rep-george-santos-vows-to-serve-out-his-full-term.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107177920-1673541573494-gettyimages-1456006432-wm3_0122_c07a797f-765e-47b6-9edb-6fc9fb870b75.jpeg?v=1673547370&w=1920&h=1080",
            "publishedAt": "2023-01-12T18:16:10Z",
            "content": "Embattled Republican Rep. George Santos of New York vowed Thursday to stay in Congress and serve out his full two-year term, brushing off howls of bipartisan criticism and calls for his resignation a… [+3581 chars]"
        }
    ]

    constructor(props: any) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false
        };
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
                            return <div className="col-md-4 my-2" key={news.url}>
                                <NewsItem imageUrl={news.urlToImage} title={news.title?.slice(0, 35)} description={news.description?.slice(0, 80)} url={news.url} />
                            </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default News