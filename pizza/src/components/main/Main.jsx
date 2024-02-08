import { Empty, Pagination, Segmented, Skeleton } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchSortedPizzaQuery } from '../../store/api/api.pizza'
import { setSortedPage } from '../../store/toolkit/pizza.slice'
import { PlusIcon } from '../../svg/icone'
import './StyleMain.scss'

const Main = () => {
    // const [page, setPage] = useState(1)
    // const { data, isLoading, isError } = useFetchSortedPizzaQuery(page)
    const {sortedPizza,page} = useSelector(state => state.pizza);
    const dispatch = useDispatch()
    const load = false

    const handleClick = (page) => {
        dispatch(setSortedPage(page))
    }
    console.log(page);

    return (
        <main>
            <h1>Все пиццы</h1>
            <div className="main">
                {sortedPizza?.map(pizza => (
                    <div key={pizza.id} className="main__pizza">
                        {load ? (
                            <div>
                                <Skeleton.Image active />
                                <Skeleton active title={{ width: "200px" }} paragraph={{ width: [300, 300], rows: 2 }} style={{ paddingTop: 30 }} />
                            </div>
                        ) : (
                            <>
                                <div className="main__img">
                                    <img src={pizza?.imageUrl} alt="unwnown" />
                                </div>
                                <div className="pizza__options">
                                    <div className="main__title_pizza">
                                        <h3>{pizza?.title}</h3>
                                    </div>

                                    <div className="main__segments">
                                        <Segmented size='large' options={['тонкое', 'традиционное']} block />
                                        <div>
                                            <Segmented size='large' options={pizza.sizes} block />
                                        </div>
                                    </div>
                                    <div className="main__price_button">
                                        <h2>от {pizza?.price} ₽</h2>
                                        <button><span><PlusIcon /></span> Добавить</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <Pagination defaultCurrent={1} total={10} pageSize={8} onChange={handleClick} style={{ paddingTop: "30px" }} />
        </main>
    )
}

export default Main