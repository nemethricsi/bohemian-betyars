import { ThreeItemGrid } from 'components/grid/three-items';
import LogoChickenLegIcon from 'components/icons/logo-chicken-leg';
import { getProducts } from 'lib/shopify';

export default async function WebshopPage() {
  const products = await getProducts({});

  return (
    <div className="py-10">
      <LogoChickenLegIcon className="h-6 w-6 fill-bb-white" />
      <ThreeItemGrid />
    </div>
  );
}
