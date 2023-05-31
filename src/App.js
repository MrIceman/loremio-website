import { Avatar, Button, Layout, Menu, Space } from 'antd';
import './App.css';
import '../src/style/custom-antd.css';
import {useEffect, useState} from 'react';
import {getPush} from './data/vendor';
import PWReset from './PWReset';
import logo from './assets/loremio.png';
import { Offer } from "./presentation/offerView";
import { ShowFeaturesForInvestors } from "./presentation/investoresFeautesView";
import { ShowFeaturesForVendors } from "./presentation/vendorsFeaturesView";
import { ShowFeatures } from "./presentation/userFeatureView";
import { VendorHeader } from "./presentation/vendorHeaderView";
import { UserHeader } from "./presentation/userHeaderView";
import { HolDieApp } from "./presentation/getTheAppView";
import { vendorBgColor } from "./consts";
import YouTube from "react-youtube";
import Newsletter from "./presentation/newsletter";

const { Header, Content, Footer } = Layout

function App() {

    const [tab, setTab] = useState('1')
    const [offerResponse, setOfferResponse] = useState()
    const [showOffer, setShowOffer] = useState(!!offerResponse)
    const [showPWReset, setShowPWReset] = useState()
    const [width, setWidth] = useState(window.innerWidth);


    const videoOptions = {
        height: width / 1.64 < 700 ? `${width / 1.64}` : '700',
        width: width * 0.95 < 1200 ? `${width * 0.95}` : '1200',
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
            navigate({ key: '2' });
        } else {
            setTab('1')
            navigate({ key: '1' })
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
            setShowPWReset({ email, oobCode })
        }
    }, [])


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
                        <Newsletter/>
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
                                    <div className='youtube-cont' style={{textAlign: 'center'}}>
                                        <YouTube videoId="d0Mz5caxmk0" opts={videoOptions} />
                                    </div>
                                    <div>
                                        <VendorHeader width={width} />
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
