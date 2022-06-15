// import React from 'react';
import './DiaryList.css'

const DiaryList = ({ state, setState }) => { 
    // return state.map((el, index) => <div key={index}>{el.title}</div>)
    return state.map((el, index) => 
    <div id="diarylist" key={index} style={{ boxShadow: `inset 1px 1px 30px ${el.color}45, inset -1px -1px 30px ${el.color}45`}}>
        <div id="diary-section-one">
            <span className="diary-edit">수정</span>
            <span className="diary-delete">삭제</span>
        </div>
        <div id="diary-section-two">
            <div className="diary-title">제목 {el.title}</div>
            <div className="diary-date-emoji">
                <div className="diary-date">월.일</div>
                <div className="diary-emoji">이모지</div>
            </div>
        </div>
        <div id="diary-section-three">
            <div className="diary-content">내용 {el.content}</div>
        </div>
    </div>
    )
}

export default DiaryList;