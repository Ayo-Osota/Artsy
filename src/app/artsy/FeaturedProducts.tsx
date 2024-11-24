import FeaturedProduct from "./FeaturedProduct";

const featuredProducts = [
  {
    id: "1",
    title: "The Boolean Egyptian",
    product: "/images/product20.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 30,
  },
  {
    id: "2",
    title: "Are We There Yet?",
    product: "/images/product01.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 30,
  },
  {
    id: "3",
    title: "Oloibiri 1997",
    product: "/images/product06.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    price: 30,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mt-20 pg-container">
      <h2 className="text-artsy_gray-3 font-satoshi font-medium text-5xl leading-bsnug mb-9">
        Featured products
      </h2>

      {featuredProducts.map((product) => {
        return <FeaturedProduct {...product} />;
      })}
    </section>
  );
}
