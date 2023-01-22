import React, { useState } from 'react';

const Tabs = ({ tabsTitle, content1, content2, content3 }) => {

    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: tabsTitle[0],

            content: content1
        },
        {
            id: 2,
            tabTitle: tabsTitle[1],

            content: content2
        },
        {
            id: 3,
            tabTitle: tabsTitle[2],

            content: content3
        },

    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container rounded-2xl'>
            <div className='tabs flex-nowrap '>
                {tabs.map((tab, i) =>
                    <button className="w-full p-5 font-serif text-lg font-bold duration-500 ease-out cursor-pointer  hover:text-xl bg-slate-200 text-slate-500 hover:text-white hover:bg-slate-500 disabled:bg-gradient-to-r from-sky-500 to-indigo-500 disabled:text-white"
                        key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='p-6 text-lg content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;