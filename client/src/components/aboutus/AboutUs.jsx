import PicOne from './../../img/pic_2.jpg';
import PicTwo from './../../img/pic_3.jpg';
import PicThree from './../../img/pic_4.jpg';


import './aboutus.css';

function AboutUs()
{
    return ( 
    <section className='aboutus'>
        <div className="aboutus_content">

            <div className="content_1">
                <div className='aboutus_img_1'>
                    <img src={PicOne} alt="" />
                </div>
                <div className='aboutus_img_2'>
                    <img src={PicTwo} alt="" />
                </div>

                <div className='aboutus_img_3'>
                    <img src={PicThree} alt="" />
                </div>
            </div>

            <div className="content_2">
                <div className="content_2_title">
                    <h2> О нас</h2>
                </div>

                <div className="content_2_desc">
                    <h2 className="font-normal"> 
                    Наш отель расположен в горах и окружен сосновым лесом.
                    В озере можно купаться, плавать на лодке и рыбачить.
                    На территории отеля есть много развлечений, живописных мест, где вы хорошо проведете время.
                    </h2>
                </div>
            </div>

        </div>
    </section>);
}

export default AboutUs;