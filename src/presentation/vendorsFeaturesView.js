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


// function ShowExtraFeaturesForVendor() {
//     return <div className="content__body__element feature-wrap icons" style={{
//         backgroundColor: "#fff",
//         color: 'white',
//         backgroundSize: 'cover',
//         fontWeight: 'bold',
//         display: 'flex',
//         flexDirection: "column",
//         justifyContent: 'stretch',
//         width: '100vw',
//     }}>
//         <div className="feature-content icons" style={{
//             background: '#FFF',
//             flexDirection: 'column',
//             fontWeight: 'bold',
//             minHeight: '60vh',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingLeft: 13,
//             paddingRight: 13,
//             paddingTop: 100,
//             width: '100wv',
//         }}>
//             <div className="content__body__features__title title1">Stärken Sie den regionalen Handel</div>
//             <center>
//
//                 <font
//                     style={{
//                         fontWeight: 'bold',
//                         color: vendorTitleColor,
//                         fontSize: "62px"
//                     }}>
//                     Vorteile für dein Geschäft</font>
//             </center>
//             <div className="content__body__features__title title1">Vorteile für dein Geschäft</div>
//             <font color={vendorTitleColor}>
//                 <p className="paragraph">Als Unternehmer bist du stolz auf dein Geschäft und
//                     arbeitest hart daran, es erfolgreich zu machen. Aber es kann eine
//                     Herausforderung sein, deine Sichtbarkeit zu erhöhen und neue Kunden zu
//                     gewinnen. Das ist, wo die Loremio-App ins Spiel kommt - wir helfen dir,
//                     dein Geschäft zu fördern und deine Träume zu verwirklichen!
//                     <br/><br/>
//                     Mit unserer App kannst du ganz einfach Angebote erstellen und wir zeigen
//                     sie unseren Nutzern in deiner Umgebung an. Du kannst dich darauf
//                     verlassen, dass deine Werbetexte immer professionell und angepasst sind,
//                     dank unserer neuesten KI-Technologie. Und das Beste ist, dass wir
//                     sicherstellen, dass deine treue Stammkundschaft immer auf dem Laufenden
//                     bleibt, indem wir sie über deine neuen Angebote und Aktionen per
//                     Push-Nachricht informieren.
//                     <br/><br/>
//                     Wir wissen, dass jeder Kleinunternehmer einzigartig ist und wir möchten
//                     dir helfen, deine Individualität hervorzuheben und deine Träume zu
//                     verwirklichen. Melde dich noch heute bei uns an und entdecke, wie wir
//                     dir helfen können, deine Reichweite zu vergrößern und deine
//                     Kundenbindung zu verbessern.
//                 </p></font>
//             <center>
//                 <font
//                     style={{
//                         fontWeight: 'bold',
//                         color: vendorTitleColor,
//                         fontSize: "62px"
//                     }}>Ihre Vorteile</font>
//             </center>
//             <div className="feature-wrap icons" style={{
//                 color: vendorTitleColor,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'bottom',
//                 fontWeight: 'bold',
//                 minHeight: '60vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 width: '100vw',
//             }}>
//                 <div className="feature-content icons">
//                     <h4 className="black-text"
//                         style={{color: vendorTitleColor}}>Kundenbeziehung</h4>
//                     <p className="paragraph">Deine Angebote erreichen innerhalb Sekunden
//                         nicht
//                         nur
//                         deine
//                         Stammkundschaft und all jene, die deinem Unternehmen folgen, sie
//                         sind
//                         auch
//                         sichtbar
//                         für jeden Loremio-Nutzer im Umkreis von 100km.</p>
//                 </div>
//                 <div className="feature-content icons">
//
//                     <h4 className="black-text" style={{color: vendorTitleColor}}>Absatz-
//                         und Werbekanal</h4>
//                     <p className="paragraph">Du erhältst einen exklusiven Werbekanal -
//                         die
//                         Taschen
//                         deiner
//                         Stammkundschaft! Nutze ki um deine Produkte kostenlos zu
//                         beschreiben und
//                         wir stellen sicher, dass deine Angebote auch wirklich die
//                         Kunden erreichen, die sie sehen möchten.</p>
//                 </div>
//                 <div className="feature-content icons">
//
//                     <h4 className="black-text"
//                         style={{color: vendorTitleColor}}>Digitalisierung</h4>
//                     <p className="paragraph">Dir wird nicht nur für dein Unternehmen eine
//                         digitale Präsenz geboten, sondern auch für deine Aktionen und
//                         Angebote. Die Informationen sind nicht nur über die mobile
//                         Applikation aufrufbar, sondern auch übers Web.</p>
//                 </div>
//             </div>
//         </div>
//     </div>;
// }