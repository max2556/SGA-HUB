import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useHttp } from '../hooks/http.hook'; 
import { useMessage } from '../hooks/message.hook'; 



export const LoginPage = () => {

  const [form,setForm] = useState({
    email:'', password:''
  })
  const auth = useContext(AuthContext);
  const message = useMessage();
  const {loading, request, error,clearError} = useHttp();


  useEffect(()=>{
    message(error);
    clearError();
  }, [error,message,clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, [])
  
  const changeHandler = (event) =>
  {
    //В нашей форме меняем event.target.name(Который меняет значение в соответствии с именем Input'a) на event.target.value
    setForm({...form, [event.target.name]: event.target.value});
    console.log(form);
  }


  const loginHandler = async () =>{
    try {
      console.log({...form});
      const data = await request("/api/auth/login", "POST", {...form});
      message(data.message);
      auth.login(data.token, data.userId);
    } catch (e) {}
  }


  return (
    <div className="row">
      <div className="col s6 offset-s3 auth-holder">
      <h4 className="card-title">Войти</h4>
          <div className="white-text">
            <div className="input-field">
              <input
                placeholder="Введите Email"
                id="email"
                type="text"
                name="email"
                onChange={changeHandler}
                className="black-input"     
                     
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field">
              <input
                placeholder="Введите пароль"
                id="password"
                type="password"
                name="password"  
                onChange={changeHandler}
                className="black-input"
                                 
              />
              <label htmlFor="password">Пароль</label>
            </div>

          </div>
          <div className="card-action">
            <button className="btn black auth-btn flow-text" onClick={loginHandler} style={{ marginRight: 10 }} >
              Войти
            </button>
          </div>   
      </div>
    </div>
  )
}
