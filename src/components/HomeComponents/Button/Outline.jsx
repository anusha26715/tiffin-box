import './Button.css'
const Outline = ({text,color}) => {
    return (
        <button className="fo-btn o-btn" style={{border: `1.5px solid ${color}`, color: color}} type="submit">
            {text}
            <i className="bi bi-chevron-right" style={{color: color}}></i>
        </button>
    )
}

export default Outline;