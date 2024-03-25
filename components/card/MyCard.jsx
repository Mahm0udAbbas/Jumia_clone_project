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

function CatProdCard({ cardData }) {
  return (
    <Card className="items-between justify-between  shadow-none group hover:shadow-2xl">
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
        >
          {" "}
          Add to Card
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CatProdCard;

// function Rating() {
//   return (
//     <div className="flex items-center mt-2">
//       <svg
//         className="w-4 h-4 text-yellow-300 me-1"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 22 20"
//       >
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//       </svg>
//       <svg
//         className="w-4 h-4 text-yellow-300 me-1"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 22 20"
//       >
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//       </svg>
//       <svg
//         className="w-4 h-4 text-yellow-300 me-1"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 22 20"
//       >
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//       </svg>
//       <svg
//         className="w-4 h-4 text-yellow-300 me-1"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 22 20"
//       >
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//       </svg>
//       <svg
//         className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 22 20"
//       >
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//       </svg>
//       <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
//         ()
//       </p>
//     </div>
//   );
// }
