import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);

    useEffect(() => {
        fetchBlog();
    },[])

    async function fetchBlog (page)  {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`

        try {
            const response = await fetch(url);
            const result = await response.json();

            setPage(result.page);
            setPosts(result.posts);
            setTotalPages(result.totalPages);
        } catch(err){
            console.error(err);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    const pageChangeHandler = (page) => {
        setPage(page);
        fetchBlog(page);
    }

    const data = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        pageChangeHandler,
        fetchBlog 
    };

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}

/*
    Steps for context Api's:-
        1. Create Context
        2. Provide Context
        3. Consume Context
*/