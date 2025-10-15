const CustomContent = ({ specialities,side }) => {

    return (
        <div className={`specialities-${side}`}>
            {specialities.map((item) => (
                <div key={item.id} className="mb-4 speciality-item">
                    <h5 className="sub-title">{item.title}</h5>
                    <p className="description">{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default CustomContent;