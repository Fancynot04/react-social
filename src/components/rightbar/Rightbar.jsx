import './rightbar.css'
import { Users } from "../../dummyData.js"
import Online from "../online/Online"

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="brithdayContainer">
          <img className='brithdayImg' src="/assets/gift.png" alt="" />
          <span className="brithdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a brithday today
          </span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {
            Users.map(
              u => <Online key={u.id} user={u} />
            )
          }
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="/assets/person/1.jpeg" alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="/assets/person/2.jpeg" alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="/assets/person/3.jpeg" alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="/assets/person/4.jpeg" alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="/assets/person/5.jpeg" alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> :<HomeRightbar />}
      </div>
    </div>
  )
}
