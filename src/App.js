import {Avatar, Button, Layout, Menu, Space} from 'antd';
import './App.css';
import '../src/style/custom-antd.css';
import {useEffect, useState} from 'react';
import {getPush} from './data/vendor';
import PWReset from './PWReset';
import logo from './assets/loremio.png';
import {Offer} from "./presentation/offerView";
import {ShowFeaturesForInvestors} from "./presentation/investoresFeautesView";
import {ShowFeaturesForVendors} from "./presentation/vendorsFeaturesView";
import {ShowFeatures} from "./presentation/userFeatureView";
import {VendorHeader} from "./presentation/vendorHeaderView";
import {UserHeader} from "./presentation/userHeaderView";
import {HolDieApp} from "./presentation/getTheAppView";
import {vendorBgColor} from "./consts";
import YouTube from "react-youtube";

const {Header, Content, Footer} = Layout

function App() {

    const [tab, setTab] = useState('1')
    const [offerResponse, setOfferResponse] = useState()
    const [showOffer, setShowOffer] = useState(!!offerResponse)
    const [showPWReset, setShowPWReset] = useState()
    const [width, setWidth] = useState(window.innerWidth);


    const videoOptions = {
        height: `${width / 1.64}`,
        width: `${width * 0.95}`,
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute: 0,
            loop: 1
        }
    };

    // vendor values
    const navigate = (e) => {
        console.log(e.key);
        setTab(e.key)
    }

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        console.log(`window.location.href - window.location.href - `, window.location.href)
        if (window.location.href.indexOf('/unternehmer') !== -1) {
            setTab('2');
            navigate({key: '2'});
        } else {
            setTab('1')
            navigate({key: '1'})
        }
        const offer = window.location.href.indexOf('offer=') !== -1 ? window.location.href.substring(window.location.href.indexOf('offer=') + 6) : -1;
        if (offer !== -1) {
            getPush(offer).then(data => {
                console.log(data);
                setOfferResponse(data)
                setShowOffer(true)
            })
        }
        const email = window.location.href.indexOf('/auth/reset/') !== -1 ?
            window.location.href.substring(
                window.location.href.indexOf("/auth/reset/") + 12,
                window.location.href.lastIndexOf("/?mode=resetPassword&oobCode=")
            ) : -1;
        const oobCode = window.location.href.substring(window.location.href.indexOf("oobCode=") + 8)
        if (email !== -1) {
            setShowPWReset({email, oobCode})
        }
    }, [])


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
    console.log(`tab - tab - `, tab)
    return (
        <>

            {offerResponse && showOffer &&
            <Offer offerResponse={offerResponse} setShowOffer={setShowOffer}/>
            }

            <Layout className="layout">
                <Header className="layout__header">
                    <div className="layout__header__logo">
                        <img className="layout__header__logo__text" src={logo} alt="logo"/>
                    </div>

                    {!showPWReset &&
                    <Menu mode="horizontal" defaultSelectedKeys={[tab]} onClick={navigate}>
                        <Menu.Item key='1'>Benutzer</Menu.Item>
                        <Menu.Item key='2'>Unternehmer</Menu.Item>
                        <Menu.Item key='3'>Unterstützer</Menu.Item>
                    </Menu>}
                </Header>

                <Content>
                    <div className="content__body" style={{backgroundColor: tab === "2" ? vendorBgColor : "#fff"}}>
                        <Space direction='vertical' size={width < 1340 ? 180 : 320}>
                            {!showPWReset && tab === '1' &&
                            <>
                                <div>
                                    <UserHeader width={width}/>
                                </div>
                                <div>
                                    <ShowFeatures width={width}/>
                                </div>
                                <div>
                                    <img style={{width: '100%'}} src="src3.png" alt="logo"/>
                                </div>
                                <div>
                                    <HolDieApp width={width}/>
                                </div>
                            </>
                            }

                            {!showPWReset && tab === '2' &&
                            <>
                                <div>
                                    <YouTube videoId="d0Mz5caxmk0" opts={videoOptions} width="1000" height="1000" />
                                </div>
                                <div>
                                    <VendorHeader width={width}/>
                                </div>
                                {/*{ShowExtraFeaturesForVendor()}*/}

                                <div>
                                    <ShowFeaturesForVendors width={width}/>
                                </div>
                            </>
                            }

                            {!showPWReset && tab === '3' &&
                            <>
                                <div className="feature-wrap icons" style={{
                                    background: 'linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(progress.jpg) no-repeat',
                                    color: 'white',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    fontWeight: 'bold',
                                    minHeight: '60vh',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100vw',
                                }}>
                                    <div className="subHeader">Warum <div style={{color: '#ffad4e'}}>Loremio</div>?
                                    </div>
                                </div>
                                <div>
                                    <ShowFeaturesForInvestors width={width}/>
                                </div>
                            </>
                            }


                            {showPWReset && <PWReset data={showPWReset}/>}

                        </Space>
                    </div>

                </Content>


                <Footer>Loremio (UG Haftungsbeschränkt) © 2023</Footer>
            </Layout>

        </>
    );
}

export default App;
