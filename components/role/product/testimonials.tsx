const testimonials = [
  {
    companyLogo: '/logos-q3/causal.svg',
    quote: 'June shows us exactly how customers use the product and how we can improve it...',
    image: '/testimonial/lukas.png',
    name: 'Lukas Köbis',
    title: 'Founder of Causal',
  },
  {
    companyLogo: '/testimonial/reveal.svg',
    quote: "Using June's data, our team now interacts more effectively with our customers...",
    image: '/testimonial/perrine.png',
    name: 'Perrine El Khoury',
    title: 'Co-founder of Reveal',
  },
];

export function Testimonials() {
  return (
    <section className="flex flex-col px-[24px] items-center mt-[64px] lg:mt-40 text-primary font-hero">
      <h2 className="w-full text-center text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black">
        Loved by Product People
      </h2>
      <div className="flex flex-col lg:h-[376px] lg:flex-row gap-[24px] lg:gap-[40px] bg-white p-[24px] sm:p-[48px] rounded-[20px] drop-shadow-testimonials mt-[28px] lg:mt-[64px] max-w-[1192px]">
        {testimonials.map((testimonial, idx) => (
          <>
            <div key={idx} className="">
              <img className="h-12 self-start" src={testimonial.companyLogo} alt="" />
              <figure className="mt-6 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>{`“${testimonial.quote}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img className="h-14 w-14 rounded-full bg-gray-50" src={testimonial.image} alt="" />
                  <div className="text-base">
                    <div className="font-black text-gray-900">{testimonial.name}</div>
                    <div className="mt-1 text-gray-600">{testimonial.title}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div
              key={idx}
              className={`${idx === 0 ? 'block' : 'hidden'} w-full lg:w-[1px] h-[1px] lg:h-full bg-gray-300`}
            />
          </>
        ))}
      </div>
    </section>
  );
}
