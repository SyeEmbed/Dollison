import './header.css'
import Nav from './nav';
import Logo from './logo';

function Header(){


    return(
        <header className='main-header'>
            <a href='#Opener'><Logo/></a>
            <Nav/>
        </header>
    );
};

export default Header;