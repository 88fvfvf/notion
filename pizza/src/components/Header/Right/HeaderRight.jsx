import { NavLink } from "react-router-dom"
import { BasketIcone } from "../../../svg/icone"
import { useSelector } from "react-redux"

const HeaderRight = () => {
    const {orders,price} = useSelector(state => state.OrderSlice)
    return (
        <div className="header__right">
            <NavLink to='/basket'>
                <div className="price">
                    <span>{price} ₽</span>
                </div>
                <div className="header__left_line"></div>
                <div className="basket">
                    <BasketIcone />
                    <span>{orders}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default HeaderRight