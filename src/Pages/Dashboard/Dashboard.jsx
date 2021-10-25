import Container from "../../components/Container";
import Data from "../../Data";
import './Dashboard.scss'
import { Link } from 'react-router-dom';

let classNameAnswer = ''

function Dashboard() {
    const dash = localStorage.getItem('dashboard') ? JSON.parse(localStorage.getItem('dashboard')) : []
    
    function RenderQuestion() {
        return Data.map(e => {
            return (
                <li key={e.question} className='dash_question-item'>
                    <h3 className='dash_question-title' key={e.question}>{e.question}</h3>
                    {e.aswer.map(aswer => {
                        const foundAnswer = dash.find(e => e.id === aswer.id)
                        console.log(foundAnswer);
                        if (foundAnswer && foundAnswer.isTrue) {
                            classNameAnswer = "trueAnswer"
                        } else if (foundAnswer && !foundAnswer.isTrue) {
                            classNameAnswer = 'falseAnswer'
                        } else if (foundAnswer === undefined) {
                            classNameAnswer = ''
                        }

                        return (
                            <p
                                key={aswer.id}
                                className={`${classNameAnswer} dash_answer`}
                            >
                                {aswer.aswerText}
                            </p>
                        )
                    })}
                </li>
            )
        })
    }

    return (
        <div className="dashboard">
            <Container>
                <ol className='dash_question-list'>
                    <RenderQuestion />
                    <Link className='go-home-link answer-btn dash_go-home-link' to='/'>Go Home</Link>
                </ol>
            </Container>
        </div>
    )
}

export default Dashboard;