import { useGetUserQuery } from "@/redux/features/user/userApi";
import { ProfileForm } from "./ProfileForm";

const Profile = () => {
  let userData = null;
  const { data, isLoading, error } = useGetUserQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>something went wrong</p>;
  if (data && data.data && data.data.email) {
    userData = data.data;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="px-4 py-7 bg-secondary rounded-md">
        <h2 className="text-center text-[60px] font-medium">
          Welcome back, {userData.name}
        </h2>
      </div>
      <div className="px-4 py-7">
        <ProfileForm user={userData} />
      </div>
    </div>
  );
};

export default Profile;
