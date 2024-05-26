import nytimes from "../assets/nytimes.jpeg"
import weatherApp from "../assets/weatherApp.jpg"
import twitter from "../assets/twitter.jpeg"
import tmdb from "../assets/tmdb.jpeg"


const Portfolio =[
  {
    id:1,
    src: nytimes,
    link: 'https://github.com/Sanjay-Choudhary07/nytimes'
  },
  {
    id:2,
    src:  tmdb,
    link: 'https://github.com/Sanjay-Choudhary07/tmdb'
  },
  {
    id:3,
    src: twitter,
    link: 'https://github.com/Sanjay-Choudhary07/Twitter'
  },
  {
    id:4,
    src: weatherApp,
    link: 'https://github.com/Sanjay-Choudhary07/weather-app'
  }, 
]

const Projects = () => {

  const handleGitLink = (link) =>{
    window.open(link, '_blank');
  }

  return (
    <div name="Projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
              Portfolio.map(({id, src, link}) =>(

                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                  {/* <button className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> */}
                  <button onClick={()=>handleGitLink(link)} className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>code</button>
                </div>
                </div>  
              ))
            }
            </div>
        </div>
    </div>
  )
}

export default Projects;