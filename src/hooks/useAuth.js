import { useContext } from "react"
import { AuthContext } from "../ProvideAuth/ProvideAuth"

const useAuth=()=>{
    return useContext(AuthContext)
} 
export default useAuth;