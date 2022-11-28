import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useEffect, useRef, useState } from "react";

// const images = [
//   "https://www.pexels.com/photo/smiling-woman-looking-upright-standing-against-yellow-wall-1536619/",
//   "https://www.pexels.com/photo/woman-in-blue-and-white-striped-top-raising-her-left-hand-1462637/",
//   "https://www.pexels.com/photo/woman-wearing-white-cap-1126993/",
//   "https://www.pexels.com/photo/man-wearing-red-sweatshirt-and-black-pants-leaning-on-the-wall-845434/",
//   "https://www.pexels.com/photo/men-s-white-shirt-428340/",
// ];

const images = [
  "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentSlide(currentSlide === 0 ? 4 : currentSlide - 1);
  };
  const nextSlide = (): void => {
    setCurrentSlide(currentSlide === 4 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === 4 ? 0 : currentSlide + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[calc(100vh-82px)]">
      <div className="overflow-hidden w-full h-full">
        <div className="flex w-[500%]">
          {images.map((image, i) => (
            <div
              className="transition-all"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
              key={i}
            >
              <img
                src={image}
                alt="Image from Pexels"
                className="w-screen h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-6 w-full absolute bottom-8">
        <button
          className="p-4 border rounded-sm backdrop-blur-lg bg-white/30"
          onClick={prevSlide}
        >
          <ArrowBackIosOutlinedIcon />
        </button>
        <button
          className="p-4 border rounded-sm backdrop-blur-lg bg-white/30"
          onClick={nextSlide}
        >
          <ArrowForwardIosOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Slider;
