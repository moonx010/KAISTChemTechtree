import './Class.css';

function Class({ classId, classInfo, onMouse, offMouse, on, onCategory, preList}) {
    if(classInfo.length === 0) return;
    const classtype = [
        'essential-normal',
        'choice-normal',
        'essential-exceptdouble',
        'choice-advanced',
    ];
    const find = on.findIndex((element, index, on) => element.id === classId);
    const findCategory = onCategory.findIndex((element, index, onCategory) => element.id === classId);
    const semester = ['S', 'F', 'S&F'];
    const curriculum = ['physic', 'organic', 'analysis', 'inorganic', 'bio', 'etc'];
    const classType = `class-type ${classtype[classInfo.classtype-1]}`;
    const box = (on[find].on === true || onCategory[findCategory].on === true) ? `class-box ${curriculum[classInfo.curriculum-1]}-on` : `class-box ${curriculum[classInfo.curriculum-1]}` ;
    const onList = [...preList, classId];
    return (
        <button className={box} onMouseOver={() => onMouse(onList)} onMouseLeave={() => offMouse(onList)}>
                <div className="class-box-top">
                    <div className="class-info">
                        <h3 className="class-num">CH{classInfo.id}</h3>
                        <div className={classType}></div>
                    </div>
                    <h3 className="class-semester">{semester[classInfo.semester-1]}</h3>
                </div>
                    
                <p className="class-name">{classInfo.name}</p>
                <p className="class-credit">{classInfo.credit}</p>
        </button>
    );
};

export default Class;