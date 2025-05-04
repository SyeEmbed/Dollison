import Quotes from "./quotes";
import Button from "./button";
import './tests.css'

function Tests(){

    return(

        <div className="test-container">

            <h1>Testimonials</h1>
            <p>
                Our mission is to alleviate your pain and 
                get you back to living a pain free lifestyle. 
                We treat patients suffering from a wide variety of 
                ailments such as auto accident injuries, post- operative therapy, 
                lower back pain, neck pain, disc problems,  carpal tunnel syndrome, 
                joint pain, and circulation problems most commonly associated with 
                peripheral neuropathy.
            </p>

            <Quotes/>

            <Button text="Setup Appointment" onClick={() => alert('Button clicked!')} />

        </div>
    );
};

export default Tests;