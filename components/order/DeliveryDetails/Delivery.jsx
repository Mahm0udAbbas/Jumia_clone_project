"use client";
import ListHeader from "../ListHeader/ListHeader";
import { Card } from "flowbite-react";
function Delivery() {
  return (
    <div>
      <Card style={{ padding: "0px  !important" }} className="mt-2 py-0">
        <ListHeader value="2.delivery details" />
      </Card>
    </div>
  );
}
export default Delivery;
