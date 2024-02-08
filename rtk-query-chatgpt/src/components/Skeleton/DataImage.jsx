import { Skeleton } from "antd";
import { useFetchImageQuery } from "../../store/api/api";

const DataImage = () => {
    const { data, isLoading } = useFetchImageQuery();

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            {data?.map(image => (
                <Skeleton
                    active
                    key={image.id}
                    loading={isLoading}
                >
                    <img key={image.id} src={image.imageUrl} alt="unknown" width={300} />
                </Skeleton>
            ))}
        </div>
    );
}

export default DataImage;
