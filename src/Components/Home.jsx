import './home.css';

const Home = () => {
    return (
        <div className="homePage">

            <div className='title'>
                <h1><b>Kevin Sperling</b></h1>
                <h5>Fullstack Developer. Problem Solver. Star Wars Nerd</h5>
            </div>

            <div className='popUp'>
                <p className='hoverable'>Where am I?</p>
                <div className='hidden-container'>
                    <div className='hidden'>
                        <p>Panoramic Point Overlook</p>
                        <p>Sequoia & Kings Canyon National Parks</p>
                        <p><a href="https://www.nps.gov/places/000/panoramic-point-overlook.htm" target="_blank" rel="noopener noreferrer">Learn more on the National Parks Service Website</a></p>
                        <p>Photo Credit: Kenny Sperling, 2023</p>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Home;