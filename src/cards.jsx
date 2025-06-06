import './card.css'
import Button from './button';

function Cards({img, title, bio, button}){

    return(

        <div className='card'>
            <div className='cardblock'>
                <img src={img}/>
                <h1 className="title">{title}</h1>
                <p className="bio">{bio}</p>
                {button}
            </div>
        </div>
    );
};

export default Cards;