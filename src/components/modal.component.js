import React, {Fragment, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Background from 'pages/main'

const ModalWrapper = ({children}) => {

  const history = useHistory();

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  function close(e) {
    if ( e.target !== e.currentTarget ) return;
    document.documentElement.style.overflow = null;
    history.push('/');
  }

  return(
    <Fragment>
      <div className="modal-wrapper" id="modal-wrapper" onClick={close}>
        <button
          id="modal-wrapper_close"
          className="modal-wrapper_close"
          onClick={close}
        />
        {children}
      </div>
      {<Background/>}
    </Fragment>
  );
}

export default ModalWrapper;
