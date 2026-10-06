const defaultTestimonials = [
  {
    companyLogo: '/logos-q3/amie2.svg',
    quote:
      "My weekly routine is to look at daily, weekly and monthly retention. With June, comparing cohorts is very easy. This is something we've needed a dedicated data analyst for in previous companies. So you can easily calculate the return on investment: best $150/mo we spend.",
    image: '/comparisons/dennis.svg',
    name: 'Dennis Müller',
    title: 'Co-founder of Amie',
  },
  {
    companyLogo: '/comparisons/cafe.svg',
    quote:
      'The feature analysis report enabled us to measure the adoption of a feature in a couple of clicks. By connecting this report to Slack we’ve improved our workflow and team efficiency. This way we spend less time on our data tools.',
    image: '/comparisons/arthur.svg',
    name: 'Arthur Lorotte',
    title: 'CTO of Cafe',
  },
];

export function Testimonials({ testimonials }) {
  const displayedTestimonials = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="bg-white py-12 sm:py-20 font-hero">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {displayedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 ${
                idx % 2 === 1 ? 'lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20' : ''
              }`}
            >
              <img className="h-12 self-start" src={testimonial.companyLogo} alt={`${testimonial.name} company logo`} />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>{`"${testimonial.quote}"`}</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src={testimonial.image}
                    alt={`Photo of ${testimonial.name}`}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="mt-1 text-gray-500">{testimonial.title}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
