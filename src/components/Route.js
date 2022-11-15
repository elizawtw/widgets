import { useEffect, useState} from "react";

const Route = ({path, children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => { //defined callback separately so we can easily remove it later
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', onLocationChange)

    return() => {
      window.removeEventListener('popstate', onLocationChange) //cleanup function
    }
  },[])
  return window.location.pathname === path ? children : null;
}



export default Route;
