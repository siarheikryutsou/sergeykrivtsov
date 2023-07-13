export const pageTitle:string = " | Siarhei Kryutsou";
export const gitPagesEntryPath:string = "/sergeykrivtsov";
export const gitPagesHost:string = "siarheikryutsou.github.io"; /*"localhost:3000";*/
export const isGitPages = function ():boolean {
    return window.location.host === gitPagesHost;
}

export const getRoutePath = function (path:string):string {
    return isGitPages() ? gitPagesEntryPath + path : path;
}