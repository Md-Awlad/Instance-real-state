import { useContext } from "react"
import { useContexts } from "../ContextProvider/ContextProvider"

const useAuth=()=>{
    return useContext(useContexts);
}
export default useAuth;