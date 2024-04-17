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
                </div>
            </div>
        </div>

    )
};
export default PraktiskInfo;