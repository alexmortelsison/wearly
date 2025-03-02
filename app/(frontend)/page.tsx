import data from "@/lib/data";
import ProductItem from "../components/products/ProductItem";

export default function HomePage() {
  return (
    <>
      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={product}></ProductItem>
        ))}
      </div>
    </>
  );
}
