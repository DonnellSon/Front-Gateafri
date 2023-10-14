import React,{useState,useEffect} from 'react'
import "./Timeline.scss"
import axios from 'axios'
import PostCardSkeleton from '../../components/PostCard/PostCardSkeleton';
import PostCard from '../PostCard/PostCard';

const Timeline = () => {

    const [posts, setPosts] = useState([])
    const [postsLoading, setPostsLoading] = useState(false)
    /**
     * Recuperation des posts
     */
    useEffect(() => {
        setPostsLoading(true)
        axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/posts`,
            method: 'get',
            withCredentials: true
        }).then((res) => {
            console.log(res.data)
            setPosts(res.data)
            setPostsLoading(false)

        }).catch((err) => {
            console.log(err)

        })
    }, [])

    return (
        <div className='timeline'>
            <nav className='floatting-nav'>
                <ul className='flex'>
                    <li className='active'>Tous</li>
                    <li>Actualités</li>
                    <li>Industrie</li>
                    <li>Politique</li>
                    <li>Technologie</li>
                    <li>Science</li>
                    <li>Education</li>
                    <li>Tourisme</li>
                </ul>
            </nav>

            <div className="post-list">
            {
                posts.map((p, i) => (
                    <PostCard
                        key={i}
                        data={p}
                        onDelete={(postId) => setPosts(posts.filter(p => p.id !== postId))}
                    />
                ))
            }

            {
                postsLoading &&
                <>
                    <PostCardSkeleton />
                    <PostCardSkeleton />
                    <PostCardSkeleton />
                </>
            }
            </div>

        </div>
    )
}

export default Timeline
