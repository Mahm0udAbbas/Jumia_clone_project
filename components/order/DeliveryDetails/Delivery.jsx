"use client";
import { Card } from "@material-tailwind/react";
import ListHeader from "../ListHeader/ListHeader";
function Delivery() {
  return (
    <div>
      <Card className="mt-2 p-6">
        <ListHeader value="2.delivery details" />
      </Card>
    </div>
  );
}
export default Delivery;
