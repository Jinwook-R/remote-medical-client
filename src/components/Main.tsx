import React, {useState} from 'react';

export default function Main() {

    const data = [{
        name:'이진욱',
        age:'29',
        symptom:'감기',
        date:'20210906'
    }];

    return (
        <>
            <div className='mainWrapper'>
                <header className='mainHeader'>
                    <h1 className='mainHeaderTitle'>이진욱 원장님 안녕하세요!</h1>
                    <p className='mainHeaderMeta'>2021년 9월 4일 진료내역입니다</p>
                </header>
                <section className='mainHeaderContents'>
                    <ol className='timieline'>
                        <li>
                            <section className="parts">
                                <p className='partsTimes'>
                                    <span>10:00</span> ~ <span>10:30</span>
                                </p>
                                <div className='partsContents'></div>
                            </section>

                        </li>
                    </ol>
                </section>
            </div>
        </>
    );

}