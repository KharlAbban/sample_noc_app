import { Form, Link, useActionData } from "react-router-dom"

const LoginPage = () => {
  const loginErrors = useActionData();

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Form method="post" action="/login" className="w-75" id="loginForm" role="login">
        <h4 className="fs-3 text-decoration-underline">LogIn</h4>
        <div className="form-group my-3">
          <label className="fw-normal" htmlFor="email">Username:</label>
          <input required type="text" className="form-control" name="username" id="username" aria-describedby="username" placeholder="Enter your username here" />
          {loginErrors?.userNameMsg ? <p className="invalid-text small text-danger">{loginErrors.userNameMsg}</p> : ""}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="fw-normal">Password:</label>
          <input required type="password" className="form-control" name="password" id="password" placeholder="Unique Password" />
          {loginErrors?.pwdMsg ? <p className="invalid-text small text-danger">{loginErrors.pwdMsg}</p> : ""}
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
        <p className="form-text small mb-0">
          <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
        </p>
        <p className="form-text small">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </Form>
    </div>
  )
}

export default LoginPage
