import { MoreVert } from "@material-ui/icons"
import "./post.css"
import { Users } from "../../dummyData.js"
import { useState } from "react"

export default function Post({ post }) {
    // console.log(user[0].username);
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    // the event on clicking like button
    const likeHandler = () => {
        setIsLiked(!isLiked)
        setLike(isLiked ? like-1 : like+1)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={ Users.filter(u=>u.id===post.id)[0].profilePicture } alt="" />
                        <span className="postUsername">{ Users.filter(u=>u.id===post.id)[0].username }</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">{post?.desc}</div>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={ likeHandler } alt="" />
                        <img className="likeIcon" src="/assets/heart.png" onClick={ likeHandler } alt="" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
