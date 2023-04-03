import './Home.css'
import { AiOutlineSearch } from "react-icons/ai";
import tutorialData from '../data.json'

function Home ()
{

    console.log(tutorialData.video[0])
    const videoTest=tutorialData.video[0];
 return(
        <section className='home-section'>
            <div className='home-content'>
                <div className='searchBar'>
                
                <input className='searchbar-input' placeholder='search'/>
                <AiOutlineSearch id='search-icon'/>
                </div>
                <div className='grid-with-home-content'>
                    <div>
                        <img src={videoTest.Image}/>
                        <h1>{videoTest.tutorialName}</h1>
                        <p>canal-name</p>
                        <p>hour-likes</p>
                    </div> 
                    <div>
                        <img/>
                        <h1>text-for begginers</h1>
                        <p>canal-name</p>
                        <p>hour-likes</p>
                    </div>
                    <div>
                        <img/>
                        <h1>text-for begginers</h1>
                        <p>canal-name</p>
                        <p>hour-likes</p>
                    </div>
                    <div>
                        <img/>
                        <h1>text-for begginers</h1>
                        <p>canal-name</p>
                        <p>hour-likes</p>
                    </div>
                    <div>
                        <img/>
                        <h1>text-for begginers</h1>
                        <p>canal-name</p>
                        <p>hour-likes</p>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default Home