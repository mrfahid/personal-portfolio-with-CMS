'use client'

import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";
import Image from "next/image";
import { barnds, testimonials } from "@/app/types";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<testimonials[]>([]);
  const [brands, setBrands] = useState<barnds[]>([]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = `*[_type == 'testimonials']`;
    const brandsQuery = `*[_type == 'brands']`;

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <Image
              src={urlFor(testimonials[currentIndex].imgUrl)}
              alt="testimonials-images"
              width={200}
              height={100}
            />
            <div className="app__testimonial">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div
            className="app__testimonials-btns app__flex"
            onClick={() =>
              handleClick(
                currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
              )
            }
          >
            <div className="app__flex">
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <Image
              src={urlFor(brand.imgUrl)}
              width={200}
              height={100}
              alt={brand.name}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
