import { useContext } from "react"
import { AuthProvider } from "../component/AuthProvider/AuthProvider"

const useAuth=()=>{
    return useContext(AuthProvider)
}
export default useAuth;