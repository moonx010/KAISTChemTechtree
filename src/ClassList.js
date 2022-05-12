import Class from './Class';
import { useState, useEffect } from 'react';
import {fetchClassList, fetchPrerequisiteList} from './libs/api';

function ClassList({category}) {
    const [classList, setClassList] = useState([]);
    const [prerequisiteList, setPrerequisiteList] = useState([]);
    useEffect(()=>{
        const initClassList = async()=>{
            const initialClassList = await fetchClassList();
            const prerequisiteList = await fetchPrerequisiteList();
            setClassList(initialClassList);
            setPrerequisiteList(prerequisiteList);
        };
        initClassList();
    },[]);
    const [on, setOn] = useState([
        {id: 101, on: false}
        ,{id: 102, on: false}
        ,{id: 103, on: false}
        ,{id: 104, on: false}
        ,{id: 211, on: false}
        ,{id: 213, on: false}
        ,{id: 221, on: false}
        ,{id: 223, on: false}
        ,{id: 252, on: false}
        ,{id: 263, on: false}
        ,{id: 315, on: false}
        ,{id: 325, on: false}
        ,{id: 336, on: false}
        ,{id: 344, on: false}
        ,{id: 345, on: false}
        ,{id: 352, on: false}
        ,{id: 353, on: false}
        ,{id: 381, on: false}
        ,{id: 382, on: false}
        ,{id: 416, on: false}
        ,{id: 418, on: false}
        ,{id: 419, on: false}
        ,{id: 437, on: false}
        ,{id: 438, on: false}
        ,{id: 439, on: false}
        ,{id: 452, on: false}
        ,{id: 453, on: false}
        ,{id: 464, on: false}
        ,{id: 471, on: false}
        ,{id: 484, on: false}
        ,{id: 502, on: false}
        ,{id: 522, on: false}
        ,{id: 541, on: false}

    ])
    const [onCategory, setOnCategory] = useState([
        {id: 101, on: false}
        ,{id: 102, on: false}
        ,{id: 103, on: false}
        ,{id: 104, on: false}
        ,{id: 211, on: false}
        ,{id: 213, on: false}
        ,{id: 221, on: false}
        ,{id: 223, on: false}
        ,{id: 252, on: false}
        ,{id: 263, on: false}
        ,{id: 315, on: false}
        ,{id: 325, on: false}
        ,{id: 336, on: false}
        ,{id: 344, on: false}
        ,{id: 345, on: false}
        ,{id: 352, on: false}
        ,{id: 353, on: false}
        ,{id: 381, on: false}
        ,{id: 382, on: false}
        ,{id: 416, on: false}
        ,{id: 418, on: false}
        ,{id: 419, on: false}
        ,{id: 437, on: false}
        ,{id: 438, on: false}
        ,{id: 439, on: false}
        ,{id: 452, on: false}
        ,{id: 453, on: false}
        ,{id: 464, on: false}
        ,{id: 471, on: false}
        ,{id: 484, on: false}
        ,{id: 502, on: false}
        ,{id: 522, on: false}
        ,{id: 541, on: false}

    ])
    const categoryList = [
        [211, 213, 252, 315, 416, 418, 419, 502],//물리화학
        [221, 223, 325, 336, 352, 437, 438, 522],//유기화학
        [263],//분석화학
        [344, 345, 439, 452, 541],//무기화학
        [353, 381, 382, 484],//생화학
        [101, 102, 103, 104, 453, 464, 471],//기타
    ];
    
    // const updateArray = (myArray, oldValue, newValue) => {
    //   const index = myArray.indexOf(oldValue);
    //     if (index !== -1) {
    //       myArray[index] = newValue;
    //     }
    //   }
    const onChangeItemOn = (id, signal) => {
        let cnt = 0;
        setOn(    
            on.map(user => {

                if(user.id === id[cnt]) {
                    cnt++;
                    return ({ id: user.id, on: signal });
                } 
                return user;
            }
            )
        );       
    };
    const onChangeItemOnCategory = (id, signal) => {
        let cnt = 0;
        setOnCategory(    
            onCategory.map(user => {

                if(user.id === id[cnt]) {
                    cnt++;
                    return ({ id: user.id, on: signal });
                } 
                return ({ id: user.id, on: false });
            }
            )
        );       
    };
    const onMouse = (classId) => {
        onChangeItemOn(classId, true)
    };
    const offMouse = (classId) => {
        onChangeItemOn(classId, false)
    };

    const getPrerequisiteList = (classId) => {
        let result = [];
        prerequisiteList.forEach(function(el,idx) {
            if(el.id === classId) {
                result.push(el.prerequisite);
            }
        })
        return result;
    }

    const classListOnlyNum = classList.map(item => item.id);
    
    useEffect(() => {
        if(category ===0) {
            
            onChangeItemOnCategory(classListOnlyNum, false); 
        }
        else onChangeItemOnCategory(categoryList[category-1], true);

    }, [category])
    return (
            <div className="board">
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 100) && (item.id < (200)) && (item.semester === 1)) {
                            // console.log(find);
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 100) && (item.id < (200)) && (item.semester === 2)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 200) && (item.id < (300)) && (item.semester === 1)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 200) && (item.id < (300)) && (item.semester === 2)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 300) && (item.id < (400)) && (item.semester === 1)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 300) && (item.id < (400)) && (item.semester === 2)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 400) && (item.id < (500)) && (item.semester === 1)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 400) && (item.id < (500)) && (item.semester === 2)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 500) && (item.semester === 1)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="board-small">
                    {classList.map((item) => {
                        if ((item.id > 500) && (item.semester === 2)) {
                            return (
                                <Class key={item.id} classId={item.id} classInfo={item} onMouse={onMouse} offMouse={offMouse} on={on} onCategory={onCategory} preList={getPrerequisiteList(item.id)}/>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
    )
}

export default ClassList;