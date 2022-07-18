import "./style.css";

export default function Movie({poster, title, date, votes}){
    return (
        <div className="movie">
            <img src={poster} alt="" />
            <h5>{title}</h5>
            <div className="specs">
                <p>{date}</p>
                <p>{votes}</p>
            </div>
        </div>
    );
}