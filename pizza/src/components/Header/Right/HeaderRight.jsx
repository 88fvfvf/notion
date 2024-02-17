import { NavLink } from "react-router-dom"
import { BasketIcone } from "../../../svg/icone"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

const HeaderRight = () => {
    const data = useSelector(state => state.pizzaSlice.Pizza);
    const {price} = useSelector(state => state.OrderSlice)
    const {changeAmount} = useSelector(state => state.pizzaSlice)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(changeAmount);
    }, [data, dispatch]);
    console.log(changeAmount);
    return (
        <div className="header__right">
            <NavLink to='/basket'>
                <div className="price">
                    <span>{price} ₽</span>
                </div>
                <div className="header__left_line"></div>
                <div className="basket">
                    <BasketIcone />
                    <span>{changeAmount}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default HeaderRight