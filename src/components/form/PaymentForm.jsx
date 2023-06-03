import React, { useState } from 'react'
import './style.scss'
export default function PaymentForm() {
    // usestate is taken to select the radio buttons and giving functionality,
    // as per the plan selection and updating the price
    const [selected, setselected] = useState('null');
    const [initialprice, setinitialprice] = useState('0.00')
    //price with 18% of GST
   const price = eval(`${selected} * (18 / 100) + ${selected}`);

   // for discounted price 
   const discount = eval(`${initialprice}-${price}`);
   
   //converting the price to string
   //for 1 year subcribtion ₹18,500, 6 months subcribtion ₹9,250 & for 3 months subcribtion ₹4,625 are considered
   let actualprice = initialprice==='18500'? '18,500' : initialprice==='9250'? '9,250' :initialprice==='4625'?'4,625':'0.00'
    return (
        <div className='form'>
            <div className="progress">
                <span className="stage1">
                    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="38" height="38" rx="19" fill="#0096FF" />
                        <path d="M21.8437 9.98413V27.0935H18.7383V13.6052L14.625 14.9646V12.4568L21.4922 9.98413H21.8437Z" fill="white" />
                    </svg>
                    <div className="text">
                        Sign Up
                    </div>
                </span>
                <span className="stage1">
                    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="38" height="38" rx="19" fill="#0096FF" />
                        <path d="M25.4297 24.656V27.0935H13.875V25.0076L19.418 19.0193C19.9961 18.363 20.4531 17.7927 20.7891 17.3083C21.125 16.824 21.3633 16.3865 21.5039 15.9958C21.6523 15.5974 21.7266 15.2185 21.7266 14.8591C21.7266 14.3357 21.6328 13.8787 21.4453 13.488C21.2578 13.0896 20.9844 12.781 20.625 12.5623C20.2734 12.3435 19.8398 12.2341 19.3242 12.2341C18.7539 12.2341 18.2656 12.3669 17.8594 12.6326C17.4609 12.8904 17.1562 13.2498 16.9453 13.7107C16.7422 14.1716 16.6406 14.699 16.6406 15.2927H13.5352C13.5352 14.2849 13.7695 13.3669 14.2383 12.5388C14.707 11.7029 15.3789 11.0349 16.2539 10.5349C17.1289 10.0349 18.168 9.78491 19.3711 9.78491C20.543 9.78491 21.5352 9.98022 22.3477 10.3708C23.1602 10.7537 23.7773 11.3005 24.1992 12.0115C24.6211 12.7224 24.832 13.5701 24.832 14.5544C24.832 15.1013 24.7422 15.6404 24.5625 16.1716C24.3828 16.7029 24.1289 17.2302 23.8008 17.7537C23.4805 18.2693 23.0977 18.7927 22.6523 19.324C22.207 19.8552 21.7109 20.3982 21.1641 20.9529L17.8359 24.656H25.4297Z" fill="white" />
                    </svg>

                    <div className="text">
                        Subscribe
                    </div>
                </span>
            </div>
            {/* form header   */}

            <div className="formheader">
                Select your subcription plan
            </div>
            {/* Radio Input Section */}

            <div className="ipcontainer">
                <div className="textfild1">
                    <div className="tag1">Offer expired</div>
                    <label style={{
                        display: 'flex',
                    }}>
                        <input disabled style={{
                            marginTop: '10.5px',
                            width: '30px',
                            height: '30px'
                        }} type="radio" value="option1" checked={true} />
                        <div className="Textcontent">
                            <div style={{
                                color: '#BEBEBE'
                            }} className="textcontent">12 Months Subscription </div>
                            <div style={{
                                color: '#BEBEBE'
                            }} className="righttext">
                                <div style={{
                                     color: '#BEBEBE'
                                }} className='rightText'>Total <span style={{
                                    color: '#BEBEBE'
                               }} className='rightText1'>₹99</span></div>
                                <span className='permont'>₹8 <span style={{
                                    color: '#BEBEBE'
                                }} className='month'>/mo</span></span>
                            </div>
                        </div>
                    </label>
                </div>

                <div className={selected === '179.00' ? "textfild1 textfild2" : "textfild1 textfild3"}>
                    <div className="tag2">Recommended</div>
                    <label style={{
                        display: 'flex',
                    }}>
                        <input style={{
                            marginTop: '10.5px',
                            width: '30px',
                            height: '30px'
                        }} type="radio" className='radioip' value='179.00' onChange={(e) => {
                            setselected(e.target.value)
                            setinitialprice('18500')
                        }} checked={selected === "179.00"} />
                        <svg className={selected === "179.00" ? 'selectedradio' : 'selectedradio radiounselect'} width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1333 19.6334L21.5333 10.2334L19.6667 8.36675L12.1333 15.9001L8.33333 12.1001L6.46667 13.9667L12.1333 19.6334ZM14 26.8334C12.1556 26.8334 10.4222 26.4832 8.8 25.7827C7.17778 25.0832 5.76667 24.1334 4.56667 22.9334C3.36667 21.7334 2.41689 20.3223 1.71733 18.7001C1.01689 17.0779 0.666668 15.3445 0.666668 13.5001C0.666668 11.6556 1.01689 9.9223 1.71733 8.30008C2.41689 6.67786 3.36667 5.26675 4.56667 4.06675C5.76667 2.86675 7.17778 1.91653 8.8 1.21608C10.4222 0.516526 12.1556 0.166748 14 0.166748C15.8444 0.166748 17.5778 0.516526 19.2 1.21608C20.8222 1.91653 22.2333 2.86675 23.4333 4.06675C24.6333 5.26675 25.5831 6.67786 26.2827 8.30008C26.9831 9.9223 27.3333 11.6556 27.3333 13.5001C27.3333 15.3445 26.9831 17.0779 26.2827 18.7001C25.5831 20.3223 24.6333 21.7334 23.4333 22.9334C22.2333 24.1334 20.8222 25.0832 19.2 25.7827C17.5778 26.4832 15.8444 26.8334 14 26.8334Z" fill="#47BA68" />
                        </svg>

                        <div className="Textcontent2">
                            <div className="textcontent">12 Months Subscription </div>
                            <div className="righttext">
                                <div className='rightText'>Total <span className='rightText1' >₹179</span></div>
                                <span className='permont'>₹15 <span className='month'>/mo</span></span>
                            </div>
                        </div>
                    </label>
                </div>

                <div className={selected === '149.00' ? "textfild1 textfild2" : "textfild3"}>
                    <label style={{
                        display: 'flex',
                    }}>
                        <input style={{
                            marginTop: '10.5px',
                            width: '30px',
                            height: '30px'
                        }} type="radio" className='radioip' value="149.00" onChange={(e) => {
                            setselected(e.target.value)
                            setinitialprice('9250')
                        }} checked={selected === "149.00"} />
                        <svg className={selected === "149.00" ? 'selectedradio' : 'selectedradio radiounselect'} width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1333 19.6334L21.5333 10.2334L19.6667 8.36675L12.1333 15.9001L8.33333 12.1001L6.46667 13.9667L12.1333 19.6334ZM14 26.8334C12.1556 26.8334 10.4222 26.4832 8.8 25.7827C7.17778 25.0832 5.76667 24.1334 4.56667 22.9334C3.36667 21.7334 2.41689 20.3223 1.71733 18.7001C1.01689 17.0779 0.666668 15.3445 0.666668 13.5001C0.666668 11.6556 1.01689 9.9223 1.71733 8.30008C2.41689 6.67786 3.36667 5.26675 4.56667 4.06675C5.76667 2.86675 7.17778 1.91653 8.8 1.21608C10.4222 0.516526 12.1556 0.166748 14 0.166748C15.8444 0.166748 17.5778 0.516526 19.2 1.21608C20.8222 1.91653 22.2333 2.86675 23.4333 4.06675C24.6333 5.26675 25.5831 6.67786 26.2827 8.30008C26.9831 9.9223 27.3333 11.6556 27.3333 13.5001C27.3333 15.3445 26.9831 17.0779 26.2827 18.7001C25.5831 20.3223 24.6333 21.7334 23.4333 22.9334C22.2333 24.1334 20.8222 25.0832 19.2 25.7827C17.5778 26.4832 15.8444 26.8334 14 26.8334Z" fill="#47BA68" />
                        </svg>
                        <div className="Textcontent">
                            <div className="textcontent">6 Months Subscription </div>
                            <div className="righttext">
                                <div className='rightText'>Total <span className='rightText1'>₹149</span></div>
                                <span className='permont'>₹25 <span className='month'>/mo</span></span>
                            </div>
                        </div>
                    </label>
                </div>

                <div className={selected === '99.00' ? "textfild1 textfild2" : "textfild3"}>
                    <label style={{
                        display: 'flex',
                    }}>
                        <input style={{
                            marginTop: '10.5px',
                            width: '30px',
                            height: '30px'
                        }} type="radio" className='radioip' value="99.00" onChange={(e) => {
                            setselected(e.target.value)
                            setinitialprice('4625')
                        }} checked={selected === "99.00"} />
                        <svg className={selected === "99.00" ? 'selectedradio' : 'selectedradio radiounselect'} width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1333 19.6334L21.5333 10.2334L19.6667 8.36675L12.1333 15.9001L8.33333 12.1001L6.46667 13.9667L12.1333 19.6334ZM14 26.8334C12.1556 26.8334 10.4222 26.4832 8.8 25.7827C7.17778 25.0832 5.76667 24.1334 4.56667 22.9334C3.36667 21.7334 2.41689 20.3223 1.71733 18.7001C1.01689 17.0779 0.666668 15.3445 0.666668 13.5001C0.666668 11.6556 1.01689 9.9223 1.71733 8.30008C2.41689 6.67786 3.36667 5.26675 4.56667 4.06675C5.76667 2.86675 7.17778 1.91653 8.8 1.21608C10.4222 0.516526 12.1556 0.166748 14 0.166748C15.8444 0.166748 17.5778 0.516526 19.2 1.21608C20.8222 1.91653 22.2333 2.86675 23.4333 4.06675C24.6333 5.26675 25.5831 6.67786 26.2827 8.30008C26.9831 9.9223 27.3333 11.6556 27.3333 13.5001C27.3333 15.3445 26.9831 17.0779 26.2827 18.7001C25.5831 20.3223 24.6333 21.7334 23.4333 22.9334C22.2333 24.1334 20.8222 25.0832 19.2 25.7827C17.5778 26.4832 15.8444 26.8334 14 26.8334Z" fill="#47BA68" />
                        </svg>
                        <div className="Textcontent">
                            <div className="textcontent">3 Months Subscription </div>
                            <div className="righttext">
                                <div className='rightText'>Total <span style={{
                                    marginLeft: '5px'
                                }} className='rightText1'>₹99</span></div>
                                <span className='permont'>₹33 <span className='month'>/mo</span></span>

                            </div>
                        </div>
                    </label>
                </div>

            </div>

            {/* Price Summary Section */}

            <div className="summary">
                <div className="textcontainer">
                    <span className="text1">Subscription Fee</span>
                    <span className="text1">₹{actualprice}</span>
                </div>
                <div className="alert">
                    <div className="alertheader">
                        <span>Limited time offer </span>
                        <span style={{
                            color: '#3C4852'
                        }}>- {discount.toLocaleString('en-US')} </span>
                    </div>
                    <div className="albody">
                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z" fill="#DE4313" />
                        </svg>
                        </span>
                        <span style={{
                            marginLeft: '10px',
                            fontSize: '15px'
                        }}>Offer valid till 29th May 2023 </span>
                    </div>
                </div>
                <div className="total">
                    <span style={{
                        fontWeight: '600'
                    }}>Total <span style={{
                        fontWeight: '100',
                        color: '#3C4852'
                    }}>(Incl. of 18% GST)</span> </span>
                    <span className='finalprice'>₹{price}</span>
                </div>
            </div>
            <div className="btncontainer">
                <button className="left">CANCEL</button>
                <button className="right">PROCEED TO PAY</button>
            </div>
            <div className="iconcontainer">
<img width="120" height="43" src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png" alt="" />
            </div>
        </div>
    )
}
