import React from "react";

const PraktiskInfo = () => {
    return (
        <div className="praktiskinfo-container">
            <div className="praktiskinfo-content">
                <h2> Praktisk info</h2>
                <div className="praktiskinfo-text">
                    <p>
                        Vielsen finner sted i Asker kirke, ca. 20 minutter å gå fra Asker stasjon og 3 minutter med
                        bil.<br/>
                        Etter vielsen er det mottakelse på Verkstedet ved NaKuHel, en halvtimes spasertur fra Asker
                        kirke
                        eller 6 minutter med bil.<br/>
                        Mottakelsen starter fra kl. 13:30 og det vil bli servert bobler, fingermat og en overraskelse
                        til
                        gjestene. Vi setter oss til bords kl. 17:00.
                    </p>
                    <div className="extra-space"></div>
                    <p><b>Taler:</b><br/>
                        Ønsker du å holde tale eller et annet innslag?<br/> Ta kontakt med toastmaster Henrik
                        Sivertsgård på tlf: <a href="tel:04799528979">995 28 979</a>.
                    </p>

                    <h3>Fortsatt usikker på veien? Her er et kart</h3>

                    <iframe
                        title="Kart mellom Asker kirke og Verkstedet på NaKuHel"
                        src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d9598.106340690734!2d10.422532355558387!3d59.852210183149346!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x464114381b2822e1%3A0xc45e32d9b0d1955c!2sNakuhel%20Asker%20senter%20for%20natur%20kultur%20og%20helse%2C%20Semsveien%20168%2C%201384%20Asker!3m2!1d59.8563407!2d10.434374799999999!4m5!1s0x464115985678908d%3A0x58e542d53994783d!2sAsker%20kirke%2C%20Kirkelia%207%2C%201383%20Asker!3m2!1d59.8433146!2d10.436964399999999!5e0!3m2!1sno!2sno!4v1713025082786!5m2!1sno!2sno"
                        width="900"
                        height="850"
                        style={{border: 0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>

    )
};
export default PraktiskInfo;