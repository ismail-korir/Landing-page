/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'The Blue Ocean MX',
    href: '#',
    description: 'Lorem ipsum dolor sit amet,  sed do eiusmod ',
    imageSrc: '/src/assets/guide_01.png',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'The Great Sweater',
    href: '#',
    description: 'Lorem ipsum dolor sit amet,  sed do eiusmod ',
    imageSrc: '/src/assets/guide_02.png',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Soft Purple Shirt',
    href: '#',
    description: 'Lorem ipsum dolor sit amet,  sed do eiusmod ',
    imageSrc: '/src/assets/guide_03.png',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },

  // More products...
]

export default function Flowgallery() {
  return (
    <div className="bg-slate-100">
      <div className=" mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h1 className="pb-10 font-medium text-3xl font-['Judson']">
          Products Guid
        </h1>
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-medium font-bold text-gray-700 font-['Judson']">
                {product.name}
              </h3>
              <p className="mt-1 text-gray-900 ">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
