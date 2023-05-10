import {Avatar, Button, Layout, Menu, Space} from 'antd';
import './App.css';
import '../src/style/custom-antd.css';
import {useEffect, useState} from 'react';
import {getPush} from './data/vendor';
import PWReset from './PWReset';
import logo from './assets/loremio.png';
import ReactPlayer from 'react-player';

const {Header, Content, Footer} = Layout

function App() {

    const [tab, setTab] = useState('-1')
    const [offerResponse, setOfferResponse] = useState()
    const [showOffer, setShowOffer] = useState(!!offerResponse)
    const [showPWReset, setShowPWReset] = useState()
    const [width, setWidth] = useState(window.innerWidth);

    const heroTitle = "Gemeinsam für die Region.  Die neusten Angebote aus deiner Umgebung.";
    const heroCaption = "Lasst uns nicht nur die Innenstädte, sondern auch die kleineren Regionen wieder zu belebten Orten machen! " +
        "Wir verbinden dich mit deinem Lieblingsitaliener oder Friseur. Verpasse nie wieder eine Aktion oder ein neues Angebot.";
    const playstoreLink = "https://play.google.com/store/apps/details?id=de.loremio.loremio"
    const appleLink = "https://apps.apple.com/de/app/loremio/id1633791030"

    // vendor values
    const vendorHeroTitle = "Vermarkten Sie Ihr Geschäft effektiv mit unserer innovativen Plattform."
    const vendorHeroShortDescription = "Verwirklichen Sie Ihre Geschäftsträume mit der Loremio-App. Erstellen Sie Angebote und erreichen Sie neue Kunden in Ihrer Umgebung. Nutzen Sie unsere neueste KI-Technologie für professionelle Werbetexte und halten Sie Ihre Stammkundschaft auf dem Laufenden"
    const vendorBgColor = "#ffad4e"
    const vendorTitleColor = '#333333'

    const navigate = (e) => {
        console.log(e.key);
        setTab(e.key)
    }

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    const showInMapClicked = (lat, lng) => {
        window.open("https://maps.google.com?q=" + lat + "," + lng);
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
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
                window.location.href.indexOf("/auth/reset/") + 15,
                window.location.href.lastIndexOf("/?mode=resetPassword&oobCode=")
            ) : -1;
        const oobCode = window.location.href.substring(window.location.href.indexOf("oobCode=") + 8)
        if (email !== -1) {
            setShowPWReset({email, oobCode})
        }
    }, [])

    const HolDieApp = () => {
        return (
            <div className="content__body__element">
                <div className="content__body__bomber">
                    {width < 1024 && (
                        <>
                            <div>Lade <img style={{height: '55px', paddingBottom: '5px'}} src={logo}
                                           alt="logo"/> auf Android oder iOS runter.
                            </div>

                            <div className="links-container" style={{marginTop: '30px'}}>
                                <a href={playstoreLink}>
                                    <img className="content__body__download__play" src="play.png" alt="google"
                                         style={{width: '200px', marginRight: '10px'}}/>
                                </a>
                                <a href={appleLink}>
                                    <img className="content__body__download__apple" src="app.png" alt="apple"
                                         style={{width: '200px'}}/>
                                </a>
                            </div>
                        </>
                    )}
                    {width > 1023 && (
                        <>
                            <div style={{maxWidth: '900px'}}>Lade <img style={{height: '65px', paddingBottom: '10px'}}
                                                                       src={logo} alt="logo"/> auf Android oder
                                iOS runter.
                                <div className="links-container" style={{marginTop: '30px'}}>
                                    <a href={playstoreLink}>
                                        <img className="content__body__download__play" src="play.png" alt="google"
                                             style={{width: '245px', marginRight: '10px'}}/>
                                    </a>
                                    <a href={appleLink}>
                                        <img className="content__body__download__apple" src="app.png" alt="apple"
                                             style={{width: '245px'}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="content__body__graphic">
                                <img className="content__body__graphic__screenshot" src="src2.png" alt="screenshot"/>
                            </div>
                        </>
                    )}
                </div>
            </div>

        );
    }

    const UserHeader = () => {
        return (
            <div className="content__body__element">
                <div className="content__body__bomber">
                    {width < 1024 && (
                        <>
                            <div><font style={{fontWeight: 'bold', color: '#ffad4e'}}>{heroTitle}</font></div>
                            <div className="content__body__bomber__additional-text">
                                {heroCaption}
                            </div>
                            <div className="content__body__graphic">
                                <img className="content__body__graphic__screenshot" src="src1.png" alt="screenshot"/>
                            </div>
                            <div className="links-container" style={{marginTop: '30px'}}>
                                <a href={playstoreLink}>
                                    <img className="content__body__download__play" src="play.png" alt="google"
                                         style={{width: '200px', marginRight: '10px'}}/>
                                </a>
                                <a href={appleLink}>
                                    <img className="content__body__download__apple" src="app.png" alt="apple"
                                         style={{width: '200px'}}/>
                                </a>
                            </div>
                        </>
                    )}
                    {width > 1023 && (
                        <>
                            <div style={{marginRight: '25px'}}><font
                                style={{fontWeight: 'bold', color: '#ffad4e'}}>{heroTitle}</font>
                                <div className="content__body__bomber__additional-text">
                                    {heroCaption}
                                </div>
                                <div className="links-container" style={{marginTop: '30px'}}>
                                    <a href={playstoreLink}>
                                        <img className="content__body__download__play" src="play.png" alt="google"
                                             style={{width: '245px', marginRight: '10px'}}/>
                                    </a>
                                    <a href={appleLink}>
                                        <img className="content__body__download__apple" src="app.png" alt="apple"
                                             style={{width: '245px'}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="content__body__graphic">
                                <img className="content__body__graphic__screenshot" src="src1.png" alt="screenshot"/>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }

    const VendorHeader = () => {
        let isSmallDevice = width < 1024;

        return (
            <div className="content__body__element">
                <div className="content__body__bomber">
                    {isSmallDevice && (
                        <>
                            <div><font style={{fontWeight: 'bold', color: vendorTitleColor}}>{vendorHeroTitle}</font>
                            </div>
                            <div className="content__body__bomber__additional-text">
                                {vendorHeroShortDescription}
                            </div>
                            <div className="content__body__graphic">
                                <img className="content__body__graphic__screenshot" src="src1.png" alt="screenshot"/>
                            </div>
                            <div className="links-container" style={{marginTop: '30px'}}>
                                <a href={playstoreLink}>
                                    <img className="content__body__download__play" src="play.png" alt="google"
                                         style={{width: '200px', marginRight: '10px'}}/>
                                </a>
                                <a href={appleLink}>
                                    <img className="content__body__download__apple" src="app.png" alt="apple"
                                         style={{width: '200px'}}/>
                                </a>
                            </div>
                        </>
                    )}
                    {width > 1023 && (
                        <>
                            <div style={{marginRight: '25px'}}><font
                                style={{fontWeight: 'bold', color: vendorTitleColor}}>{vendorHeroTitle}</font>
                                <div className="content__body__bomber__additional-text">
                                    <font style={{color: vendorTitleColor}}>{vendorHeroShortDescription}</font>
                                </div>
                                <div className="links-container" style={{marginTop: '30px'}}>
                                    <a href={playstoreLink}>
                                        <img className="content__body__download__play" src="play.png" alt="google"
                                             style={{width: '245px', marginRight: '10px'}}/>
                                    </a>
                                    <a href={appleLink}>
                                        <img className="content__body__download__apple" src="app.png" alt="apple"
                                             style={{width: '245px'}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="content__body__graphic">
                                <img className="content__body__graphic__screenshot" src="src1.png" alt="screenshot"/>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }

    const ShowFeatures = () => {
        return (
            <div className="content__body__element">
                <div className="content__body__features">
                    <div className="content__body__features__element1 element">
                        <div className="content__body__features__title title1">Entdecke Angebote in deiner Umgebung
                        </div>
                        <div className="content__body__features__detail block1">
                            Finde Händler mit aktuellen Angeboten in deiner Nähe! Nutze dabei die Filteraktion, um die
                            Suche auf deinen Bedarf anzupassen.
                        </div>
                    </div>

                    <div className="content__body__features__element2 element">
                        <div className="content__body__features__title title2">Neue Läden kennenlernen</div>
                        <div className="content__body__features__detail block2">
                            Finde heraus wer in deiner Nähe alles an Loremio teilnimmt und nehme an ihren
                            Angebotsaktionen teil.
                        </div>
                    </div>

                    <div className="content__body__features__element1 element">
                        <div className="content__body__features__title title1">Folge den Lieblingsläden</div>
                        <div className="content__body__features__detail block1">
                            Ob dein Friseur, dein Buchladen oder dein Lieblingsrestaurant - Koppel dich mit ihnen und
                            erhalte eine Benachrichtigung sobald sie eine neue Aktion am start haben.
                        </div>
                    </div>

                    <div className="content__body__features__element2 element">
                        <div className="content__body__features__title title2">Keine Anmeldung nötig</div>
                        <div className="content__body__features__detail block2">
                            Du kannst dir zwar bei Loremio ein Konto erstellen, doch zum nutzen der App samt seinen
                            gesamten Funktionalitäten ist dies nicht zwingend nötig.
                        </div>
                    </div>

                    <div className="content__body__features__element1 element">
                        <div className="content__body__features__title title1">Registriere dein Unternehmen bei Loremio
                        </div>
                        <div className="content__body__features__detail block1">
                            Mit nur wenigen Schritten kannst du dein Unternehmen in der Loremio-Plattform
                            anmelden und direkt damit loslegen, einen Draht zu deiner Kundschaft aufbauen und Angebote
                            in der Umgebung zu werben (bis zu 100 KM).
                        </div>
                    </div>

                    {/**<div className="content__body__features__element4">
                     <font style={{ color: '#ffad4e', fontWeight: 'bold' }}>-</font> Nutzer | <font
                     style={{ color: '#ffad4e', fontWeight: 'bold' }}>-</font> Händler | <font
                     style={{ color: '#ffad4e', fontWeight: 'bold' }}>-</font> neue Angebote pro Minute | <font
                     style={{ color: '#ffad4e', fontWeight: 'bold' }}>-</font> erstellte Angebote
                     </div>**/}
                </div>
            </div>
        )
    }

    const ShowFeaturesForVendors = () => {
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

    const ShowFeaturesForInvestors = () => {
        return (
            <div className="content__body__element">
                <div className="content__body__features">
                    <div className="content__body__features__element1 element">
                        <div className="content__body__features__title title1">Stärken Sie den regionalen Handel</div>
                        <div className="content__body__features__detail block1">
                            Der regionale Handel ist ein wichtiger Bestandteil unserer Gemeinschaft. Durch die Stärkung
                            des regionalen Handels können wir dazu beitragen, dass unsere Gemeinschaft gestärkt wird und
                            unsere lokale Wirtschaft gedeiht. Indem wir unsere Einkäufe lokal tätigen und kleine
                            Unternehmen unterstützen, können wir dazu beitragen, dass unsere Gemeinschaft lebendig und
                            wettbewerbsfähig bleibt.
                        </div>
                    </div>

                    <div className="content__body__features__element2 element">
                        <div className="content__body__features__title title2">Beleben wir die Städte</div>
                        <div className="content__body__features__detail block2">
                            "Beleben wir die Städte" - dieser Titel fordert uns dazu auf, gemeinsam unsere Städte wieder
                            zum Leben zu erwecken. Wir als Einwohner können durch unsere aktive Beteiligung und
                            Unterstützung lokaler Aktivitäten dazu beitragen, dass unsere Städte einladend und lebendig
                            sind. Eine lebendige Stadt schafft nicht nur ein angenehmes Umfeld zum Leben und Arbeiten,
                            sondern fördert auch das Miteinander und stärkt das Gemeinschaftsgefühl. Zusammen können wir
                            unsere Städte zu einem Ort machen, den wir gerne unser Zuhause nennen.
                        </div>
                    </div>

                    <div className="content__body__features__element1 element">
                        <div className="content__body__features__title title1">Förderen Sie die Digitalisierung Ihrer
                            Region
                        </div>
                        <div className="content__body__features__detail block1">
                            Als Unterstützer können Sie die Digitalisierung Ihrer Region fördern und damit einen
                            wichtigen Beitrag zur Stärkung der Wettbewerbsfähigkeit der lokalen Unternehmen leisten.
                            Ihre Hilfe ermöglicht es uns, unsere Region zukunftsorientiert zu gestalten und den
                            Anforderungen des digitalen Zeitalters gerecht zu werden. Werden Sie Teil dieser Entwicklung
                            und unterstützen Sie die Digitalisierung Ihrer Region.
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    const Offer = ({offerResponse}) => {
        return (
            <>
                <div className='offerWrapper'>
                    <div className='offerWrapperContent'>
                        <div onClick={() => setShowOffer(false)} className='close'>
                            <svg aria-label="Close" className="x1n2onr6 x1lliihq" color="#ffffff" fill="#ffffff"
                                 height="18" role="img" viewBox="0 0 48 48" width="18"><title>Close</title>
                                <path clipRule="evenodd"
                                      d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
                                      fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className='offerWrapperContentImage'>
                            <img style={{width: '100%', objectFit: 'contain'}} src={offerResponse?.product?.pictureUrl}
                                 alt=''/>
                        </div>
                        <div className='offerWrapperContentText'>
                            <div style={{
                                display: 'flex',
                                gap: '1ch',
                                paddingBottom: '1ch',
                                borderBottom: '1px solid lightgrey'
                            }}>
                                <Avatar size="small" src={offerResponse?.vendor?.pictureUrl}/>
                                <div style={{fontSize: '14px'}}>{offerResponse?.vendor?.name}</div>
                            </div>
                            <div style={{fontSize: '2rem', paddingTop: '1ch'}}>{offerResponse?.product?.name}</div>
                            <div>{new Date(offerResponse.createdAt).toLocaleString()}</div>
                            <div style={{marginTop: '25px'}}>
                                {offerResponse?.product?.description}
                            </div>
                            <div style={{
                                marginTop: '25px',
                                textAlign: 'end',
                                fontWeight: 'bold',
                                fontSize: '2rem'
                            }}>{offerResponse?.price} €
                            </div>
                            <div className='qrCodeDetails'
                                 style={{marginTop: '25px', display: 'flex', alignItems: 'center'}}>
                                <img src={offerResponse?.vendor?.qrCodeUrl} alt=''/>
                                <div>
                                    <div style={{padding: '0 15px'}}>
                                        {offerResponse?.vendor?.name} <br/>
                                        {offerResponse?.vendor?.address} <br/>
                                        {offerResponse?.vendor?.telephone} <br/>
                                    </div>
                                    <Button
                                        onClick={() => showInMapClicked(offerResponse?.vendor?.lat, offerResponse?.vendor?.lng)}
                                        type="link">Google Maps</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>

            {offerResponse && showOffer &&
            <Offer offerResponse={offerResponse}/>
            }

            <Layout className="layout">
                <Header className="layout__header">
                    <div className="layout__header__logo">
                        <img className="layout__header__logo__text" src={logo} alt="logo"/>
                    </div>

                    {!showPWReset &&
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={[tab]} onClick={navigate}>
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
                                {/*<div>*/}
                                {/*    <ReactPlayer*/}
                                {/*        url={"https://player.odycdn.com/api/v4/streams/free/ohne-beine/6beccb1b2f4ebfcaf0b9aedf74dd4c5759a5864c/e60e1e"}*/}
                                {/*        playing={true}*/}
                                {/*        loop={true}*/}
                                {/*        width={200} height={200}*/}
                                {/*    />*/}
                                {/*</div>*/}
                                <div>
                                    <UserHeader/>
                                </div>
                                <div>
                                    <ShowFeatures/>
                                </div>
                                <div>
                                    <img style={{width: '100%'}} src="src3.png" alt="logo"/>
                                </div>
                                <div>
                                    <HolDieApp/>
                                </div>
                            </>
                            }

                            {!showPWReset && tab === '2' &&
                            <>
                                <VendorHeader/>
                                <div className="content__body__element feature-wrap icons" style={{
                                    backgroundColor: "#fff",
                                    color: 'white',
                                    backgroundSize: 'cover',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    flexDirection: "column",
                                    justifyContent: 'stretch',
                                    width: '100vw',
                                }}>
                                    <div className="feature-content icons" style={{
                                        background: '#FFF',
                                        flexDirection: 'column',
                                        fontWeight: 'bold',
                                        minHeight: '60vh',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingLeft: 13,
                                        paddingRight: 13,
                                        paddingTop: 100,
                                        width: '100wv',
                                    }}>
                                        <center>

                                            <font
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: vendorTitleColor,
                                                    fontSize: "62px"
                                                }}>
                                                Vorteile für dein Geschäft</font>
                                        </center>
                                        <font color={vendorTitleColor}>
                                            <p className="paragraph">Als Unternehmer bist du stolz auf dein Geschäft und
                                                arbeitest hart daran, es erfolgreich zu machen. Aber es kann eine
                                                Herausforderung sein, deine Sichtbarkeit zu erhöhen und neue Kunden zu
                                                gewinnen. Das ist, wo die Loremio-App ins Spiel kommt - wir helfen dir,
                                                dein Geschäft zu fördern und deine Träume zu verwirklichen!
                                                <br/><br/>
                                                Mit unserer App kannst du ganz einfach Angebote erstellen und wir zeigen
                                                sie unseren Nutzern in deiner Umgebung an. Du kannst dich darauf
                                                verlassen, dass deine Werbetexte immer professionell und angepasst sind,
                                                dank unserer neuesten KI-Technologie. Und das Beste ist, dass wir
                                                sicherstellen, dass deine treue Stammkundschaft immer auf dem Laufenden
                                                bleibt, indem wir sie über deine neuen Angebote und Aktionen per
                                                Push-Nachricht informieren.
                                                <br/><br/>
                                                Wir wissen, dass jeder Kleinunternehmer einzigartig ist und wir möchten
                                                dir helfen, deine Individualität hervorzuheben und deine Träume zu
                                                verwirklichen. Melde dich noch heute bei uns an und entdecke, wie wir
                                                dir helfen können, deine Reichweite zu vergrößern und deine
                                                Kundenbindung zu verbessern.
                                            </p></font>
                                        <center>
                                            <font
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: vendorTitleColor,
                                                    fontSize: "62px"
                                                }}>Ihre Vorteile</font>
                                        </center>
                                        <div className="feature-wrap icons" style={{
                                            color: vendorTitleColor,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'bottom',
                                            fontWeight: 'bold',
                                            minHeight: '60vh',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100vw',
                                        }}>
                                            <div className="feature-content icons">
                                                <h4 className="black-text"
                                                    style={{color: vendorTitleColor}}>Kundenbeziehung</h4>
                                                <p className="paragraph">Deine Angebote erreichen innerhalb Sekunden
                                                    nicht
                                                    nur
                                                    deine
                                                    Stammkundschaft und all jene, die deinem Unternehmen folgen, sie
                                                    sind
                                                    auch
                                                    sichtbar
                                                    für jeden Loremio-Nutzer im Umkreis von 100km.</p>
                                            </div>
                                            <div className="feature-content icons">

                                                <h4 className="black-text" style={{color: vendorTitleColor}}>Absatz-
                                                    und Werbekanal</h4>
                                                <p className="paragraph">Du erhältst einen exklusiven Werbekanal -
                                                    die
                                                    Taschen
                                                    deiner
                                                    Stammkundschaft! Nutze ki um deine Produkte kostenlos zu
                                                    beschreiben und
                                                    wir stellen sicher, dass deine Angebote auch wirklich die
                                                    Kunden erreichen, die sie sehen möchten.</p>
                                            </div>
                                            <div className="feature-content icons">

                                                <h4 className="black-text"
                                                    style={{color: vendorTitleColor}}>Digitalisierung</h4>
                                                <p className="paragraph">Dir wird nicht nur für dein Unternehmen eine
                                                    digitale Präsenz geboten, sondern auch für deine Aktionen und
                                                    Angebote. Die Informationen sind nicht nur über die mobile
                                                    Applikation aufrufbar, sondern auch übers Web.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <ShowFeaturesForVendors/>
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
                                    <ShowFeaturesForInvestors/>
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
