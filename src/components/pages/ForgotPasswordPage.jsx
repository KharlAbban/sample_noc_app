import { Form, Link, useActionData } from "react-router-dom"

const ForgotPasswordPage = () => {
  const forgotPassworderrors = useActionData();
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Form method="post" className="w-75" id="forgotPasswordForm" role="forgotPassword">
      <h4 className="fs-3 text-decoration-underline">Reset Password</h4>
        <div className="form-group mb-3">
          <label className="fw-normal" htmlFor="email">Email address:</label>
          <input required type="email" className="form-control" name="email" id="email" aria-describedby="emailAddress" placeholder="Enter your email address here" />
        </div>
        <div className="form-group mb-3">
          <label className="fw-normal" htmlFor="username">Username:</label>
          <input required type="text" className="form-control" name="username" id="username" aria-describedby="userName" placeholder="Enter your username for this email" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Get Reset Link</button>
        <p className="form-text small">
          Remembered your password? <Link to="/login">Log In</Link>
        </p>
      </Form>
    </div>
  )
}

export default ForgotPasswordPage
