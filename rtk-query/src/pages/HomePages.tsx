import { useEffect, useState } from "react";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../store/github/github.api";
import { log } from "console";
import { useDebounce } from "../hooks/debounce";
import RepoCard from "../components/RepoCard";

const HomePage = () => {
    const [search, setSearch] = useState('')
    const debounce = useDebounce(search)
    const [dropDown, setDropDown] = useState(false)
    const { isLoading, isError, data } = useSearchUsersQuery(debounce, {
        skip: debounce.length < 3
    })
    const [fetchRepos, { isLoading: loading, data: repos }] = useLazyGetUserReposQuery()

    useEffect(() => {
        setDropDown(debounce.length > 3 && data?.length! > 0)
    }, [debounce, data])

    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropDown(false)
    }

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen">
            {isError && <p>Error</p>}

            <div className="relative w-[560px]">
                <input type="text"
                    className="border py-2 px-4 w-full h-[42px] mb-2"
                    placeholder="Search For GitHub..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                {dropDown && <div className="absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                    {isLoading
                        ? <p className="flex justify-center text-lime-600">Загрузка...</p>
                        : data?.map(user => (
                            <li
                                key={user.id}
                                onClick={() => clickHandler(user.login)}
                                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer">
                                {user.login}
                            </li>
                        )) ?? null
                    }

                </div>}
                <div className="container">
                    {loading && <p className="text-center">Repos Loading...</p>}
                    {repos?.map(repo => <RepoCard key={repo.id} repo={repo}/>)}
                </div>
            </div>
        </div>
    )
}

export default HomePage