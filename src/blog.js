import React from 'react';
import { blogList }from './blogData'

class Blog extends React.Component {


    createBlogs() {
        return blogList.map(blog => <div>
            <img className="blog-pic" src={require(`${blog.img}`)}>
            </img>
            <h5>
                {blog.title}
            </h5>
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