import './css/Block.css';

export default function Block({ title, description, price, photo, date }) {
    return (
        <div className="card">

            <div className="card-img" style={{ backgroundImage: `url(${photo})` }}></div>
            <div className="card-info">
                <p className="text-title">{title}</p>
                <p className="text-body">{description} | <strong>{date}</strong></p>
            </div>
            <div className="card-footer">
                <span className="text-title">{price}</span>
                <div className="card-button">
                    see more
                </div>
            </div></div>
    )
}