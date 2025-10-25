import './Button.css'
const Outline = ({text,color}) => {
    color = (typeof color === 'string') ? {color: color,backgroundColor: 'transparent'} : color;
    console.log(color.color)
    return (
        <button className="fo-btn o-btn" style={{border: `1.5px solid ${color.color}`, color: color.color, backgroundColor: color.backgroundColor}} type="submit">
            <span className="fo-btn-text">
                <span className="fo-btn-text-main">{text}</span>
                <span className="fo-btn-text-hover">{text}</span>
            </span>
            <i className="bi bi-chevron-right" style={{color: color.color}}></i>
        </button>
    )
}

export default Outline;