import {Avatar, Button} from "antd";

export const Offer = ({offerResponse, setShowOffer}) => {

    const showInMapClicked = (lat, lng) => {
        window.open("https://maps.google.com?q=" + lat + "," + lng);
    };

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
