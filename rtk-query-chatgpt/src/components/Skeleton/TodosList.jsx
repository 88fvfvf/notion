import React from "react";
import { useCreatePostsMutation, useFetchDataQuery } from "../../store/api/api";
import { Skeleton } from "antd";

const TodosList = () => {
    const { data, isLoading, isError } = useFetchDataQuery()
    const [createPosts] = useCreatePostsMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPosts({ title, body: title })
    }

    return (
        <div>
            <button onClick={handleCreate}>Add To New Post</button>

            {data?.map(data => (
                <Skeleton
                    key={data.id}
                    active
                    loading={isLoading}
                    title={{ width: 150 }}
                    paragraph={false}
                >
                    <h2>{data?.title}</h2>
                </Skeleton>
            ))}
        </div>
    )
}

export default TodosList