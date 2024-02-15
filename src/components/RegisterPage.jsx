import { Form, Link, useActionData } from "react-router-dom";


const RegisterPage = () => {
  const registerErrors = useActionData();

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Form method="post" className="w-75" id="registerForm" role="register">
      <h4 className="fs-3 text-decoration-underline">Register</h4>
        <div className="form-group mb-3">
          <label className="fw-normal" htmlFor="email">Email address:</label>
          <input required type="email" className="form-control" name="email" id="email" aria-describedby="emailAddress" placeholder="Enter email address here" />
          {registerErrors?.emailMsg ? <p className="invalid-text small text-danger">{registerErrors.emailMsg}</p> : ""}
        </div>
        <div className="form-group mb-3">
          <label className="fw-normal" htmlFor="username">Username:</label>
          <input required type="text" className="form-control" name="username" id="username" aria-describedby="userName" placeholder="Choose a username" />
          {registerErrors?.userNameMsg ? <p className="invalid-text small text-danger">{registerErrors.userNameMsg}</p> : ""}
        </div>
        <div className="form-group mb-3">
          <label className="fw-normal" htmlFor="password">Password:</label>
          <input required type="password" className="form-control" name="password" id="password" placeholder="Unique Password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        <p className="form-text small">
          Signed up already? <Link to="/login">Log In</Link>
        </p>
      </Form>
    </div>
  )
}

export default RegisterPage
