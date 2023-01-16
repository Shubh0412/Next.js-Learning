import Link from "next/link";

function Product({ productId = 100 }) {
  return (
    <>
      <Link href="/">
        <p>Home</p>
      </Link>
      <h1>
        <Link href="/product/1">
          <p>Product 1</p>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2">
          <p>Product 2</p>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3" replace>
          <p>Product 3</p>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <p>Product {productId}</p>
        </Link>
      </h1>
    </>
  );
}

export default Product;
