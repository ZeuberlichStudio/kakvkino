import React from 'react';
import From from 'components/form.component';
import {Link} from 'react-router-dom';

const MakeAppointment = () => {
  return(
    <section id="make-appointment" className="section-make-appointment">
      <h1>На встречу с «Как в кино»</h1>
      <p>Заполните форму и мы с вами свяжемся</p>
      <form className="section-make-appointment_form">
        <input type="text" name="company" placeholder="Компания / бренд"/>
        <input type="text" name="name" placeholder="Фамилия и имя"/>
        <input type="text" name="job" placeholder="Должность"/>
        <input type="mail" name="mail" placeholder="Эл. Почта"/>
        <input type="phone" name="phone" placeholder="Телефон"/>
        <button onClick={e => e.preventDefault()} type="submit">Отправить</button>
      </form>
      <span className="section-make-appointment_policy">
        Нажимая кнопку «Отправить» вы подтверждаете своё согласие с <br/>
      <Link to="/privacy-policy"><u>политикой обработки персональных данных</u></Link>
      </span>
    </section>
  );
}

export default MakeAppointment;
