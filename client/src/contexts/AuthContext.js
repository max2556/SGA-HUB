import { createContext } from "react";

function empty() {} //Используется для замены null


//Контекст в реакте - штука, проходящая через всё приложение(если подключить соответственно)
export const AuthContext = createContext({
    token: null,
    userId: null,
    login: empty,
    logout: empty,
    isAuth: false
})