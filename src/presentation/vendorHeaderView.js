import {appleLink, playstoreLink, vendorHeroShortDescription, vendorHeroTitle, vendorTitleColor} from "../consts";

export const VendorHeader = ({width}) => {
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