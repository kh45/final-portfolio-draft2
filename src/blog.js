import React from 'react';
import { blogList }from './blogData'

class Blog extends React.Component {

    handleClick() {
        window.open('https://medium.com/@khaledhassan45/how-to-scrape-dynamic-content-off-of-a-web-page-using-rails-nokogiri-and-watir-dc6275af1e91')
    }


    createBlogs() {
        return blogList.map(blog => <div className="ind-blog" onClick={this.handleClick}>
            <img className="blog-pic" src={require(`${blog.img}`)}>
            </img>
            <h5>
                {blog.title}
            </h5>
            <div className="about-bar"></div>
            <p>
                {blog.preview}
            </p>
        </div>)
    }

    render() {
        return(
            <div className="blog-container" id="section1">
                <div className="about-title">
                    <h1 className="about-header">BLOG</h1>
                    <div className="about-bar"></div>
                </div>
                    <div className="blogs">
                        {this.createBlogs()}
                    </div>

            </div>
        )
    }
}

export default Blog