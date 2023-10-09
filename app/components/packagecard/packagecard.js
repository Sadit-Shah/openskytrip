import packagecardcss from './packagecard.module.scss';
export default function Packagecard() {
    return (
        <div className={packagecardcss.card}>
            <div className={packagecardcss.imgcss}>
                <img src="https://zippgotravelsindia.com/wp-content/uploads/2022/08/12.1-1.jpg" />
            </div>
            <div className={packagecardcss.duration}>
                <ul>
                    <li>
                        <span>
                            <i aria-hidden="true" class="fas fa-calendar-alt"></i>
                        </span>
                        <span>5N6D</span>
                    </li>
                    <li>
                        <span>
                            <i aria-hidden="true" class="fas fa-users"></i>
                        </span>
                        <span>Family</span>
                    </li>
                </ul>
            </div>
            <div className={packagecardcss.carddescription}>
                <h3><a href="/jewelsofkashmir5n6d">Crystals Of Kashmir</a></h3>
            </div>
            <div className={packagecardcss.location}>
                <ul>
                    <li>
                        <span>
                            <i aria-hidden="true" class="fas fa-map-marker-alt"></i>						</span>
                        <span>Srinagar - Gulmarg - Pahalgam</span>
                    </li>
                </ul>
            </div>
            <div className={packagecardcss.divider}>
                <hr></hr>
            </div>
            <div className={packagecardcss.cardbottom}>
                 <div className={packagecardcss.from}>
                        <p>From</p>
                        <h6>Rs. 17,400</h6>
                    </div>

                    <div className={packagecardcss.explore}>
                        <a href="/crystalsofkashmir5n6d">
                           
                                 <span>EXPLORE</span>
                                <span>
                                    <i aria-hidden="true" class="fas fa-arrow-right"></i>
                                </span>
                                
                  
                        </a>
                    </div>
                    
            </div>
            
            {/*<div>
                
                <div>
                    <div>
                        <ul>
                            <li>
                                <span>
                                    <i aria-hidden="true" class="fas fa-calendar-alt"></i>
                                </span>
                                <span>5N6D</span>
                            </li>
                            <li>
                                <span>
                                    <i aria-hidden="true" class="fas fa-users"></i>
                                </span>
                                <span>Family</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h3><a href="/jewelsofkashmir5n6d">Crystals Of Kashmir</a></h3>
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>
                                <span>
                                    <i aria-hidden="true" class="fas fa-map-marker-alt"></i>						</span>
                                <span>Srinagar - Gulmarg - Pahalgam</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>

                        <span>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div><p>From</p>
                        <div><h6>₹17,400</h6></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <a href="/crystalsofkashmir5n6d">
                            <span>
                                <span>
                                    <i aria-hidden="true" class="fas fa-arrow-right"></i>
                                </span>
                                <span>Explore</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div> */}
        </div>

    )
}