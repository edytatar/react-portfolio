import { Link } from 'react-scroll'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'


export default function Nav() {
    return (
        <Popover className="relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 space-between md:space-x-10">

                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#"><Link to="home" spy={true} smooth={true}>
                            <span className="sr-only">Logo</span>
                            <img
                                className="h-12 w-auto sm:h-20"
                                src="https://user-images.githubusercontent.com/87889660/156454571-818bdf9d-19da-41e4-9c6e-f943ceb60ce9.svg"
                                alt="Edyta's logo"
                            />
                        </Link>
                        </a>
                    </div>

                    {/* Responsive Hamburger */}
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    {/* Nav Links */}
                    <Popover.Group as="nav" className="hidden flex md:flex space-x-10">
                        <a href="#" className="text-lg lg:text-2xl font-medium text-gray-500 hover:text-gray-900"><Link to="about" spy={true} smooth={true}>
                            About
                        </Link>
                        </a>
                        <a href="#" className="text-lg lg:text-2xl font-medium text-gray-500 hover:text-gray-900"><Link to="projects" spy={true} smooth={true}>
                            Projects
                        </Link>
                        </a>

                        <a href="#" className="text-lg lg:text-2xl font-medium text-gray-500 hover:text-gray-900"><Link to="contact" spy={true} smooth={true}>
                            Contact
                        </Link>
                        </a>

                        <a href="https://drive.google.com/file/d/1huJkUqRuymolZx5MM0GxECV45yNlGGoh/view?usp=sharing" target="_blank" className="text-lg lg:text-2xl font-medium text-gray-500 hover:text-gray-900">
                            Resume
                        </a>
                    </Popover.Group>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >

                {/* Inside hamburger */}
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">

                                {/* Logo img in hamburger */}
                                <div>
                                    <img
                                        className="h-11 w-auto"
                                        src="https://user-images.githubusercontent.com/87889660/156454571-818bdf9d-19da-41e4-9c6e-f943ceb60ce9.svg"
                                        alt="Edyta's logo"
                                    />
                                </div>

                                {/* Close hamburger menu */}
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>

                        {/* Nav links inside hamburger */}
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"><Link to="about" spy={true} smooth={true}>
                                    About
                                </Link>
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"><Link to="projects" spy={true} smooth={true}>
                                    Projects
                                </Link>
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"><Link to="contact" spy={true} smooth={true}>
                                    Contact
                                </Link>
                                </a>

                                <a href="https://drive.google.com/file/d/1huJkUqRuymolZx5MM0GxECV45yNlGGoh/view?usp=sharing" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
