import Staff from "./staff";
import './meet.css'
import Button from "./button";

function Meet(){

    return(
        <div className="meet-container">

            <h1>Meet our staff</h1>
            <p>
            Since 2010, Dollison Chriopractic and has been dedicated to helping Guernsey County residents 
            suffering from chronic and localized pain through non-invasive measures. 
            We have state of the art equipment such as DRS-Spina for lumbar decompression 
            therapy, ML-830 cold laser for carpal tunnel syndrome, and Anodyne Therapy for 
            peripheral neuropathy treatment.
            </p>

            <Staff 
                img="pt.png"
                name="Dr. Dollison"
                title="Founder/Chiropractor"
            />

            <Staff 
                img="pt.png"
                name="Dr. Dollison"
                title="Founder/Chiropractor"
            />

            <Staff 
                img="pt.png"
                name="Dr. Dollison"
                title="Founder/Chiropractor"
            />

            <Staff 
                img="pt.png"
                name="Dr. Dollison"
                title="Founder/Chiropractor"
            />

            
            <hr/>

            <p>Most insurance plans accepted, including Medicare.</p>

            <Button text="Setup Appointment" onClick={() => alert('Button clicked!')} />


        </div>
    );
};

export default Meet;