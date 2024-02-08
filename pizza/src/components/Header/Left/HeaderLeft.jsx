import { NavLink } from "react-router-dom"

const HeaderLeft = () => {
    return (
        <div className="header__left">
            <NavLink to='/'>
                <div className="header__logo">
                    <img src="img/image-1.png" alt="" />
                </div>
                <div className="header__text">
                    <h1>react pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </NavLink>
        </div>
    )
}

export default HeaderLeft