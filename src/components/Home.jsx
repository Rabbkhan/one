
import React from 'react'
import '../styles/home.scss'
import vg from '../assets/2.webp'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"
const Home = () => {
    return (
        <>

            <div className="home"  id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Soltion to all yours Problems</p>
                </main>
            </div>

            <div className="home2" >
                <img src={vg} alt='graphics' />
                <div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sit vero, ad minima natus aliquam accusantium nihil aliquid at asperiores.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, atque modi at laudantium deleniti vel architecto doloremque unde nesciunt id quas quis tenetur! Suscipit soluta distinctio reiciendis nostrum animi modi, iure a dicta, officia, excepturi laborum ratione cumque odio facere? Maxime beatae veritatis ab harum sit delectus laboriosam, repellat adipisci.</p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div><h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "07s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay: "0.9s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>

    )
}

export default Home