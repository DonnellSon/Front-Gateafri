import React from 'react'
import './PostImagesGrid.css'
import SelectorMedia from '../selectorMedia/SelectorMedia'
import { Link } from 'react-router-dom'
const PostImagesGrid = ({ postId,images }) => {
    return (
        <div className={`post-images-grid post-images-grid-${images.length <= 5 ? images.length : 5}`}>
            {
                images.map((img, i) => {
                    if (i <= 4) {
                        return (
                            <Link to={`/image/${img.image?.id}?p=${postId}`} key={i} className="post-img">
                                <img src={img.fileUrl} alt="" />
                                {
                                    (images.length>5 && i===4) ?
                                        <Link to="#" className="flex flex-column align-items-center">
                                            <span>+{images.length - 5}</span>
                                            <span>Images</span>
                                        </Link>
                                    : ""
                                }
                            </Link>
                        )
                    }

                })
            }
        </div>
    )
}

export default PostImagesGrid
