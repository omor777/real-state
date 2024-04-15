import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthContext from "../../hooks/useAuthContext";
import { updateProfile } from "firebase/auth";
import PageTitle from "../../components/PageTitle/PageTitle";
// react tostify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, setReload } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors, "Error message");

  const navigate = useNavigate();

  const handleRegister = (data) => {
    const name = data.name;
    const email = data.email;
    const photoUrl = data.photoURL;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        navigate("/");

        // update user profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            toast.success("Registration Successful");
            setReload(true);
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
    <section className="container  min-h-[calc(100vh-448px)] flex items-center justify-center mt-32 px-4 md:px-0 md:mt-40">
      <PageTitle title={"Register | Nestwise"} />
      <div className="w-full max-w-2xl p-8 space-y-3  shadow-cardShadow mx-auto">
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
              <p className="text-red-500 text-sm ml-1">
                {errors.name?.message}
              </p>
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
              <p className="text-red-500 text-sm ml-1">
                {errors.email?.message}
              </p>
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
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              {...register("password", {
                validate: {
                  passwordLength: (fieldValue) => {
                    return (
                      fieldValue.length > 5 ||
                      "Password should not be less than 6 characters"
                    );
                  },
                  checkLowercase: (fieldValue) => {
                    return (
                      /^(?=.*[a-z]).+$/.test(fieldValue) ||
                      "Password must have an lowercase letter"
                    );
                  },
                  checkUppercase: (fieldValue) => {
                    return (
                      /^(?=.*[A-Z]).+$/.test(fieldValue) ||
                      "Password must have an uppercase letter"
                    );
                  },
                },
              })}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="input w-full input-bordered "
            />
            {errors.password && (
              <p className="text-red-500 text-sm ml-1">
                {errors.password?.message}
              </p>
            )}
            <span
              onClick={() =>
                setShowPassword((prevShowPassword) => !prevShowPassword)
              }
              className="cursor-pointer absolute top-8 right-3"
            >
              {showPassword ? (
                <FaEye className="text-2xl" />
              ) : (
                <FaEyeSlash className="text-2xl" />
              )}
            </span>
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
    </section>
  );
};

export default Register;
