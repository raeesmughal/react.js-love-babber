import { createContext } from "react";


export const ApiContext = createContext();

// export function ApiProvider({ children }) {

//     const globalConfig = {
//         baseURL : 'https://jsonplaceholder.typicode.com'
//     }

//     return (
//         <ApiContext.Provider value={globalConfig}>
//             {children}
//         </ApiContext.Provider>
//     )
// }