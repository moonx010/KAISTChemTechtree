// import Logo from './assets/Chem-Logo.png';
import './App.css';
import ClassList from './ClassList';
import {useState} from 'react';

import Button from './Button';
function App() {
    const [category, setCategory] = useState(0);
    const [active, setActive] = useState([false, false, false, false, false, false]);
    const onClick = (newcategory) => {
        setCategory(newcategory);
    };
    // console.log(category);
    return (
        <div>
            <header className="heading">
                    {/* <img className="logo" src={Logo} alt="화학과 로고"/> */}
                    <div className="title-box">
                        <h2 className="title">화학과 테크트리</h2>
                    </div>
            </header>
            <main>
                <div className="introduction">
                    <div className="class-curriculum-intro">
                        <div className="class-type essential-normal"></div>
                        <p className="description">학과필수</p>
                        <div className="class-type choice-normal"></div>
                        <p className="description">전공선택</p>
                        <div className="class-type essential-exceptdouble"></div>
                        <p className="description">복수전공 제외 필수</p>
                        <div className="class-type choice-advanced"></div>
                        <p className="description">심화전공 필수전선</p>
                    </div>
                    <div className="class-curriculum-intro">
                        <div className="class-curriculum physic-on"></div>
                        <p className="description">물리화학</p>
                        <div className="class-curriculum organic-on"></div>
                        <p className="description">유기화학</p>
                        <div className="class-curriculum analysis-on"></div>
                        <p className="description">분석화학</p>
                        <div className="class-curriculum inorganic-on"></div>
                        <p className="description">무기화학</p>
                        <div className="class-curriculum bio-on"></div>
                        <p className="description">생화학</p>
                        <div className="class-curriculum etc-on"></div>
                        <p className="description">기타</p>
                    </div>
                </div>
                <div className="button-list">
                    <Button onClick={onClick} num = '1' active={active} setActive={setActive}>물리화학</Button>
                    <Button onClick={onClick} num = '2' active={active} setActive={setActive}>유기화학</Button>
                    <Button onClick={onClick} num = '3' active={active} setActive={setActive}>분석화학</Button>
                    <Button onClick={onClick} num = '4' active={active} setActive={setActive}>무기화학</Button>
                    <Button onClick={onClick} num = '5' active={active} setActive={setActive}>생화학</Button>
                    <Button onClick={onClick} num = '6' active={active} setActive={setActive}>기타</Button>
                </div>
                <div className="board">
                    <ClassList category={category}/>
                </div>
            </main>
        </div>
    ); 
}

export default App;