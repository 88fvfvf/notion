import { Pagination, Skeleton } from "antd";
import { useState } from "react";
import { useFetchCategoriesQuery, useFetchPizzaQuery } from "../../store/api/pizzasApi";

const Pizza = () => {
    const [page, setPage] = useState(1);

    const handlePage = (page) => {
        setPage(page);
    };
    const { data, isLoading } = useFetchPizzaQuery(page);

    const {data: category} = useFetchCategoriesQuery()
    console.log(category.length);

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "50px",
                    width: "1120px",
                }}
            >
                {data?.map((pizza) => (
                    <Skeleton shape="square" loading={isLoading} key={pizza.id} active title={false} paragraph={false}>
                        <div
                            key={pizza.id}
                            style={{
                                display: "flex",
                                border: "1px solid red",
                                flexDirection: "column",
                            }}
                        >
                            <img src={pizza.imageUrl} key={'image-' + pizza.id} alt="unknown" width={260} />
                            <h1 style={{ textAlign: "center" }}>Images-{pizza.id}</h1>
                        </div>
                    </Skeleton>
                ))}

            </div>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}>
                <Pagination
                    key={data?.id}
                    defaultCurrent={1}
                    current={page}
                    total={10}
                    pageSize={2}
                    onChange={handlePage}
                />
            </div>
        </div>
    );
};

export default Pizza;
