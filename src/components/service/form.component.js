import React, { Component } from 'react';

export default class Form extends Component{
  render() {
    return(
      <div className="form-wrapper">
        <button onClick={ this.props.closeForm } id="close-form"></button>
        <h2 className="m-bebas-20">Форма запроса</h2>
        <p className="m-helvetica-12-bold">Заполните форму и мы с вами свяжемся</p>
        <form id="form">
          <input type="text" name="company" placeholder="Компания или бренд"  className="m-bebas-14" />
          <hr/>
          <input type="text" name="name" placeholder="Фамилия и имя"  className="m-bebas-14" />
          <hr/>
          <input type="text" name="job" placeholder="Должность"
          className="m-bebas-14" />
          <hr/>
          <input type="mail" name="mail" placeholder="Эл. Почта"
          className="m-bebas-14" />
          <hr/>
          <input type="phone" name="phone" placeholder="Телефон"
          className="m-bebas-14" />
          <hr/>
          <button type="submit" className="m-bebas-20">Отправить</button>
        </form>
      </div>
    )
  }
}
