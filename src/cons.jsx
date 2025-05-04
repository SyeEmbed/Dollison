import './cons.css';
import Button from './button.jsx'

function Cons(){

    return(
        
        <div className='condition-container'>
            <div className='conditions'>
                <h1>Conditions Treated</h1>
                <p>
                    We pride ourselves on providing the best 
                    care possible for our patients, and our entire 
                    team is dedicated to helping you get back to a pain 
                    free life. We understand how frustrating pain can be, 
                    and we are here to help.
                </p>

                <ul>
                    <li>Headaches</li>
                    <li>Lower Back / Neck Pain</li>
                    <li>Spinal Decompression</li>
                    <li>Degenerative & Herniated Discs</li>
                    <li>Shoulder & Knee Pain</li>
                    <li>Capal Tunnel Syndrome</li>
                    <li>Auto Accident Injuries</li>
                    <li>Sports Injuries</li>
                </ul>

                <p className='insurance'>
                    Most insurance plans accepted, including Medicare.
                </p>
                <Button text="Setup Appointment" onClick={() => alert('Button clicked!')} />
            </div>
        </div>
    );
};

export default Cons;