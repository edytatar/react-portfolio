export default function Hero() {
    return (
        // Side dot graphics
        <div className="relative overflow-hidden h-screen">
            <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
                <div className="relative h-full max-w-7xl mx-auto">
                    {/* Left graphic */}
                    <svg
                        className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>

                    {/* Right graphic */}
                    <svg
                        className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
                    </svg>
                </div>
            </div>

            {/* Text in hero */}
            <div className="relative pt-6 pb-16 sm:pb-24 sm:mt-24">
                <main className="mt-20 mx-auto max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <h1 className="tracking-tight font-extrabold text-gray-900">
                            <span className="block mb-7 md:mb-15 lg:mb-9 text-5xl sm:text-6xl md:text-8xl lg:text-9xl">Hey There!</span>{' '}
                            <span className=" md:text-7xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl">I'm <span className="text-indigo-600">Edyta</span>. A <span className="text-indigo-600">Full Stack</span></span>
                            <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl"><span className="text-indigo-600">Engineer </span>in Seattle.</span>
                        </h1>
                    </div>
                </main>
            </div>
        </div>
    )
}
