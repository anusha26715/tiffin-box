import './Button.css'
const Filler = ({ text }) => {
    
    return (
        <button className="fo-btn f-btn" type="submit">
            <span className="fo-btn-text">
                <span className="fo-btn-text-main" style={{color: 'var(--black-color)'}}>{text}</span>
                <span className="fo-btn-text-hover" style={{color: 'var(--black-color)'}}>{text}</span>
            </span>
            <i className="bi bi-chevron-right"></i>
        </button>
    )
}

export default Filler;