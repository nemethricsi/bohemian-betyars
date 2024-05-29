import { ThreeItemGrid } from 'components/grid/three-items';
import { GridTileImage } from 'components/grid/tile';
import { getProducts } from 'lib/shopify';
import Link from 'next/link';

export default async function WebshopPage() {
  const products = await getProducts({});

  //   console.log({ products });
  //   console.log(products[2]?.priceRange);
  //   console.log(products[2]?.priceRange.minVariantPrice.amount);

  return (
    <div className="py-10">
      <ThreeItemGrid />
      <div className="mx-auto max-w-7xl">
        <ul className="flex w-full gap-4 overflow-x-auto pt-1">
          {products.map((product) => (
            <li
              key={product.handle}
              className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            >
              <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
