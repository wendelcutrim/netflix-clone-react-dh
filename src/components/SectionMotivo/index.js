import "./style.css";



const SectionMotivo = ({title, description, image, altImage,  alterna}) => {
    const zoomIn = (event) =>{
        const { target: img } = event;
        img.style = "transform: scale(1.1); cursor: pointer; transition: 1s all;"
    }

    const zoomOut = (event) => {
        const {target: img} = event;
        img.style = "transform: scale(1); transition: 1s all;"
    }

    return(
        <section className={`motivos ${alterna && "alterna"}`}>
            <div>
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
                </div>
                <div>
                <img src={image} alt={altImage} onMouseOver={zoomIn} onMouseOut={zoomOut}/>
            </div>
      </section>
    );
}

export default SectionMotivo;