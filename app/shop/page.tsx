import Grid from 'components/grid';
import { ThreeItemGrid } from 'components/grid/three-items';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/shopify';

export default async function WebshopPage() {
  const notFeaturedProducts = await getCollectionProducts({
    collection: 'hidden-not-featured'
  });

  console.log({ notFeaturedProducts });

  return (
    <div className="py-8 md:py-16">
      <ThreeItemGrid />
      <section className="mx-auto max-w-7xl px-8 pb-4">
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={notFeaturedProducts} />
        </Grid>
      </section>
    </div>
  );
}
