import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import './OrdersStyle.scss';

const Orders = () => {
    const data = useSelector(state => state.pizzaSlice.Pizza);
    const {types,sizes} = useSelector(state => state.typesSizesSlice)

    return (
        <div className="Orders">
            <div className="Order__top">
                <div className="Cart">
                    <span>
                        <PiShoppingCartSimpleLight size={29} />
                    </span>
                    <h2>Корзина</h2>
                </div>
                <div className="delete__cart">
                    <span><RiDeleteBin6Line color="#B6B6B6" size={20} /></span>
                    <p>Очистить корзину</p>
                </div>
            </div>
            {data?.map(order => (
                <div className="Pizza">
                    <div className="Img__title_about">
                        <img src={order?.imageUrl} alt="no images" />
                        <div className="title__about">
                            <h3>{order?.title}</h3>
                            <p>{types}, {sizes}</p>
                        </div>
                    </div>
                    <div className="Change__amout">
                        <CiCircleMinus color="#FE5F1E" size={30}/>
                        <h3>2</h3>
                        <CiCirclePlus color="#FE5F1E" size={30}/>
                    </div>
                    <div className="pizza__price">
                        <h3>{order?.price + '₽'}</h3>
                    </div>
                    <div className="delete">
                        <TiDeleteOutline color="#D7D7D7" size={30}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orders;
