import cardCSS from './packageCard.module.scss'

export default function PackageCard() {
  return (
    <div className={cardCSS.cardcont}>
      <div className={cardCSS.imgcont}>
        <img src="../images/srinagar.jpg" />
      </div>

      <div className={cardCSS.desc}>
        <h3>
          <strong>Family Tour Package</strong> <br></br>

        </h3>
        <div className={cardCSS.star}>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>

        <h6>
          <strong> 03 Nights 04 Days</strong> |  Customizable
        </h6>
        <h6>
          <strong>Cities</strong> : Srinagar
        </h6>

        <ul>
          <li> <i className="fa-solid fa-hotel"></i> <br />   Hotels</li>
          <li> <i className="fa-sharp fa-solid fa-bus"></i> <br />Transfer</li>
          <li> <i className="fa-sharp fa-solid fa-bowl-rice"></i> <br /> Meals</li>
          <li> <i className="fa-regular fa-images"></i> <br /> Sightseeing</li>
        </ul>

      </div>

      <div className={cardCSS.details}>
        <span>
          <i className="fa-solid fa-indian-rupee-sign"></i> <br /> On request
        </span>
        <div className={cardCSS.button} >
          <input type="button" value="Details" />
        </div>
        <div className={cardCSS.button}>
          <input type="button" value="Book Now" />
        </div>
      </div>
    </div>
  );
};