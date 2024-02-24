import { useState } from 'react';
import { useFetchCategoriesQuery } from '../../store/api/api.pizza';
import './StyleCategories.css';
import Sort from './sort/Sort';

const Categories = () => {
    const { data } = useFetchCategoriesQuery();
    const [activeIndex, setActiveIndex] = useState(0);


    const handleItemClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(index);
        } else {
            setActiveIndex(index); 
        }
    };

    return (
        <div className='Categories'>
            <div className="item">
                <ul>
                    {data?.map((item, index) => (
                        <li
                        key={item.id}
                        onClick={() => {
                            handleItemClick(index);
                            console.log(item.categories);
                        }}
                        className={activeIndex === index ? 'active' : ''}>
                            {item.categories}
                        </li>
                    ))}
                </ul>   
            </div>
            <div className="DropDown">
                <Sort/>
            </div>
        </div>
    );
};

export default Categories;
