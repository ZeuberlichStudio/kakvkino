import React, {Fragment, useEffect} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'

const ModalWrapper = ({children, device}) => {

  const location = useLocation();
  const history = useHistory();
  const closeRef = (e) => close(e);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keyup', closeRef);
  }, []);

  function close(e) {
    if ( e.type === 'click' && e.target !== e.currentTarget ) return;
    if( e.type === 'keyup' && e.key !== 'Escape' ) return;
    document.removeEventListener('keyup', closeRef);
    history.push('/');
  }

  return(
    <Fragment>
      <div className={`modal-wrapper modal-wrapper-${location.pathname.replace('/', '')}`} id="modal-wrapper" onClick={close}>
        <button
          id="modal-wrapper_close"
          className="modal-wrapper_close"
          onClick={close}
      />
        {children}
      </div>
    </Fragment>
  );
}

export default ModalWrapper;
