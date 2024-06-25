import { createContext } from "react";
import { FirebaseContext } from "./types"

export const firebaseContext = createContext<FirebaseContext>({});