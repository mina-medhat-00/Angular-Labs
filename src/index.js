function logProduct(product) {
    console.log("ID: ".concat(product.id), "Name: ".concat(product.name), "Price: ".concat(product.price), "InStock: ".concat(product.inStock));
}
// generic function
function wrapValue(value) {
    return [value];
}
function handleApiResult(result) {
    if (result.success) {
        logProduct(result.data);
        return result.data;
    }
    else {
        return result.message;
    }
}
// test function with product
var res = { id: 1, name: "laptop", price: 25000, inStock: true };
handleApiResult({ data: res, success: true, message: "An error occurred" });
