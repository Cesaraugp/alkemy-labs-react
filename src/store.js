import {createContext} from 'react'
import useAuthProvider from './components/hooks/useAuthProvider';


const authContext = createContext();


export function ProvideAuth({ children }) {
  const auth = useAuthProvider();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export default authContext

