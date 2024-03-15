import Link from "next/link";
import MyNavbar from "../../components/order/navbar/navbar";
import ProccedToBuy from "../../components/order/proccedToBuy/ProccedToBuy";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function CheckoutLayout({ children }) {
  return (
    <>
      <section className="min-h-screen">
        <MyNavbar />
        <section className="container mx-auto  grid grid-cols-12 gap-6 ">
          <section className=" col-span-12 md:col-span-8 lg:col-span-9  p-0 ">
            <div>{children}</div>
          </section>
          <div className="col-span-12 md:col-span-4  lg:col-span-3">
            <ProccedToBuy />
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <Link
              href={"/"}
              className="text-blue-900 mt-2 flex justify-start items-center"
            >
              <ArrowBackIosNewIcon className="text-sm me-1" />
              <span className="hover:underline">
                Go back & continue shopping
              </span>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default CheckoutLayout;
export const CheckPageLayout = (page) => (
  <CheckoutLayout>{page}</CheckoutLayout>
);
CheckoutLayout.getLayout = CheckPageLayout;
