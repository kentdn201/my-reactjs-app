import { useState, useEffect } from "react";

const tabs = ['albums', 'comments', 'posts', 'todos', 'users']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('albums')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200)
            {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidth)

        return() => {
            window.removeEventListener('resize', handleWidth)
        }
    })

    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <h1>{width}</h1>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <ul>    
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position:"fixed",
                        right:20,
                        bottom:20
                    }}
                >
                    Go To Top
                </button>
            )}
        </div>
    )
}

export default Content;