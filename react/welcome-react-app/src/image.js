import constructionImage from  './images/construction.jpg';
import beautifulImage from './images/beautiful.jpg';
import './image.css';

function image() {
 return (
    <div class="imageBlock">
        <div class="construction">
            <img src={constructionImage} />
            <h3>construction.jpg</h3>
            <p>This black-and-white image captures the intricate framework of a large industrial or architectural structure, possibly part of a radio telescope or a steel lattice tower.</p>
        </div>
        <div class="beautiful">
            <img src={beautifulImage} />
            <h3>beautiful.jpg</h3>
            <p>This image features a serene and visually striking scene of a single white hibiscus flower floating on a still, vibrant blue surface of water.</p>
        </div>
    </div>
 );
}

export default image;