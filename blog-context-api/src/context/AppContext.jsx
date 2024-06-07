import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}) {

    const newUrl = `https://codehelp-apis.vercel.app/api/`

    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);
    const navigate = useNavigate();



    async function fetchBlog (page = 1, tag = null, category)  {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url += `&tag=${tag}`;
        } 
        if(category){
            url += `&category=${category}`
        }

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
        // fetchBlog(page); //isse url ke andar page change nahi ho raha but navigae se ho raha ha  
        navigate({search : `?page=${page}`})
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