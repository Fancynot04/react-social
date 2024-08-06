import "./register.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Lamasocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Lamasocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input className="loginInput" placeholder="Username" />
                    <input className="loginInput" placeholder="Email" type="email" />
                    <input className="loginInput" placeholder="Password" type="password" />
                    <input className="loginInput" placeholder="Password again" type="password" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
