import React, { createContext } from 'react';


export const AuthContext = createContext()

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);





    const authInfo = {
        user,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Provider;