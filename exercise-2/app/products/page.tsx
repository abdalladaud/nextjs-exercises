interface Product {
  id: number;
  title: string;
}

interface ProductsResponse {
  products: Product[];
}

async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      <ul>
        {data.products.slice(0, 5).map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}