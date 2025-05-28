type ProductOrError = Product | string;

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// generic interface
interface ApiResult<T> {
  data: T;
  success: boolean;
  message: string;
}

function logProduct(product: Product): void {
  console.log(
    `ID: ${product.id}`,
    `Name: ${product.name}`,
    `Price: ${product.price}`,
    `InStock: ${product.inStock}`
  );
}

// generic function
function wrapValue<T>(value: T): T[] {
  return [value];
}

function handleApiResult(result: ApiResult<Product>): ProductOrError {
  if (result.success) {
    logProduct(result.data);
    return result.data;
  } else {
    return result.message;
  }
}

// test function with product
const res: Product = { id: 1, name: "laptop", price: 25000, inStock: true };

handleApiResult({ data: res, success: true, message: "An error occurred" });
