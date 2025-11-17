export default function MarketplacePreview() {
  const items = [
    {
      title: 'Ultra-Realistic Voice Pack — Nova',
      tag: 'Voice',
      price: '$29',
      img: 'https://images.unsplash.com/photo-1474433188271-d3f339f41911?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'SEO Blog Flow — 10x Longform',
      tag: 'Workflow',
      price: '$49',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Product Photo Prompts — Studio Look',
      tag: 'Prompt',
      price: '$19',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'YouTube Script Kit — Viral Hooks',
      tag: 'Script',
      price: '$24',
      img: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="marketplace" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Featured assets</h2>
            <p className="mt-2 text-gray-700">A glimpse of what creators are publishing this week.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">View all</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5">{item.tag}</span>
                  <span className="font-medium text-gray-900">{item.price}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                <button className="mt-4 w-full inline-flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-800">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
