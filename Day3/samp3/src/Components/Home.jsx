import w1 from '../Assets/Images/w1.jpg'
import w2 from '../Assets/Images/w2.jpg'
import w3 from '../Assets/Images/w3.jpg'


const Home =()=>
{

    return(

        <div className="Home">
            <div className="nature">
                <span>
                <img src={w1} alt="w1" className="imgs" style={{ height: '20vh', width: '20vw' }} />
                </span>
                <span>
                    <img src={w2} alt="w2" className="imgs" style={{ height: '20vh', width: '20v' }}></img>
                </span>
                <span>
                    <img src={w3} alt="w3" className="imgs" style={{ height: '20vh', width: '20v' }}></img>
                </span>

            </div>

        </div>
    )
}

export default Home;