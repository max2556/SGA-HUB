import React from 'react'
import { useHistory } from 'react-router-dom';
/*Link выглядит так: 
{
    originalLink: { type: String, required: true }, - изначальная ссылка
    shortenLink: { type: String, required: true, unique: true }, - наша, укороченная ссылка
    linkCode: { type: String, required: true, unique: true }, - личный код(id) ссылки
    creationDate: { type: Date, default: date.now }, //дата создания
    redirectionCount: { type: Number, default: 0 }, //Количество переходов
    ownerId: { type: Types.ObjectId, ref: "User" } //Создатель
}*/



export const LinkList = ({ links }) => {
  
    const history = useHistory();
    return (
    <>
      <table>
        <thead>
          <tr>
            <th>Порядковый номер</th>
            <th>Изначальная ссылка</th>
            <th>Количество переходов</th>
            <th>Детали</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link,i) => {
            return (
              <tr>
                <td style={{textAlign: 'center'}}>{i+1}</td>
                <td>{link.originalLink}</td>
                <td>{link.redirectionCount}</td>
                <td><a href={("/details/"+link._id)}>Детали</a></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
