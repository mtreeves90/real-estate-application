import { firebaseContext } from "contexts";
import { FirebaseApp } from "firebase/app";
import { useContext } from "react";

type FirebaseHook = () => [app: FirebaseApp];

export const useFirebase: FirebaseHook = () => {
    const { app } = useContext(firebaseContext);
    return [app!];
}