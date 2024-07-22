import "./topbox.scss";
import {topDealUsers} from "../../data.ts";


const Topbox = () => {
  return (
    <div className="topbox">
        <h1>Top Deals</h1>
        {topDealUsers.map(user=>(
            <div className="listItem" key={user.id}>
                <div className="user">
                <img src={user.img} alt="" />
                    <div className="userTexts">
                        <span className="username">{user.username}</span>
                        <span className="email">{user.email}</span>
                    </div>
                </div>
                <span className="amount">${user.amount}</span>
            </div>
        ))}
    </div>
  )
}

export default Topbox