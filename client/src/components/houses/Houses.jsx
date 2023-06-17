
import HouseOne from './../../img/pic_5.jpg';
import HouseTwo from './../../img/pic_6.jpg';
import HouseThree from './../../img/pic_7.jpg';


import './houses.css';

function Houses()
{
    return(
        <section className='houses'> 
            <div className="houses_content">

                <div className="houses_title"> 
                    <h1> Домики </h1>
                </div>

                <div className="all_houses">
                    <div className="type_houses">
                        <div className="img_house">
                            <img src={HouseOne} alt="" />
                        </div>

                        <div className="desc_house">
                            <h1 className='font-semibold'>Опен-спейс</h1>
                            Оформлен в современном стиле современных лофтов.
                            Здесь открытое пространство, деревянные стены и мебель, отлично вписывающиеся в окружающую природу.
                        </div>
                    </div>


                    <div className="type_houses">
                        <div className="img_house">
                            <img src={HouseTwo} alt="" />
                        </div>

                        <div className="desc_house">
                            <h1 className='font-semibold'>Рустик</h1>
                            Создает уютную, загадочную и мистическую атмосферу, 
                            наполненную множеством натуральных материалов, деревом, 
                            камнем и многим другим.
                        </div>
                    </div>


                    <div className="type_houses">
                        <div className="img_house">
                            <img src={HouseThree} alt="" />
                        </div>

                        <div className="desc_house">
                            <h1 className='font-semibold'>Сансет</h1>
                            <h2>Создает уютную, загадочную и мистическую атмосферу, 
                            наполненную множеством натуральных материалов, деревом, 
                            камнем и многим другим.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Houses;