import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { AuthContext } from '../contexts/AuthContext';
import { useHttp } from '../hooks/http.hook'; 
import { useMessage } from '../hooks/message.hook'; 



export const RegisterPage = () => {
  
  const history = useHistory();

  const [form,setForm] = useState({
    email:'', nickname:'', password:''
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

  const registerHandler = async () =>{
    try {
      console.log({...form});
      const data = await request("/api/auth/register", "POST", {...form});
      message(data.message);
      console.log("Data", data);
      loginHandler();
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3 auth-holder">
      <h4 className="card-title">Регистрация</h4>
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
                placeholder="Введите Nickname"
                id="nickname"
                type="text"
                name="nickname"
                onChange={changeHandler}
                className="black-input"     
                     
              />
              <label htmlFor="nickname">Nickname</label>
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
            <button className="btn black auth-btn flow-text" onClick={registerHandler} style={{ marginRight: 10 }} >
              Регистрация
            </button>
          </div>   
      </div>
    </div>
  )
}
