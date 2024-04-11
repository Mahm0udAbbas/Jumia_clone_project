import UserNavigate from "@/components/UserNavigate/UserNavigate";

function ProfileDetailsLayout({ children }) {
  return (
    <main className="grid grid-cols-2 gap-4 p-10 bg-white h-screen">
      <div className="shadow-md max-w-sm p-5">
        <UserNavigate />
      </div>
      <div className="shadow-md p-10">{children}</div>
    </main>
  );
}

export default ProfileDetailsLayout;
export const userManagementLayout = (page) => (
  <ProfileDetailsLayout>{page}</ProfileDetailsLayout>
);
ProfileDetailsLayout.getLayout = userManagementLayout;
