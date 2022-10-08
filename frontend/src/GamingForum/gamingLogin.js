import { Link } from "react-router-dom"
import Forspoken from '../Images/GamingForum/ForspokenWallpaper.jpg'

export default function GamingLogin () {
    return(
        <main className='gamingLoginBody'>
            <section>
                <form>
                    <h1> Welcome to </h1>
                    <h2> Sylvia </h2>
                    <p><span> Log in </span> or <span> Register </span> to be known to my  gaming forum!</p>
                    <div className='insideForm'>
                        <input
                        placeholder='Username'
                        />

                        <input
                        placeholder='Password'
                        />

                        <div>
                            <button> Register </button>
                            <button> Login </button>
                        </div>
                    </div>
                </form>
                <div className='loginImage'>
                    <img src={Forspoken} alt='Forspoken Wallpaper' />
                </div>
            </section>
        </main>
    )
}