import { useState } from 'react'

function Blogs() {
    const [blogs,setBlogs] = useState([
        {title : 'React', para : 'lorem ipsum...' , id : 1},
        {title : 'Javascript Resources', para : 'lorem ipsum...' , id : 2},
        {title : 'No New Features', para : 'lorem ipsum...' , id : 3},
        {title : 'React', para : 'lorem ipsum...' , id : 4},
    ])

    return (
        <>
        <div className="blogs">
            {blogs.map((blog) => (
                <div className="blog">
                    <h1>{blog.title}</h1>
                    <p>{blog.para}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Blogs