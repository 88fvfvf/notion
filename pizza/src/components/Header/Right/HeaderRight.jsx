import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BasketIcone } from "../../../svg/icone";

const HeaderRight = () => {
    const {price} = useSelector(state => state.pizzaSlice)
    const {amount} = useSelector(state => state.pizzaSlice)
    
    return (
        <div className="header__right">
            <NavLink to='/basket'>
                <div className="price">
                    <span>{price} ₽</span>
                </div>
                <div className="header__left_line"></div>
                <div className="basket">
                    <BasketIcone />
                    <span>{amount}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default HeaderRight