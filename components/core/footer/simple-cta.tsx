export function SimpleCta() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Let's meet for 30 minutes</p>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg/8 text-gray-600">
            We're here to help you provide an exceptional experience to your customers. Get a 360° view on your clients
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/demo"
              className="border-primary border-2 flex items-center justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
