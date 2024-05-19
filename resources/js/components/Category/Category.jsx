import React from "react";
import Img1 from "../../assets/category/img.jpeg";
import Img2 from "../../assets/category/img1.jpeg";
import Img3 from "../../assets/category/img2.jpeg";
import Img4 from "../../assets/category/img3.jpeg";
import Img5 from "../../assets/category/img4.jpeg";
import Img6 from "../../assets/category/img5.jpeg";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "SALONS MAROCAIN",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "CANAPÉS D'ANGLE",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "LITS DE COUCHAGE",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Img4,
    title: "FAUTEUIL",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: Img5,
    title: "FAUTEUIL",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img6,
    title: "MÉRIDIENNE",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  
];
const Category = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-24">
          
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Découvrez Nos Catégories
          </h1>
         
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[400px] m-14"
            >
              {/* image section */}
              <div className="h-[380px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[350px] rounded-2xl block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-8 text-center">
              
                <h1 className="text-xl font-bold">{data.title}</h1>
              
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  PLUS DE PRODUCTS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
