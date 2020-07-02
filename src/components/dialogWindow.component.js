import React, {useEffect} from 'react'

const DialogWindow = ({children, text, click}) => {

  const [active, setActive] = React.useState(0);
  const refWrapper = React.useRef();
  const refContent = React.useRef();

  function toggleWindow(e) {
    setActive( active === 0 ? 1 : 0 );
    if (refContent.current.offsetHeight >= e.currentTarget.getBoundingClientRect().top) {
      refWrapper.current.classList.add('bottom');
    }else{
      refWrapper.current.classList.remove('bottom');
    }
  }

  return(
    <div className={`dialog-window ${click ? "click" : "hover"} ${active ? "active" : ""}`}>
      {
        click ?
        <u className="dialod-trigger" onClick={toggleWindow}>
          {text}
        </u> :
        <u className="dialod-trigger" >
          {text}
        </u>
      }
      <div ref={refWrapper} className="dialog-window_content-wrapper">
        { click ? <button onClick={toggleWindow} className="dialog-window_close"/> : null }
        <div ref={refContent} className="dialog-window_content">
          {children}
        </div>
      </div>
    </div>
  );
}
export default DialogWindow;
