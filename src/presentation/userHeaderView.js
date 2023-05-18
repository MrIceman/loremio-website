import {appleLink, heroCaption, heroTitle, playstoreLink} from "../consts";

export const UserHeader = ({width}) => {
    console.log(`heroTitle - heroTitle - `, heroTitle)
    console.log(`width - width - `, width)
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