import React from 'react';
import '../../../scss/components/Home.scss';

function Home() {
    return (
        <>

            <div className="home-container">
                <div className="home-background"></div>
                <div className="home-box">
                    <p>Zacznij pomagać!</p>
                    <p> Oddaj niechciane rzeczy w zaufane ręce</p>
                    <buttton>Oddaj rzeczy</buttton>
                    <button>Zorganizuj zbiórkę</button>
                </div>
            </div>
        </>
    )
}

export default Home
