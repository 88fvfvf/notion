import { Pagination, Segmented, Skeleton } from 'antd'
import { useState } from 'react'
import { useFetchPizzaQuery } from '../../store/api/api.pizza'
import { PlusIcon } from '../../svg/icone'
import './StyleMain.scss'

const Main = () => {
    const [page, setPage] = useState(1)
    const handleClick = (page) => {
        setPage(page)
    }
    const { data, isLoading } = useFetchPizzaQuery(page)

    return (
        <main>
            <h1>Все пиццы</h1>
            <div className="main">
                {data?.map(pizza => (
                    <div key={pizza.id} className="main__pizza">
                        {isLoading ? (
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