import React from "react";

class LoginContainer extends React.Component {
  render() {
    let tempUrl = "";

    const handleCloseLoginClick = () => {
      document.querySelector(".loginContainer").classList.remove("active");
    };

    return (
      <div class="loginContainer">
        <span
          id="closeLogin"
          class="fas fa-times"
          onClick={handleCloseLoginClick}
        ></span>
        <form action="" className="formBoxShadow">
          <h3>user login</h3>
          <input
            type="text"
            name="username"
            placeholder="username"
            class="box"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            class="box"
          />
          <p>
            forgot your password?{" "}
            <a href={tempUrl}>Click here to retrieve now!</a>
          </p>
          <input type="submit" value="login now" class="btn" />
          <p>or login with</p>
          <div class="buttons">
            <a href={tempUrl} class="btn">
              google
            </a>
            <a href={tempUrl} class="btn">
              facebook
            </a>
          </div>
          <p>
            don't have an account? <a href={tempUrl}>Create one</a>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
