import { useEffect, useReducer, useState } from 'react'

function reducer(blogs,action) {
    switch (action.type) {
        case 'new' :
            return action.blogs
    }
}

function Blogs() {
    const [blogs,dispatch] = useReducer(reducer,null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {fetch('http://localhost:2005/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            dispatch({type : 'new' , blogs : data})
            setIsLoading(false)
        })
      },1000)
    },[])

    return (
        <>
        <div className="blogs">
            { isLoading && <div>Loading...</div>}
            { blogs && blogs.map((blog) => {
                return (
                <>
                <div className="blog">
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
                </>
                )
            })}
        </div>
        </>
    )
}

export default Blogs