import './day3.css';
import { useState } from 'react';


const Day3 = () => {

    const [step, setStep] = useState(1);

    const handleStep = (option: string) => {
        if (option === 'next') {
            if (step < 4) {
                setStep(step + 1)
            }
        } else {
            if (step > 1) {
                setStep(step - 1)
            }
        }
    }


    return (
        <div className='main'>
            <div>

                <div className='steps'>
                    <div className='step step-active'>
                        <span>1</span>
                    </div>
                    <div className={`progress ${step > 1 ? 'progress-active' : ''} `}></div>
                    <div className={`step ${step > 1 ? 'step-active' : ''}`}>
                        <span>2</span>
                    </div>
                    <div className={`progress ${step > 2 ? 'progress-active' : ''}`}></div>
                    <div className={`step ${step > 2 ? 'step-active' : ''}`}>
                        <span>3</span>
                    </div>
                    <div className={`progress ${step > 3 ? 'progress-active' : ''}`}></div>
                    <div className={`step ${step > 3 ? 'step-active' : ''}`}>
                        <span>4</span>
                    </div>

                </div>
                <div className='button-container'>
                    <button className='button ' disabled={step === 1} onClick={() => handleStep('prev')}>Prev</button>
                    <button className='button ' disabled={step === 4} onClick={() => handleStep('next')}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Day3;
