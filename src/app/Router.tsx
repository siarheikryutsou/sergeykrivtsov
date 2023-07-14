import {Route, Routes} from "react-router-dom";
import PageMain from "../pages/main/PageMain";
import Page404 from "../pages/404/Page404";
import PageBio from "../pages/bio/PageBio";
import PageBlog from "../pages/blog/PageBlog";
import PageArticle from "../pages/blog-article/PageArticle";
import PageContacts from "../pages/contacts/PageContacts";
import PageCV from "../pages/cv/PageCV";
import PageRecommendations from "../pages/recommendations/PageRecommendations";
import {getRoutePath} from "../shared/consts";
import {ReactElement} from "react";


const Router = () => {


    type Routes = {
        path:string,
        element: ReactElement
    }

    const routes:Array<Routes> = [
        {path: getRoutePath("/"), element: <PageMain />},
        {path: getRoutePath("/bio"), element: <PageBio />},
        {path: getRoutePath("/blog"), element: <PageBlog />},
        {path: getRoutePath("/blog/:id"), element: <PageArticle />},
        {path: getRoutePath("/contacts"), element: <PageContacts />},
        {path: getRoutePath("/cv"), element: <PageCV />},
        {path: getRoutePath("/recommendations"), element: <PageRecommendations />},
    ];

    return (
        <Routes>
            {routes.map((el) => {
                return <Route key={el.path} path={el.path} element={el.element} />
            })}
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default Router;