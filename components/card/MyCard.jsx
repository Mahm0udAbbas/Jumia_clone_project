import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import logoExpress from "@/public/Logo-express.png";
import StarIcon from "@mui/icons-material/Star";
import addToCart from "@/services/addToCart";

function CatProdCard({ cardData }) {
  return (
    <Card key={cardData.proId} className="items-between justify-between  shadow-none group hover:shadow-2xl">
      <div className="flex items-center justify-center p-2">
        <img
          width={100}
          height={100}
          src={cardData.thumbnail}
          alt="product picture"
        />
      </div>
      <CardBody className="text-left">
        <p className="mb-1"></p>
        <p className="font-medium"> {cardData.en.title}</p>
        <Typography className="flex">
          <span className="me-2  text-gray-500 font-normal text-xs">
            {cardData.price}
          </span>
        </Typography>
        <div className="flex items-center">
          <div className="flex">
            <StarIcon
              className={
                cardData.rating >= 1 ? "text-amber-500" : "text-grey-100"
              }
            />
            <StarIcon
              className={
                cardData.rating >= 2 ? "text-amber-500" : "text-grey-100"
              }
            />
            <StarIcon
              className={
                cardData.rating >= 3 ? "text-amber-500" : "text-grey-100"
              }
            />
            <StarIcon
              className={
                cardData.rating >= 4 ? "text-amber-500" : "text-grey-100"
              }
            />
            <StarIcon
              className={
                cardData.rating >= 5 ? "text-amber-500" : "text-grey-100"
              }
            />
          </div>
          <div className="mt-1 ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 text-sm color-blue-900">
            {cardData.ratingQuantity}
          </div>
        </div>
        <Image width={120} height={120} src={logoExpress} alt="logo express" />
      </CardBody>
      <CardFooter className="flex">
        <Button
          className="  text-white invisible group-hover:visible"
          color="amber"
          fullWidth
          onClick={() => {
            addToCart(cardData);
          }}
        >
          {" "}
          Add to Card
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CatProdCard;
