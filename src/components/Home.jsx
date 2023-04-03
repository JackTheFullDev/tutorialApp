import './Home.css'
import { AiOutlineSearch } from "react-icons/ai";

function Home ()
{

 return(
        <section className='home-section'>
            <div className='home-content'>
                <div className='searchBar'>
                
                <input className='searchbar-input' placeholder='search'/>
                <AiOutlineSearch id='search-icon'/>
                </div>
                <div className='grid-with-home-content'>
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