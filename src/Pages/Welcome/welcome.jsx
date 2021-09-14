import './welcome.scss';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className='welcome'>
            <div className="container">
                <div className="question-wrapper">
                    <div className="conclution">
                        <h1 className='question-title'>Welcome to Quiz</h1>
                        <Link className='go-home-link answer-btn' to='/home'>Get Start</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;