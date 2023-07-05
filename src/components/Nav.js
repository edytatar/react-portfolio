import { Link } from 'react-scroll'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'

const navigation = [
    { name: 'About', link: 'about' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
]

export default function Nav() {
    return (
        <Popover className="relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 space-between md:space-x-10">

                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <button className="cursor-default">
                            <span className="sr-only">Logo</span>
                            <img
                                className="h-12 w-auto sm:h-20"
                                src="https://user-images.githubusercontent.com/87889660/156454571-818bdf9d-19da-41e4-9c6e-f943ceb60ce9.svg"
                                alt="Edyta's logo"
                            />
                        </button>
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
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                className="text-lg lg:text-2xl font-medium text-gray-500 hover:text-indigo-600"
                            ><Link to={item.link} spy={true} smooth={true}>
                                    {item.name}
                                </Link></button>
                        ))}
                        <a href="https://drive.google.com/file/d/10PYV9dEqS_dxXcpIjysfRNT6XGdaJSOn/view" rel="noreferrer" target="_blank" className="text-lg lg:text-2xl font-medium text-gray-500 hover:text-gray-900">
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
                <Popover.Panel
                    focus
                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            {/* Logo in hamburger menu */}
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://user-images.githubusercontent.com/87889660/156454571-818bdf9d-19da-41e4-9c6e-f943ceb60ce9.svg"
                                    alt="Edyta's logo"
                                />
                            </div>
                            {/* Close menu button */}
                            <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        {/* Nav Links inside hamburger */}
                        <div className="px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <Link to={item.link} spy={true} smooth={true}>
                                        {item.name}
                                    </Link>
                                </button>
                            ))}

                            <a
                                href="https://drive.google.com/file/d/10PYV9dEqS_dxXcpIjysfRNT6XGdaJSOn/view" target="_blank" rel="noreferrer"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
