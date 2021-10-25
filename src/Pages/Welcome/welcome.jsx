import Container from '../../components/Container';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className='welcome'>
            <Container>
                <div className="conclution">
                    <h1 className='question-title'>Welcome to Quiz</h1>
                    <Link className='go-home-link answer-btn' to='/home'>Get Start</Link>
                </div>
            </Container>
        </div>
    )
}

export default Welcome;