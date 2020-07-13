import React from 'react'

const DialogWindow = ({children, text, click, bottom}) => {

  const [active, _setActive] = React.useState(0);
  const windowRef = React.useRef();
  const handlerRef = React.useRef(toggleWindow);
  const activeRef = React.useRef(active);
  const setActive = data => {
    activeRef.current = data;
    _setActive(data);
  }

  React.useEffect(() => {
    if( !click ) return;
    if( active ){
      document.removeEventListener('click', handlerRef.current );
      document.addEventListener('click', handlerRef.current );
    }else{
      document.removeEventListener('click', handlerRef.current );
    }
  }, [active, click])

  function toggleWindow(e, skip) {
    if(
      windowRef.current.contains(e.target) &&
      !skip
    ) return;
    setActive( activeRef.current === 0 ? 1 : 0 );
  }

  return(
    <div ref={windowRef} className={`dialog-window ${click ? "click" : "hover"} ${active ? "active" : ""}`}>
      {
        click ?
        <u className="dialod-trigger" onClick={(e) => toggleWindow(e, true)}>
          {text}
        </u> :
        <u className="dialod-trigger" >
          {text}
        </u>
      }
      <div className={`dialog-window_content-wrapper ${bottom ? 'bottom' : ''}`}>
        { click ? <button onClick={(e) => toggleWindow(e, true)} className="dialog-window_close"/> : null }
        <div className="dialog-window_content">
          {children}
        </div>
      </div>
    </div>
  );
}
export default DialogWindow;
