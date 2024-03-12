import AccountLayout from "@/layouts/AccountLayout";

function Account({ children }) {
  return <AccountLayout>{children}</AccountLayout>;
}

export default Account;
export const AccountPageLayout = (page) => <Account>{page}</Account>;
