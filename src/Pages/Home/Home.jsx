import './Home.scss';
import Data from '../../Data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [questionPage, setQuestionPage] = useState(0)
    const [complate, setComplate] = useState(false)
    const [result, setResult] = useState(true)
    const [trueAnswer, setTrueAnswer] = useState(0)

    function nextQuestion(isTrue) {
        if (isTrue === true) {
            setTrueAnswer(trueAnswer+1)
        }
        if (questionPage+1 < Data.length) {
            setQuestionPage(questionPage+1)
        } else {
            setComplate(true)
        }
    }

    function goBack() {
        localStorage.setItem('result', JSON.stringify(trueAnswer))
        console.log(localStorage.getItem('result'))
        setResult(false)
    }

    return (
        <div>
            {complate ? 
            <div className='container'>
                <div className="question-wrapper">
                    <div className='conclution'>
                        <div className="conclution-wrapper">
                            <h2 className='question-title'>True Answers</h2>
                            <h2 className='conclution__true-answer question-title'>{trueAnswer}</h2>
                        </div>
                        <h3>History {result ? localStorage.getItem('result') : null}</h3>
                        <Link onClick={goBack} className='go-home-link answer-btn' to='/'>Go Home</Link>
                    </div>     
                </div>
            </div> :
                <div className='container'>
                    <div className='question-wrapper'>
                        <div className='questionPage'>
                            <h2>{questionPage+1}</h2><p>/5</p>
                        </div>
                        <div className="question-content">
                            <h3 className='question-title'>{Data[questionPage].question}</h3>
                            <div className='answers-wrapper'>
                                {Data[questionPage].aswer.map(e => {
                                    return (
                                            <button className='answer-btn' onClick={() => nextQuestion(e.isTrue)} key={e.aswerText}>{e.aswerText}</button>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;