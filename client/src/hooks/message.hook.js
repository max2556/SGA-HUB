import { useCallback } from "react"

export const useMessage = () => {
    return useCallback((text) => {
        if (window.M && text) { //Объект M в Window поставляется вместе с пакетом Materialize-css.
            window.M.toast({ html: text, displayLength: 1500 }); //Функция toast отвечает за всплывающую фигню
        }
    }, [])
}