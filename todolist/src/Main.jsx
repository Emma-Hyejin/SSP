import React from 'react';
import './Main.css';
import './App.css';
import './Component/Contents.css';
import Footer from './Footer';
import Sidebar from './Side/Sidebar';
import Contents from './Component/Contents';

const Main = () => {
    return (
        <div className="main__container">
            <div className="main__left">
                <div className="main__content">
                    <div className="content__title">
                        <h3>Today List</h3>
                        <div className="content__under">
                            <div className="under__date"> 2023 / 03 / 29</div>
                            <div className="under__btn">
                                <button className="show__sendList_popup">+ New Task</button>
                            </div>
                        </div>
                    </div>
                    <div className="content__lists">
                        <Contents/>
                    </div>
                </div>
                <Footer/>
            </div>
            <div className="main__right">
                <Sidebar/>
            </div>
        </div>
    )
}

export default Main;