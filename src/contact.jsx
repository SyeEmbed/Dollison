import './contact.css'
import Button from './button';

function Contact(){

    return( 
        <div className="contact-container">

            <h1> Contact Us</h1>
            <p>
                Our knowledgeable and friendly staff 
                is devoted to providing you with the best 
                care imaginable. We are trained in cutting 
                edge treatments designed to rid you of your 
                pain and treat your injured area appropriately. 
                If you are suffering from pain, Dollison Chiropractic 
                is here for you.
            </p>

            <h2>We are located at:</h2>

            <div className="map">
                <iframe style={{width:"75%", height:"400px",frameBorder:"0", marginHeight:"0", marginWidth:"0", scrolling:"no", border:"0"}}
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20500%20S%209th%20St,%20Cambridge,%20OH%2043725+(Dollison%20Chiropractic)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a 
                            href="https://www.gps.ie/collections/personal-trackers/">
                            Elderly trackers
                        </a>
                </iframe>
            </div>

        </div>
    );
};

export default Contact;