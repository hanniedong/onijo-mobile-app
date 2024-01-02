import React, { createContext, useContext, useState, useCallback, FC } from 'react';

export const AuthContext = createContext({
  token: '',
  login: (email: string, password: string) => { },
  logout: () => { },
  isAuthenticated: false,
  loadAuthenticationState: () => { },
  error: null,
  setAuth: ({ }) => { }
});

export const useAuthorization = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};

export const AuthContextProvider: FC = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: '',
    isAuthenticated: false,
    error: null
  })


//   const loadAuthenticationState = useCallback(async () => {
//     try {
//       const token = await getItem(TOKEN);
//       if (token) {
//         setAuthState({
//           token: token,
//           isAuthenticated: true,
//           error: null
//         })
//       }
//     } catch (e) {
//       setAuthState({
//         token: '',
//         isAuthenticated: false,
//         error: e?.json?.message
//       })
//     }
//   }, []);

  const setAuth = (authData: {}) => {
    setAuthState({ ...authState, ...authData })
  }

//   const login = async (email: string, password: string) => {
//     try {
//       const data = await apiv1.auth.login(email, password);
//       if (data) {
//         /* @ts-ignore */
//         if (data.ok) {
//           const { token } = data?.json
//           setAuthState({
//             token: token,
//             isAuthenticated: true,
//             error: null
//           })
//           await saveItem(TOKEN, token);
//           return data.json
//         } else {
//           throw new Error(data?.json.message)
//         }
//       }
//     } catch (e) {
//       throw new Error(e)
//     }
//   }

//   const logout = useCallback(async () => {
//     await removeItem(TOKEN, {});
//     await asyncStorageRemoveItem(USER)
//     setAuthState({
//       token: '',
//       isAuthenticated: false,
//       error: null,
//     })
//   }, [])

  return (
    <AuthContext.Provider value={{ ...authState, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};