import Link from "next/link"
import { useRouter } from "next/router"

function Home(){
    const router = useRouter()
    const onClickHandler = () =>{
        console.log('order placed successfully')
        router.push('/products/')
    }
    return(
        <div>
        <h1>Home Page</h1>
        <Link href="/blogs">Blog</Link>
        <Link href="/products/">product</Link>
        <button onClick={onClickHandler}>Place Order</button>
        </div> 
    )
    
}
export default Home