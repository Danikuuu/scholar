import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import image from "../../../../public/image.webp"
import image2 from "../../../../public/image2.webp"
import image3 from "../../../../public/image3.webp"
import image4 from "../../../../public/image4.webp"

interface ScrapeResult {
    title: string,
    link : string
}

export default function Card() {
    const [results, setResults] = useState<ScrapeResult[]>([]);
    const [error, setError] = useState<string>('');


    useEffect(() => {
        const fetchData = async () => {
            setError('');
            try {
                const response = await axios.get<ScrapeResult[]>('http://localhost:5000/scrape');
                setResults(response.data);
                console.log('Scrape Results:', response.data);
            } catch (error) {
                setError('Error fetching data from the server');
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []); 

    const openLink = (link:string) => {
        window.open(link, '_blank'); 
    };

    const images = [image, image2, image3, image4]

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      };

    const numberOfCards = 5;    

    const randomImages = Array.from({ length: numberOfCards }, getRandomImage);



    return (
        <>
            {results.map((result, index) => (

            <div className='bg-white w-[550px] h-[400px] mb-9 p-5 rounded-lg flex justify-center flex-col gap-10 relative hover:cursor-pointer hover:scale-[101%] transition-transform' onClick={() => openLink(result.link)}>
                <div className='flex justify-between items-center'>
                    <div className='w-[50px] h-[50px] '>
                        <FontAwesomeIcon icon={faGraduationCap} className='text-4xl'/>
                    </div>
                    <h1 className='font-bold'>2024 - 2025</h1>
                </div>
                <div>
                    <div className='flex flex-col gap-5'>
                        <p>Philippines</p>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='font-bold' key={index}> {result.title}</p>
                </div>
                <div>
                <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                    See more
                </button>
                </div>

                {randomImages.map((image, index) => (

                    <div key={index} className="bg-black absolute w-[190px] h-[250px] right-0 bottom-0">
                        <img className="h-[250px] object-cover" src={image} alt={`Random ${index}`} />
                    </div>

                ))}
            </div>

            ))}
        </>
    );
}
