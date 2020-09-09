import React from 'react';
import { blogList }from './blogData'

class Blog extends React.Component {

    handleClick(event) {
        window.open(event.target.getAttribute('data-link'))
    }


    createBlogs() {
        return blogList.map(blog => <div className="ind-blog" onClick={this.handleClick} data-link={blog.link}>
            <img className="blog-pic" src={require(`${blog.img}`)} data-link={blog.link}>
            </img>
            <h5 data-link={blog.link}>
                {blog.title}
            </h5>
            <div className="about-bar" data-link={blog.link}></div>
            <p data-link={blog.link}>
                {blog.preview}
            </p>
        </div>)
    }

    render() {
        return(
            <div className="blog-container" id="blogs">
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