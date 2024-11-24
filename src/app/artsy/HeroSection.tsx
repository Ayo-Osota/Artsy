export default function HeroSection() {
  return (
    <section className="mt-20 grid">
      <header className="text-center pg-container font-medium leading-normal">
        <h1 className="text-[4rem] font-clash">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="mt-12 text-2xl font-satoshi max-w-[48ch] mx-auto">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </header>

      <div className="sm-hero sm:hidden">
        <img src="/images/product13.png" />
        <img src="/images/product11.png" />
        <img src="/images/product10.jpg" />
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="lg-hero max-sm:hidden mt-20">
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
      </div>
    </section>
  );
}
