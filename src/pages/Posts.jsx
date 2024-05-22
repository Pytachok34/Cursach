import React, {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import {useNavigate} from "react-router-dom";


function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'',query:''})
    const [modal,setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort,filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts,isPostsLoading,postError] = useFetching(async()=>{
        const response = await PostService.getAll(limit,page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
    } )
    useEffect(()=>{
        fetchPosts(limit,page)
    },[page])

    const createPost =(newPost)=>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page)=>{
        setPage(page)
    }

    const removePost = (post)=>{
        setPosts(posts.filter(p=>p.id!==post.id))
    }
const navigate = useNavigate();
const signOut = ()=>{
        navigate("Login")
}
    return(
        <div className="App">
            <nav className='navbar'>
                <h2>Форум кафедры МоЭВМ</h2>
                <div className='navbarRight'>
                    <button onClick={signOut}>Войти</button>
                </div>
            </nav>
            <MyButton style={{marginTop: 30}} onClick={()=>setModal(true)}>
                Создать Пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display:'flex', justifyContent:'center', marginTop: 30}}>
                    <Loader/>
                </div>
                :<PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список потоков"}/>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );

}

export default Posts;