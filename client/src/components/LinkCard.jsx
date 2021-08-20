import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <>
      <div className="row">
        <div className="col s8 offset-s2">
          <h4>Link's details</h4>
          <div className="collection">
            <div className="collection-item">
              Изначальная ссылка:
              <a href={link.originalLink}>{link.originalLink}</a>
            </div>
            <div className="collection-item">
              Укороченная ссылка:
              <a href={link.shortenLink}>{link.shortenLink}</a>
            </div>
            <div className="collection-item">
              Количество переходов:{link.redirectionCount}
            </div>
            <div className="collection-item">
              Дата создания:{link.creationDate}
            </div>
            <div className="collection-item">
              ID(код) ссылки:{link.linkCode}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
