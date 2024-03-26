import CatProdCard from "../card/MyCard";

function CatProdList({ catProducts, catData, subCatData }) {
  if (!catProducts) {
    return <div>nothing to show</div>;
  } else {
    return (
      <>
        <div className="bg-white">
          <p className="p-3 tex t-black text-xl">
            {catData}
            {subCatData ? ` / ${subCatData}` : ""}{" "}
          </p>
          <hr />
          <p className="p-3">{catProducts.length} products found</p>
          <hr />
          <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1">
            {catProducts.map((product) => {
              return <CatProdCard key={product.id} cardData={product} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default CatProdList;
