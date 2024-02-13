import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ChangeSort } from "../../../store/toolkit/sort/Sort.Slice.js";
import { items } from './items.js';

const Sort = () => {
    const selector = useSelector(state => state.SortSlice.sort)
    const dispatch = useDispatch()
    const handleMenuClick = (e) => {
        dispatch(ChangeSort(e.key))
    };

    return (
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
                    <DownOutlined />
                    Сортировка по:
                    <span style={{ color: "#FE5F1E", borderBottom: "1px dotted red" }}>{selector}</span>
                </Space>
            </Typography.Link>
        </Dropdown>
    )
}

export default Sort