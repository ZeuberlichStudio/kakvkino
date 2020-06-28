import React, {useEffect} from 'react'

const DialogWindow = ({children, text}) => {
  return(
    <u className="dialod-trigger">
      <div className="dialog-window">
        <div className="dialog-window_content">
          {children}
        </div>
      </div>
      {text}
    </u>
  );
}
export default DialogWindow;
