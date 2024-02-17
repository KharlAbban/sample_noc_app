import { redirect } from "react-router-dom";

export const homeLoader = async () => {
    const User = await localStorage.getItem("user") || localStorage.clear();
    if (User) {
        return User;
    } else {
        return redirect("/login");
    }
}

export const isLoggedInLoader = async () => {
    const User = await localStorage.getItem("user") || localStorage.clear();
    if (User) {
        return redirect("/home");
    } else {
        return redirect("/login");
    }
}