import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthContext from "../../hooks/useAuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleRegister = (data) => {
    const name = data.name;
    const email = data.email;
    const photoUrl = data.photoURL;
    const password = data.password;

    console.log(data);

    createUser(email, password)
      .then((result) => {
        // console.log(result);
        navigate("/");

        // update user profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("update profile");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full max-w-2xl p-8 space-y-3  shadow-cardShadow mx-auto mt-20">
      <h1 className="text-2xl font-bold text-center">Register Now</h1>
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="input w-full input-bordered"
          />
          {errors.name && (
            <p className="text-red-500 text-sm ml-1">{errors.name?.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input w-full input-bordered"
          />
          {errors.email && (
            <p className="text-red-500 text-sm ml-1">{errors.email?.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoURL" className="block font-medium">
            PhotURL
          </label>
          <input
            {...register("photoURL", {
              required: {
                value: true,
                message: "Photo url is required",
              },
            })}
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Photo URL"
            className="input w-full input-bordered"
          />
          {errors.photoURL && (
            <p className="text-red-500 text-sm ml-1">
              {errors.photoURL?.message}
            </p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input w-full input-bordered"
          />
        </div>
        <button
          type="submit"
          className="btn w-full bg-primary hover:bg-primary text-white font-semibold  uppercase"
        >
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
