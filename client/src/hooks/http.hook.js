import { useState, useCallback } from "react"
//useState, useCallback и скорее всего все методы с use... в начале являются хуками(hooks). Что это нахуй такое? И сколько их в реакте? И зачем они нужны?


export const useHttp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    //request(запрос) - асинхронная функция
    /*Как у любого запроса у него есть: 
    1)Url - куда запрос?
    2)method - как запрос?(имеется в виду, что в NodeJS или Express'e можно по разному обращаться к серверу, метод по умолчанию - GET, но если посмотреть в роут регистрации, то видно строчку "router.post()..." Этот самый .post и есть наш метод)
    3)Тело запроса, может быть в разных форматах, об этом в другом месте
    4)Заголовки
    */
    const request = useCallback(async(url, method = "GET", body = null, headers = {}) => {
        setLoading(true); //включаем режим загрузки
        try {
            //Если коротко, то здесь мы отправляем запрос на наш сервер, пытаемся получить ответ, если получили - превращаем в json. Если не получили - пиздец
            //А вот и про тело запроса. Если оно есть - превратить в строку
            if (body) {
                body = JSON.stringify(body);
                headers["Content-Type"] = "application/json"; //И указать, что тип контента(узнать где посмотреть Headers) - json
            }

            const response = await fetch(url, { method, body, headers }); //Fetch - встроенный браузерный объект, возвращающий ответ. Принимает Url и объект со свойствами
            //Если с ответом не все в порядке...
            const data = await response.json(); //Превращаем ответ в json, называем это data
            //console.log("http.hook: " + JSON.stringify(data));

            if (!response.ok) { throw new Error(data.message || "Что-то пошло не так в хуке useHttp") }
            setLoading(false); //Выключаем режим загрузки
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => { setError(null); }, []);

    return { loading, request, error, clearError };
}