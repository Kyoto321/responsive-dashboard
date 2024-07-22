import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"

//fetch data and send to single component

const Product = () => {
  return (
    <div className="product">
        <Single {...singleProduct}/>
    </div>
  )
}

export default Product