import './day2.css'

const Day2 = () => {
    return (
        <>
            <div className='card-container'>

                <div className='flip-card '>
                    <div className='flip-card-inner '>
                        <div className='card-front'>
                            <span></span>
                            <div style={{ padding: '20px' }}>

                                <p className='mb-sm card-front__number'>XXXX XXXX XXXX XXXX</p>
                                <p className='b-ml-sm'><span className='black-text'>válida hasta</span> 06/24</p>
                                <p className='mb-sm'>Pedroso N. Nicolas</p>
                                <div className='mb-sm'>XXXXXXXXXX
                                    <p className='black-text'>código de recarga</p></div>
                            </div>
                            <img className='logo' src="https://http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/5.31.0/mercadopago/logo__large.png" alt="mercado-pago" />
                            <svg className='dollar-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z"></path></svg>

                            <div className='mastercard'>
                                <img src="https://www.mastercard.com/content/dam/public/brandcenter/assets/images/logos/mclogo-for-footer.svg" alt="mastercard" />
                                <p className='m-0'>
                                    mastercard
                                </p>
                            </div>
                        </div>
                        <div className='card-back'>
                            <span className='legal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className='magnetic-band'></div>
                            <span className='legal'> Firma autorizada</span>
                            <div className='security-code'> 111</div>
                            <span className='legal' > Molestias voluptatem tenetur temporibus minima! </span>
                            <div className='sticker'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Day2;
