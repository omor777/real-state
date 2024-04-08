import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full max-w-2xl p-8 space-y-3  shadow-cardShadow mx-auto mt-20">
      <h1 className="text-2xl font-bold text-center">Register Now</h1>
      <form noValidate="" action="" className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            className="input w-full input-bordered"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            className="input w-full input-bordered"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block font-medium">
            PhotURL
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter phot url"
            className="input w-full input-bordered"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input w-full input-bordered"
          />
        </div>
        <button className="btn w-full bg-primary hover:bg-primary text-white font-semibold  uppercase">
          Register
        </button>
      </form>

      <p className="text-sm text-center sm:px-6 pt-3">
        Already have an account?{" "}
        <Link to={"/login"} className="underline font-bold text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
