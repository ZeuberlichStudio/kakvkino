import React from 'react';

function Animate({ id, children, height }) {

    React.useEffect( init, []);

    const ref = React.useRef();

    function setHeight() {
        ref.current.style.setProperty("--height", height);
    }

    function init() {
        setHeight();
        setScrolled();
    
        window.addEventListener( "scroll", setScrolled );

        function setScrolled() {
            const containerRect = ref.current.getBoundingClientRect();
            const scrolled = 
            containerRect.top >= 0 
            ? 0 
            : containerRect.bottom <= 0 
            ? ref.current.offsetHeight 
            : (-1 * containerRect.top);
            
            ref.current.style.setProperty(`--${id}-scrolled`, scrolled);
        }
    }

    function passPropsToChildren(children, props) {
        if ( Array.isArray(children) ) {
            return children.map( child => React.cloneElement(child, props) )
        }
        else {
            return React.cloneElement(children, props)
        }
    }

    return(
        <div ref={ ref } id={ id } className="animate-container">
            { passPropsToChildren(children, {containerId: id}) }
        </div>
    );
}

export function AnimateGroup({ children, fadeOut, containerId }) {

    function passPropsToChildren(children, props) {
        if ( Array.isArray(children) ) {
            return children.map( child => React.cloneElement(child, props) )
        }
        else {
            return React.cloneElement(children, props)
        }
    }

    const style = {
        opacity: fadeOut && `calc( 1 - (var(--${containerId}-scrolled) - ${fadeOut.point}) / ${fadeOut.length} )`
    }

    return(
        <div style={style} className="animate-group">
            { passPropsToChildren(children, {containerId: containerId}) }
        </div>
    );
}

export function AnimateItem({ children, containerId, fadeIn }) {

    const style = {
        opacity: fadeIn && `calc( (var(--${containerId}-scrolled) - ${fadeIn.point}) / ${fadeIn.length} )`
    }

    return(
        <div style={style} className="animate-item">
            { children }
        </div>
    );
}

export function AnimateCanvas({ containerId, fadeIn, zoom, isMobile}) {
    const canvasRef = React.useRef();
    const [dimensions, setDimensions] = React.useState({width: window.innerWidth, height: window.innerHeight});

    React.useEffect(init, []);

    function init() {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        animate();
        window.addEventListener( "scroll", animate );

        function animate() {
            const containerScrolled = document.getElementById(containerId).style.getPropertyValue(`--${containerId}-scrolled`);

            function drawBgRect() {
                ctx.fillStyle = "rgb(255, 250, 236)";
                ctx.fillRect(0, 0, window.innerWidth,  window.innerHeight);
            }
    
            function drawTextItem(item, size) {
                if ( containerScrolled < item.point ) return;
                
                const alpha = containerScrolled > item.point + item.length ? 1 : (containerScrolled - item.point) / item.length;
    
                ctx.globalCompositeOperation = "source-over";
                ctx.fillStyle = `rgba(29, 32, 56, ${alpha})`;
                ctx.font = `${size} Bebas Neue`;
                
                if ( !isMobile ) {
                    ctx.fillText(item.text, dimensions.width/2 * 0.78, dimensions.height/2 + 100 );
                }
                else {
                    ctx.fillText(item.text, 20 / 3.75 * (dimensions.width/100), dimensions.height/2 + dimensions.height * 0.125);
                }
            }

            function drawText(text, size, played){
                ctx.globalCompositeOperation = "destination-over";

                const alpha = 1 - played;

                ctx.fillStyle = `rgba(29, 32, 56, ${alpha})`;
                ctx.font = `${size} Bebas Neue`;
    
                if ( !isMobile ) {
                    ctx.fillText(text, dimensions.width/2 * 0.78, dimensions.height/2 + 100 );
                }
                else {
                    ctx.fillText(text, 20 / 3.75 * (dimensions.width/100), dimensions.height/2 + dimensions.height * 0.125);
                }
            }

            function drawTextMask(text, size) {
                ctx.globalCompositeOperation = "xor";
                ctx.font = `${size} Bebas Neue`;
                console.log( "mask is rendered" );

                if ( !isMobile ) {
                    ctx.fillText(text, dimensions.width/2 * 0.78, dimensions.height/2 + 100 );
                }
                else {
                    ctx.fillText(text, 20 / 3.75 * (dimensions.width/100), dimensions.height/2 + dimensions.height * 0.125);
                }
            }

            function scaleCanvas(played) {
                const scale = fixPlayed * 200;
                const offsetX = -dimensions.width * scale / 2 * 0.9;
                const offsetY = -dimensions.height * scale / 2  * 1.19;
                
                ctx.resetTransform();
                ctx.setTransform(1 + scale, 0, 0, 1 + scale, offsetX, offsetY);
            }

            //animating

            const played = (containerScrolled - zoom.point) / zoom.length;
            const fixPlayed = played < 0 ? 0 : played > 1 ? 1 : played;
            const lastTextItem = fadeIn[fadeIn.length - 1].text;

            ctx.clearRect(0, 0, dimensions.width, dimensions.height);
            drawBgRect();

            if ( fixPlayed > 1 ) return;

            played < 0 && fadeIn.map( item => drawTextItem(item, !isMobile ? "6.25vw" : "15.46667vw") );
            played >= 0 && drawTextMask(lastTextItem, !isMobile ? "6.25vw" : "15.46667vw");
            played >= 0 && drawText(lastTextItem, !isMobile ? "6.25vw" : "15.46667vw", fixPlayed);
            scaleCanvas(fixPlayed);
        }
    }

    return(
        <div className="animate-canvas">
            <canvas ref={ canvasRef } width={ dimensions.width } height={ dimensions.height }>
            </canvas>
        </div>
    );
}

export default Animate;