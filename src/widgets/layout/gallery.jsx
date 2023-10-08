import { Typography } from '@material-tailwind/react';
import React from 'react'
import MySlider from './GalleryImages';


const GalleryImages = () => {
    return (
        <>
            <section className="overflow-hidden text-neutral-700">
                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-5 pb-2">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://www.dropbox.com/s/8wnvzhvkdz9hcav/DSC_8288.JPG?raw=1" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://www.dropbox.com/s/ks4tlxdt849c6fc/DSC_8294.JPG?raw=1" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://www.dropbox.com/s/c3vaciecwp7dqsj/DSC_8335.JPG?raw=1" />
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://www.dropbox.com/s/6i9u7aipi61fqlp/DSC_8380.JPG?raw=1" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://www.dropbox.com/s/4d2rq3l4zkrmi24/DSC_8383.JPG?raw=1" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://www.dropbox.com/s/i70nsl9u0gyw8f7/DSC_8476.JPG?raw=1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center px-5 py-2 lg:px-10 lg:pt-5 pb-10'>
                <Typography variant="h1" className=" text-left text-black" >
                <span className=' text-red-400'>Our</span> Album
                </Typography>
                <div className="flex justify-center">
                    <MySlider />
                </div>
            </section>

        </>
    )
}

export default GalleryImages;

