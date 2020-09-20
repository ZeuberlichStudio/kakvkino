import React from 'react';
import Form from 'components/form.component';
import {Link} from 'react-router-dom';

const MakeAppointment = () => {
  return(
    <section id="make-appointment" className="section-make-appointment">
      <h1>На встречу с «Как в кино»</h1>
      <p>Заполните форму и мы с вами свяжемся</p>
      <Form parentClassname="section-make-appointment"/>
      <span className="section-make-appointment_policy">
        Нажимая кнопку «Отправить» <br/>
        вы подтверждаете своё согласие с <br/>
      <Link to="/privacy-policy"><u>политикой обработки персональных данных</u></Link>
      </span>
    </section>
  );
}

export default MakeAppointment;
