import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchCategoriesQuery, useFetchSortedPizzaQuery } from '../../store/api/api.pizza';
import { setSortedPizza } from '../../store/toolkit/pizza.slice';
import './StyleCategories.css';
import useSelection from 'antd/es/table/hooks/useSelection';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Используем null для обозначения отсутствия активного элемента
    const [selectedValue, setSelectedValue] = useState('популярности');
    const [sort,setSort] = useState('')

    const handleMenuClick = (e) => {
        setSelectedValue(e.key);
    };

    const items = [
        {
            key: 'популярности',
            label: 'популярности',
            danger: true
        },
        {
            key: 'по цене',
            label: 'по цене',
            danger: true
        },
        {
            key: 'по алфавиту',
            label: 'по алфавиту',
            danger: true,
        },
    ];

    const { data } = useFetchCategoriesQuery();

    const handleItemClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(index); // Если текущий элемент уже активен, отменяем его активность
        } else {
            setActiveIndex(index); // Устанавливаем активным новый элемент
        }
    };
    const page = useSelector(state => state.pizza.page)
    const { data: sorted } = useFetchSortedPizzaQuery(sort,page);

    // console.log(sorted);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSortedPizza(sorted))
    },[dispatch,sort,sorted])

    return (
        <div className='Categories'>
            <div className="item">
                <ul>
                    {data?.map((item, index) => (
                        <li
                        key={item.id}
                        onClick={() => {
                            handleItemClick(index);
                            setSort(item.categories);
                        }}
                        className={activeIndex === index ? 'active' : ''}>
                            {item.categories}
                        </li>
                    ))}
                </ul>   
            </div>
            <div className="DropDown">
                <Dropdown
                    menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                        onClick: handleMenuClick 
                    }}
                >
                    <Typography.Link>
                        <Space style={{ color: "#2C2C2C", fontFamily: "Nunito", fontSize: "14px", fontWeight: "700" }}>
                            <DownOutlined/>
                            Сортировка по:
                            <span style={{ color: "#FE5F1E", borderBottom: "1px dotted red" }}>{selectedValue}</span>
                        </Space>
                    </Typography.Link>
                </Dropdown>
            </div>
        </div>
    );
};

export default Categories;
