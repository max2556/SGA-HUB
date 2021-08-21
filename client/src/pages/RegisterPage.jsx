import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useHttp } from '../hooks/http.hook'; 
import { useMessage } from '../hooks/message.hook'; 



export const RegisterPage = () => {
  
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
                
                className="black-input"
                                 
              />
              <label htmlFor="password">Пароль</label>
            </div>

          </div>
          <div className="card-action">
            <button className="btn black auth-btn flow-text" style={{ marginRight: 10 }} >
              Регистрация
            </button>
          </div>   
      </div>
    </div>
  )
}
