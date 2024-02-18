import { redirect } from "react-router-dom";

export const homeLoader = ({request}) => {
    const User = localStorage.getItem("user") || localStorage.clear();
    const url = new URL(request.url);
    const searchPhrase = url.searchParams.get("search");
    if (User) {
        return {
            searchPhrase,
            User
        };
    } else {
        return redirect("/login");
    }
}

export const isLoggedInLoader = () => {
    const User = localStorage.getItem("user") || localStorage.clear();
    if (User) {
        return redirect("/home");
    } else {
        return redirect("/login");
    }
}