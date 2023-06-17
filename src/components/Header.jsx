import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"


const Header = () => {
  return (
    <div className="flex justify-center h-10 items-center bg-blue-400 w-100vw">
      <Link to="/"><FaHome className="text-white text-2xl"/></Link>
    </div>
  )
}

export default Header
