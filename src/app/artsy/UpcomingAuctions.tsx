"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const upcomingAuctions = [
  {
    id: "1",
    title: "MONALISA REDEFINED IN STYLE.",
    startDate: "08:00 GTS . Monday ",
    product: "https://images.unsplash.com/photo-1640350168509-756f1ef84b37",
    description:
      "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
  },
  {
    id: "2",
    title: "Are We There Yet?",
    product: "/images/product01.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
  },
  {
    id: "3",
    title: "Oloibiri 1997",
    product: "/images/product06.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
  },
];

export default function UpcomingAuctions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === upcomingAuctions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? upcomingAuctions.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mt-32 py-6.5 upcoming-auctions">
      <div className="pg-container">
        <header>
          <h2 className="text-white font-satoshi font-medium text-[40px] leading-bsnug mb-4.5">
            See Upcoming Auctions and Exhibitions
          </h2>
          <div className="w-[93%] max-w-[667px] h-[0.8px] bg-white ml-7.5"></div>
        </header>

        <div className="slider-container relative overflow-hidden">
          <div className="slider h-[546px] overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={upcomingAuctions[currentIndex].id}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="slider-item grid"
              >
                <img
                  src={upcomingAuctions[currentIndex].product}
                  alt={upcomingAuctions[currentIndex].title}
                  className="max-w-full h-auto object-cover object-center mb-4 col-start-1 row-start-1"
                />
                <div className="image-filter col-start-1 row-start-1"></div>
                <article className="col-start-1 row-start-1">
                  <h3 className="text-2xl text-white font-bold mb-2">
                    {upcomingAuctions[currentIndex].title}
                  </h3>
                  <p>Start on : {upcomingAuctions[currentIndex].startDate} </p>
                  <p className="text-white max-w-md">
                    {upcomingAuctions[currentIndex].description}
                  </p>

                  <div>
                    <Link href="/">See more</Link>
                    <button type="button">Set a reminder</button>
                  </div>
                </article>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div className="indicator"></div>

            <div className="controls flex justify-between mt-4">
              <button
                type="button"
                onClick={handleBack}
                className="text-white bg-gray-700 px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="text-white bg-gray-700 px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
