export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 p-1">
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Launch your AI content storefront</h3>
              <p className="mt-3 text-gray-700">Create listings, set pricing, manage licenses, and get paid instantly. We handle the rest.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white font-medium px-6 py-3 hover:bg-gray-800">Open creator portal</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
