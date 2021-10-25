import './Container.scss'

function Container({ children }) {
    return (
        <div className="container">
            <div className="question-wrapper">
                { children }
            </div>
        </div>
    )
}

export default Container;