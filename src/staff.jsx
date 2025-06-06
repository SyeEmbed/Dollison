import './staff.css'

function Staff({img, name, title}){

    return(
        <div className="staff-container">
            <img className='img' src={img}/>
            <p className="name">{name}</p>
            <p className="title">{title}</p>
        </div>
    );
};

export default Staff