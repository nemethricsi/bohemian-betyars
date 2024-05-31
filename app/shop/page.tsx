import { ThreeItemGrid } from 'components/grid/three-items';
import { getProducts } from 'lib/shopify';

export default async function WebshopPage() {
  const products = await getProducts({});

  return (
    <div className="py-16">
      <ThreeItemGrid />
    </div>
  );
}
