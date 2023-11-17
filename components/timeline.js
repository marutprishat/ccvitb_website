
const Timeline = () => {
    return (
        <div id="Timeline" className="m-12 flex flex-col items-center ">
            <h1 className="m-4 text-5xl font-bold text-[#015478]">The Timeline</h1>
            <h2 className="mt-3 text-lg text-emerald-300">Here are all past, ongoing and upcoming events organized by</h2>
            <h2 className="mb-4 text-lg text-emerald-300">our club in offline and online mode.</h2>
            <div className="flex flex-col items-center p-8 rounded-xl shadow-inner-2xl shadow-2xl">
                <ol class="items-center sm:flex">
                    <li class="relative mb-6 sm:mb-0">
                        <div class="flex items-center">
                            <div class="z-10 flex items-center justify-center w-6 h-6 bg-white-300 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-yellow-500 shrink-0">
                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-black-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div class="mt-3 sm:pe-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                        </div>
                    </li>
                    <li>
                        
                    </li>
                    <li class="relative mb-6 sm:mb-0">
                        <div class="flex items-center">
                            <div class="z-10 flex items-center justify-center w-6 h-6 bg-white-100 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-yellow-500 shrink-0">
                                <svg class="w-2.5 h-2.5 text-black-800 dark:text-black-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div class="mt-3 sm:pe-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                        </div>
                    </li>
                    <li class="relative mb-6 sm:mb-0">
                        <div class="flex items-center">
                            <div class="z-10 flex items-center justify-center w-6 h-6 bg-white-100 rounded-full ring-0 ring-white dark:bg-white-500 sm:ring-8 dark:ring-yellow-500 shrink-0">
                                <svg class="w-2.5 h-2.5 text-black-800 dark:text-black-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div class="mt-3 sm:pe-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                        </div>
                    </li>
                </ol>
                <button className="mt-10 p-2 w-60 rounded-3xl bg-gradient-to-r from-green-500 to-blue-900 font-Poppins text-white font-bold">Follow</button>
            </div>
        </div>
    )
}

export default Timeline;