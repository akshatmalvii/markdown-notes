

export default function Login() {


  return (
    <>
      <div className="login-container">
        <h1 className="text-gradient">MDNOTES</h1>
        <h2>Organized note taking made easy</h2>
        <p>
          Build your very own archinve of easily navigated and indexed
          information and notes.
        </p>
        <div className="full-line"></div>
        {/* <h6>{isRegister ? "Create an account" : "Log in"}</h6> */}
        <div>
          <p>Email</p>
          <input
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            // type="text"
            // placeholder="Enter your email address"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            // type="password"
            // placeholder="*******"
          />
        </div>
        <button
          // onClick={handleAuthUser}
          // disabled={cantAuth || isAuthenticating}
          // className="submit-btn"
        >
          {/* <h6>{isAuthenticating ? "Submitting..." : "Submit"}</h6> */}
        </button>
        <div className="secondary-btns-container">
          <button
            // onClick={() => {
            //   setIsRegister(!isRegister);
            // }}
            // className="card-button-secondary"
          >
            {/* <small>{isRegister ? "Log in" : "Sign up"}</small> */}
          </button>
          <button className="card-button-secondary">
            <small>Forgot password?</small>
          </button>
        </div>
        <div className="full-line"></div>
        <footer>
          <a
            target="_blank"
            href="https://github.com/jamezmca/nextjs-15-course"
          >
            {/* <img
              alt="pfp"
              src="https://avatars.githubusercontent.com/u/77163783?v=4"
            /> */}
            {/* <h6>@jamezmca</h6> */}
            <i className="fa-brands fa-github"></i> {/* font awsome */}
          </a>
        </footer>
      </div>
    </>
  );
}
