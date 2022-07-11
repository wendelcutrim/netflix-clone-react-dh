import "./style.css";

const SectionMotivo = ({title, description, image, altImage,  alterna}) => {
    return(
        <section className={`motivos ${alterna && "alterna"}`}>
            <div>
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
                </div>
                <div>
                <img src={image} alt={altImage} />
            </div>
      </section>
    );
}

export default SectionMotivo;