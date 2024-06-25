import { initializeApp } from "firebase/app";
import { firebaseContext } from "../contexts/FirebaseContext/FirebaseContext";
import { firebaseConfig } from "config";
import { ReactNode } from "react";

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
    const app = initializeApp(firebaseConfig);
    return (
        <firebaseContext.Provider value={{ app }}>
            {children}
        </firebaseContext.Provider>
    );
};