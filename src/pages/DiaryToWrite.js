import React, {useRef} from 'react';
// import './DiaryToWrite.css'

function DiaryToWrite({state, setState}) {

    let title = useRef();
    let content = useRef();
    let color = useRef();

    const handleInput = (e) => {
        // console.log(e.target.value)
    }

    const diarySubmit = (e) => {
        //console.log(content.current.value)
        // if (title.current.value)
        setState([...state, {
            [title.current.name]: title.current.value,
            [content.current.name]: content.current.value,
            [color.current.name]: color.current.value
        }])
    }

    return (
        <div className="diaryToWrite">
            <div>
                <input 
                type="text" 
                className="title" 
                name="title" 
                // onChange={handleInput} 
                ref={title}
                />
            </div>
            <div>
                <textarea 
                className="content" 
                name="content"
                ref={content}></textarea>
            </div>
            <div>
                <input 
                className="color" 
                name="color" 
                type='color'
                ref={color}
                />
            </div>
            <button onClick={diarySubmit}>등록하기</button>
        </div>
    )
}

export default DiaryToWrite;