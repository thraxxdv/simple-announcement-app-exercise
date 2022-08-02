export const GetToken = () => {
    let token = '';
    if (typeof window !== "undefined") {
        // Perform localStorage action
        token = localStorage.getItem("token");
    }

    return token;
}