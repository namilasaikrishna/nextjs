import Link from "next/link"

function Product({productId=100}){
    return(
        <ul>
        <Link href="/products/1" replace><li>Product 1</li></Link>
        <Link href="/products/2" replace><li>Product 2</li></Link>
        <Link href="/products/3" replace><li>Product 3</li></Link>
        <Link href={`/products/${productId}`}>product{productId}</Link>
        </ul>
    )
}

export default Product