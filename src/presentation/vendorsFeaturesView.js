import {vendorTitleColor} from "../consts";

export const ShowFeaturesForVendors = ({width}) => {
    return (
        <div className="content__body__element">
            <div className="content__body__features">
                <div className="content__body__features__element1 element" style={{color: vendorTitleColor}}>
                    <div className="content__body__features__title title1">Digitalisiere deinen Shop</div>
                    <div className="content__body__features__detail block1">
                        Mache dein Geschäft für jeden zugänglich, indem du deinen Shop digitalisierst und dich
                        online repräsentierst.
                    </div>
                </div>

                <div className="content__body__features__element2 element" style={{color: vendorTitleColor}}>
                    <div className="content__body__features__title title2">Maximiere deine Reichweite</div>
                    <div className="content__body__features__detail block2">
                        Erreiche mehr Kunden und steigere deine Verkäufe, indem du die Reichweite deiner Angebote
                        maximierst.
                    </div>
                </div>

                <div className="content__body__features__element1 element" style={{color: vendorTitleColor}}>
                    <div className="content__body__features__title title1">Nutze Künstliche Intelligenz</div>
                    <div className="content__body__features__detail block1">
                        Nutze die Macht der KI, um deine Angebote optimal zu beschreiben und steigere so deine
                        Verkäufe!
                    </div>
                </div>

                <div className="content__body__features__element2 element" style={{color: vendorTitleColor}}>
                    <div className="content__body__features__title title2">Immer auf dem neuesten Stand</div>
                    <div className="content__body__features__detail block2">
                        Bleibe auf dem neuesten Stand und orientiere dich an der Konkurrenz und am Markt mit Hilfe
                        unserer App!
                    </div>
                </div>

            </div>
        </div>
    )
}