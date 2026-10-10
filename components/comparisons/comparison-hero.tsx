
import { IAlternative } from "components/comparisons/types";

export function ComparisonHero({ alternative }: { alternative: IAlternative }) {
  return (
    <div className="relative isolate overflow-hidden bg-white font-hero">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                {alternative.hero.heading}
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-black text-gray-900 tracking-tight sm:text-6xl text-center lg:text-left">
            {alternative.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center lg:text-left">
            {alternative.hero.subtitle}
          </p>
          <div className="mt-10 flex items-center gap-x-6 justify-center lg:justify-start">
            <a href={alternative.fullArticle} className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={alternative.hero.heroImage}
                alt="App screenshot"
                width={1216}
                height={721}
                className="w-[42rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
