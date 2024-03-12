import { Card } from "flowbite-react";
import ListHeader from "../ListHeader/ListHeader";
import Link from "next/link";
function CustomerAdress({ title, info }) {
  return (
    <>
      <section className="bg-[#e5e5e580] mb-3">
        <Card>
          <div>
            <span className="mb-3">{title}</span>
            <div>{info}</div>
          </div>
        </Card>
      </section>
    </>
  );
}

export default CustomerAdress;
