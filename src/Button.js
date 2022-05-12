import { useState } from 'react';
function Button({num, children, onClick, active, setActive}) {
    const curriculum = ['physic', 'organic', 'analysis', 'inorganic', 'bio', 'etc'];
    const [buttonColor, setButtonColor] = useState('');
    const activeState = (num) => {
        if(num === '1') return ([true, false, false, false, false, false]);
        else if(num === '2') return ([false, true, false, false, false, false]);
        else if(num === '3') return ([false, false, true, false, false, false]);
        else if(num === '4') return ([false, false, false, true, false, false]);
        else if(num === '5') return ([false, false, false, false, true, false]);
        else if(num === '6') return ([false, false, false, false, false, true]);
        
    }
    const onChange = () => {
        setButtonColor(curriculum[num-1]);
        setActive([false, false, false, false, false, false]);
        if(!active[num-1]) {
            setActive(activeState(num));
            onClick(num);
        }
        else onClick(0);
    };
    const buttonStyle = active[num-1] ? `button ${buttonColor}-on` : `button`;
    
    return (
        <button className = {buttonStyle} onClick={onChange}>{children}</button>
    )
} 
export default Button;