import { ISocialProof } from "components/comparisons/types";

export function SocialProof({ socialProofTestimonial }: { socialProofTestimonial: ISocialProof }) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 font-hero">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto h-12"
          src={socialProofTestimonial.logo}
          alt={`${socialProofTestimonial.fullName} logo`}
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>"{socialProofTestimonial.quote}"</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src={socialProofTestimonial.profile}
              alt={`${socialProofTestimonial.fullName}'s profile`}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{socialProofTestimonial.fullName}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{socialProofTestimonial.roleCompany}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
