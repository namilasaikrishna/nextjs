import { useRouter } from "next/router"

function Review(){

    const router = useRouter()
    const {reviewId,productId} = router.query

    return(
        <h1>Review{reviewId} for productDetails of product{productId}</h1>
    )
}

export default Review