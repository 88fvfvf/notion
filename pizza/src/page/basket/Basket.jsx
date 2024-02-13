import Orders from "../../components/Basket/Orders"
import HeaderLeft from "../../components/Header/Left/HeaderLeft"
import './StyleBasket.scss'

const Basket = () => {
    return (
        <div className="container">
            <HeaderLeft />
            <div className="BasketOrders">
                <Orders />
            </div>
        </div>
    )
}

export default Basket