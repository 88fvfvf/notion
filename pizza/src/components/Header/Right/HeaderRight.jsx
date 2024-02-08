import { NavLink } from "react-router-dom"
import { BasketIcone } from "../../../svg/icone"

const HeaderRight = () => {
    return (
        <div className="header__right">
            <NavLink to='/basket'>
                <div className="price">
                    <span>520 ₽</span>
                </div>
                <div className="header__left_line"></div>
                <div className="basket">
                    <BasketIcone />
                    <span>3</span>
                </div>
            </NavLink>
        </div>
    )
}

export default HeaderRight