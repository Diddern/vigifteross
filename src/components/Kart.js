import React from "react";

const Kart = () => {
    return (
        <div className="kart-container">
            <div className="kart-content">
                <h3>Fortsatt usikker på veien? Her er et kart</h3>

                <iframe
                    title="Kart mellom Asker kirke og Verkstedet på NaKuHel"
                    src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d9598.106340690734!2d10.422532355558387!3d59.852210183149346!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x464114381b2822e1%3A0xc45e32d9b0d1955c!2sNakuhel%20Asker%20senter%20for%20natur%20kultur%20og%20helse%2C%20Semsveien%20168%2C%201384%20Asker!3m2!1d59.8563407!2d10.434374799999999!4m5!1s0x464115985678908d%3A0x58e542d53994783d!2sAsker%20kirke%2C%20Kirkelia%207%2C%201383%20Asker!3m2!1d59.8433146!2d10.436964399999999!5e0!3m2!1sno!2sno!4v1713025082786!5m2!1sno!2sno"
                    style={{border: 0, width: '90vw', height: '80vw', maxWidth: '1000px', maxHeight: '800px'}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default Kart;