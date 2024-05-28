import { ThreeItemGrid } from 'components/grid/three-items';
import { getProducts } from 'lib/shopify';

export default async function WebshopPage() {
  const products = await getProducts({});

  //   console.log({ products });
  //   console.log(products[2]?.priceRange);
  //   console.log(products[2]?.priceRange.minVariantPrice.amount);

  return (
    <>
      <h1>Webshop</h1>
      <ThreeItemGrid />
    </>
  );
}
