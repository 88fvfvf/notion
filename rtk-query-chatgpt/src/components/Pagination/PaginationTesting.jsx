import { Pagination } from "antd";
import { useFetchPizzaQuery } from "../../store/api/pizzasApi";

const PaginationTesting = () => {
    const { data } = useFetchPizzaQuery()
    return (
        <div style={{ paddingTop: "30px" }}>
            <Pagination defaultCurrent={1} total={8} pageSize={data?.pages} />
        </div>
    );
};

export default PaginationTesting;
