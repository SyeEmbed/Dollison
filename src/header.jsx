import './header.css'

function Header(){


    return(
        <div className='NavBar'>
            <img src='/logo.png'></img>

            <a className='links' href="">Our Services</a>
            <a className='links' href="">Meet Our Staff</a>
            <a className='links' href="">Testimonials</a>
            <a className='links' href="">Contact</a>
            
            <a href='tel:+1-740-439-9393'>Call Us!</a>
        </div>
    );
};

export default Header;