export function CrmHero({ crm }) {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                {crm.name} integration
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            June-{crm.name} integration
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            June is the only product analytics tool entirely built for B2B SaaS companies. It's also the only one that
            is able to smoothly integrate with your CRM
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://cal.com/alberto-incisa/pro-plan"
              className="rounded-md font-hero bg-primary px-3.5 py-2.5 text-sm border-2 rounded-[12px] font-semibold text-white shadow-sm hover:bg-white hover:text-primary focus-visible:outline border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
            </a>

            {/* <a href={crm.learnMore} className="text-sm font-semibold leading-6 text-gray-900">
              Book a demo <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img src={crm.heroAsset} alt="App screenshot" width={1216} height={721} className="w-[42rem] rounded-md " />
          </div>
        </div>
      </div>
    </div>
  );
}
