export default function FeaturedProduct({
  id,
  description,
  price,
  title,
  product,
}: {
  id: string;
  description: string;
  price: number;
  title: string;
  product: string;
}) {
  return (
    <div className="flex odd:flex-row-reverse gap-9 items-center pt-15 pb-[74px] border-t-[0.5px] border-artsy_gray-3">
      <div className="grow shrink basis-1/2 h-[305px] bg-[#D9D9D9]">
        <img src={product} alt={title} className="object-cover w-full h-full" />
      </div>
      <article className="grow shrink basis-1/2">
        <h3 className=" font-clash font-medium text-4xl leading-[1.23]">
          {title}
        </h3>
        <p className="text-2xl text-artsy_gray-6 mt-10.5">{description}</p>
        <div className="mt-9.5 flex justify-between items-center">
          <p className=" text-xl text-artsy_gray-3">{price} sol</p>
          <div>go</div>
        </div>
      </article>
    </div>
  );
}
