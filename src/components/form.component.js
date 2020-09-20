import React from 'react';
import { Link } from 'react-router-dom';
import {isMobilePhone, isEmail, isAlpha, isAlphanumeric} from 'validator';

function Form({parentClassname, policy = false}) {

  const [values, setValues] = React.useState({
    company: null,
    name: null,
    job: null,
    mail: null,
    phone: null
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [warning, setWarning] = React.useState(null);

  function validate(field){
    if( field.name === "company" ) return isAlphanumeric(field.value) ? true : false;
    else if( field.name === "name" ) return isAlpha(field.value) ? true : false;
    else if( field.name === "job" ) return isAlpha(field.value) ? true : false;
    else if( field.name === "mail" ) return isEmail(field.value) ? true : false;
    else if( field.name === "phone" ) return isMobilePhone(field.value) ? true : false;
  }

  function preSubmit(fields){
    let i = 0;

    switch ( validate(fields[i]) ) {
      case false:
        break;
      default:
        i++;
    }
  }

  function gatherValues(e) {
    const newValues = values;
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  }

  function postSubmit(status){
    if ( status === 200 ){
      setSubmitted(true);
      setWarning('Запрос отправлен');
    }
  }

  function submit(e) {
    e.preventDefault();

    const {company, name, job, mail, phone} = values;

    if ( submitted ) { 
      return;
    }
    else if( !company || !name || !job || !mail || !phone ) {
      setWarning('Заполните все поля');
      return;
    }

    fetch(`https://mail.kakvkino.group/index.php?&name=${name}&company=${company}&email=${mail}&phone=${phone}&job=${job}`)
      .then(({status}) => postSubmit(status));
  }

  return(
    <form id={`${parentClassname}_form`} className={`${parentClassname}_form`}>
        <input onChange={gatherValues} type="text" name="company" placeholder="Компания / бренд"/>
        <hr/>
        <input onChange={gatherValues} type="text" name="name" placeholder="Фамилия и имя"/>
        <hr/>
        <input onChange={gatherValues} type="text" name="job" placeholder="Должность"/>
        <hr/>
        <input onChange={gatherValues} type="mail" name="mail" placeholder="Эл. Почта"/>
        <hr/>
        <input onChange={gatherValues} type="phone" name="phone" placeholder="Телефон"/>
        <hr/>
        <span>
          Нажимая кнопку «Отправить» вы 
          подтверждаете своё согласие на 
          <Link to="/privacy-policy">
            <u>Обработку персональных данных</u>
          </Link>
        </span>
        <button onClick={submit} type="submit">{ warning || 'Отправить' }</button>
    </form>
  );
}

export default Form;