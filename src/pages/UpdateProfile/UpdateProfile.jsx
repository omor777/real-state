import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import useAuthContext from "../../hooks/useAuthContext";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuthContext();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoURL.value;

    // update profile
    updateUserProfile(name, photoUrl)
      .then(() => {
        location.reload();
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="min-h-screen  flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="w-full max-w-2xl mx-auto mt-32 shadow-cardShadow p-8 rounded-md">
        <PageTitle title={"Update profile - Page"} />
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              defaultValue={user?.displayName}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="input w-full input-bordered"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input w-full input-bordered"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block font-medium">
              PhotURL
            </label>
            <input
              defaultValue={user?.photoURL}
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="Photo URL"
              className="input w-full input-bordered"
            />
          </div>
          <button
            type="submit"
            className="btn w-full bg-primary hover:bg-primary text-white font-semibold  uppercase"
          >
            Update Profile
          </button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default UpdateProfile;
