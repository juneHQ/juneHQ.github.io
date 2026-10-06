const testimonials = [
  {
    companyLogo: '/integrations/arrows2.svg',
    quote:
      "We started using June before the HubSpot integration came out but since then it really became a crucial part of our stack. We're heavy users of HS and sending data into it before the June app was a pain. Not anymore!",
    image: '/integrations/daniel.svg',
    name: 'Daniel Zarick',
    title: 'CEO at Arrows',
  },
  {
    companyLogo: '/integrations/vev.svg',
    quote:
      'Finally we got a single, reliable source for all product usage data. The team can easily access detailed information on feature usage or specific user interactions with just a couple clicks directly in Attio',
    image: '/integrations/nicolay.svg',
    name: 'Nicolay Thafvelin',
    title: 'CTO of Vev design',
  },
];

export function Testimonials() {
  return (
    <section className="flex flex-col px-[24px] items-center mt-[64px] lg:mt-40 text-primary font-hero">
      <h2 className="w-full text-center text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black">
        Loved by Success and Sales people
      </h2>
      <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] bg-white p-[24px] sm:p-[48px] rounded-[20px] drop-shadow-testimonials mt-[28px] lg:mt-[64px] max-w-[1192px]">
        {testimonials.map((testimonial, idx) => (
          <>
            <div key={idx} className="">
              <img className="w-[64px] rounded-md lg:w-[72px] self-start" src={testimonial.companyLogo} alt="" />
              <figure className="mt-6 flex flex-auto flex-col justify-between">
                <blockquote className="text-[24px] leading-[36px] text-gray-900">
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
