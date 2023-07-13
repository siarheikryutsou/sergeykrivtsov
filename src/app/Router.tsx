import {Navigate, Route, Routes} from "react-router-dom";
import PageMain from "../pages/main/PageMain";
import Page404 from "../pages/404/Page404";
import PageBio from "../pages/bio/PageBio";
import PageBlog from "../pages/blog/PageBlog";
import PageArticle from "../pages/blog-article/PageArticle";
import PageContacts from "../pages/contacts/PageContacts";
import PageCV from "../pages/cv/PageCV";
import PageRecommendations from "../pages/recommendations/PageRecommendations";
import {gitPagesEntryPath} from "../shared/consts";


const Router = () => {
    function onGitPages() {
        const hash:string = window.location.hash.slice(1);
        return hash ? <Navigate to={`/${hash}`} /> : <PageMain />;
    }

    return (
        <Routes>
            <Route path="/" element={<PageMain />} />
            <Route path="/bio" element={<PageBio />} />
            <Route path="/blog" element={<PageBlog />} />
            <Route path="/blog/:id" element={<PageArticle />} />
            <Route path="/contacts" element={<PageContacts />} />
            <Route path="/cv" element={<PageCV />} />
            <Route path="/recommendations" element={<PageRecommendations />} />
            <Route path={`/${gitPagesEntryPath}`} element={onGitPages()} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default Router;