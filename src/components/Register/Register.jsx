import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then(result => {console.log(result.user)})
      .catch(error => {console.log(error)}
      )
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl xl:text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            {/* password filed */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="link link-primary" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
