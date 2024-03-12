import { Badge } from "@material-tailwind/react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";

export default function Shoppingcart() {
  return (
    <Link href="/cart" className="flex items-center">
      <Badge color="orange" content="0">
        <ShoppingCartOutlinedIcon className="h-12 text-3xl font-bold" />
      </Badge>
      <span className="font-bold">Cart</span>
    </Link>
  );
}
