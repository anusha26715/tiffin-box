import './Button.css'
const Outline = ({text,color}) => {
    
    let orderAnimation = (text === 'Order Now')? 'order-animation' : '';
    color = (typeof color === 'string') ? {color: color,backgroundColor: 'transparent'} : color;
    return (
        <button className={`fo-btn o-btn ${orderAnimation}`} style={{border: `1.5px solid ${color.color}`, color: color.color, backgroundColor: color.backgroundColor}} type="submit">
            <span className="fo-btn-text">
                <span className="fo-btn-text-main">{text}</span>
                <span className="fo-btn-text-hover">{text}</span>
            </span>
            <i className="bi bi-chevron-right" style={{color: color.color}}></i>
        </button>
    )
}

export default Outline;