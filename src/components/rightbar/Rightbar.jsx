import './rightbar.css'
import { Users } from "../../dummyData.js"
import Online  from "../online/Online"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
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
      </div>
    </div>
  )
}
