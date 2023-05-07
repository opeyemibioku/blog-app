import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <>
      <div className="w-25">
        <h4 className="text-center">Login</h4>{" "}
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
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="password"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>{" "}
        <p style={{ color: "red" }}>This is an error!</p>
        <span>
          Don't have an account?<Link to="/register">Register</Link>
        </span>
      </div>
    </>
  );
};
export default LoginForm;
