import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={
                    {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                }>
                    <span className=" badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://www.cnet.com/a/img/resize/6566d0eccf5fec01e2a5403685c78a26e676b622/hub/2019/10/09/f3cb3e1b-9560-4bc9-a30d-88e1471b28e1/20191008-google-headquarters-campus-mountain-view-006.jpg?auto=webp&fit=crop&height=630&width=1200" : imageUrl}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
