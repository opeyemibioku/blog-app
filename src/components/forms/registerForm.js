import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <>
      <div className="w-25">
        <h4 className="text-center">Register</h4>{" "}
        <form>
          <div class="mb-3">
            <input
              required
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="username"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              required
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              required
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="password"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>{" "}
        <p style={{ color: "red" }}>This is an error!</p>
        <span>
          Do you have an account?<Link to="/login">Login</Link>
        </span>
      </div>
    </>
  );
};
export default RegisterForm;
