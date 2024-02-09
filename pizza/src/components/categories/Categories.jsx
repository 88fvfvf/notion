import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { useState } from 'react';
import { useFetchCategoriesQuery } from '../../store/api/api.pizza';
import './StyleCategories.css';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Используем null для обозначения отсутствия активного элемента
    const [selectedValue, setSelectedValue] = useState('популярности');

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

    return (
        <div className='Categories'>
            <div className="item">
                <ul>
                    {data?.map((item, index) => (
                        <li
                        key={item.id}
                        onClick={() => {
                            handleItemClick(index);
                            // setSort(item.categories);
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
