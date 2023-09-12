import { Navigate,Outlet } from "react-router-dom";

const Proctected = ()=>{
    let token = localStorage.getItem("authorization");
    console.log("protectd",token)
    if(token === undefined) token="";
    return(
        <>
        {token?<Outlet/>: <Navigate to="/"/>}
        </>
    )
}

export default Proctected;