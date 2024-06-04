import ProductItem from "../ProductItem/ProductItem";

export default function ListProduct({ products }) {
    return (
        <div className="grid grid-cols-4 gap-5">
            {products.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </div>
    )
}
