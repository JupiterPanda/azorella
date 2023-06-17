import { Link } from 'react-router-dom'
import './promo.css';

function Promo()
{
    return(
    <section className='promo'>
        <div className="promo_content">

            <div className="promo_text">
                <h1 className='title'> Azorella </h1>
                <h1 className='desc'>Место, где вы сможете забыть о городе</h1>
                <h1 className='desc'>и воссоединиться с природой</h1>
            </div>

            <div className="promo_img"></div>

            <button className="button_one" type = 'submit' >
                <Link to='/order' className="button_text"> Забронировать </Link>
            </button>

        </div>

    </section>);
}

export default Promo;

