import './Button.css'
const Filler = ({ text }) => {
    
    return (
        <button className="fo-btn f-btn" type="submit">
            {text}
            <i className="bi bi-chevron-right"></i>
        </button>
    )
}

export default Filler;