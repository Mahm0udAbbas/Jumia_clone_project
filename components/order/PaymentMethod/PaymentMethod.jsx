import { Card } from "@material-tailwind/react";
import ListHeader from "../ListHeader/ListHeader";
// import { Card } from "flowbite-react";

function PaymentMethod() {
  return (
    <div>
      <Card className="mt-2 p-6">
        <ListHeader value="3.payment method" />
      </Card>
    </div>
  );
}

export default PaymentMethod;
