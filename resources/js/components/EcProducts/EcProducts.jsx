import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/salone/image.png";
import Img2 from "../../assets/salone/image2.png";
import Img3 from "../../assets/salone/image3.png";
import Img4 from "../../assets/salone/image4.jpeg";
import Img5 from "../../assets/salone/image5.jpeg";
import Img6 from "../../assets/salone/image6.jpeg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Salon argenté",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    discountPercentage: "30%"
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
    discountPercentage: "40%"

  },
  {
    id: 3,
    img: Img3,
    title: "Salon doré",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    discountPercentage: "35%"

  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    discountPercentage: "50%"

  },
  {
    id: 5,
    img: Img5,
    title: "Salon vert",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
    discountPercentage: "20%"

  },
  {
    id: 6,
    img: Img6,
    title: "Salon vert",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
    discountPercentage: "25%"

  },
];

const EcProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
          PROMOS INÉGALÉES JUSQU'À -50%
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          OFFRES PROMOTIONNELLES
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            
          </p>
        </div>
        <Slider {...settings}>
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-4"
            >
              <img
                src={data.img}
                alt=""
                className="h-[420px] w-[250px] object-cover rounded-md"
              />
                  <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md">
                   {`Économisez ${data.discountPercentage}`}
    </div>
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center">
        <button
        className="bg-primary text-2xl mt-8 hover:scale-105 duration-100 text-white py-4 px-8 rounded  group-hover:bg-white group-hover:text-primary"
          >
                  PLUS DE PRODUITS
        </button>
        </div>
      </div>
    </div>
  );
};

export default EcProducts;
