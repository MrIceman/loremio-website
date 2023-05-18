import logo from "../assets/loremio.png";
import {appleLink, playstoreLink} from "../consts";

export const HolDieApp = ({width}) => {
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