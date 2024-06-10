import './css/About.css';
export default function About(props) {
    return (
        <div>
            <div className="photo-text-box">
                <div className="photo-container">
                    <img src={props.imagePath} alt="Description" className="photo" />
                </div>
                <div className="text-container">
                    <h2>We are Esn <del>Helga</del> Haaga-Helia</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A numquam cum quod ad quibusdam? Nesciunt expedita dignissimos corrupti veritatis veniam, maiores adipisci, repudiandae cum fuga illum sit voluptas consectetur error.</p>
                </div>
            </div>

        </div>
    )
}