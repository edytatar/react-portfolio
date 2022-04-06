const projects = [
    {
        title: 'Polari',
        links: { name: ['GitHub', 'Live Site'], href: ['https://github.com/polari-2022', 'https://polari-attachments.herokuapp.com/'] },
        description: 'LGBTQ+ attachment style dating web app. Technologies used: React, Tailwind CSS, Node, Express, JSON Web Token, MongoDB, and Apollo GraphQL. ',
            imageUrl: 'https://user-images.githubusercontent.com/87889660/162030484-0df05927-435a-4272-a86a-b537c06d3942.png',
            alt: 
            'Polari\'s home page image',
    },
    {
        title: 'NeighborGoods',
        links: { name: ['GitHub', 'Live Site'], href: ['https://github.com/Bread-Winners/NeighborGoods', 'https://bread-winners-neighborgoods.herokuapp.com/'] },
        description:
            'Fullstack application whose mission is to provide access to healthy and nutritious food in the local Chicago community. Technologies used: Node, Express, Handlebars, MySQL, and user authentication.',
        imageUrl:
            'https://user-images.githubusercontent.com/87889660/162030948-c6f26c55-1f9d-4f19-b0db-fce06d92fd9e.png',
        alt: 
        'NeighborGoods\' home page image',
    },
    {
        title: 'Eventube',
        links: { name: ['GitHub', 'Live Site'], href: ['https://github.com/edytatar/eventube', 'https://edytatar.github.io/eventube/'] },
        description:
            'This application is a tool for users to find musical events in their local area using Ticketmaster, YouTube, and LocationIQ\'s API. Technologies used: HTML, CSS, and JavaScript.',
        imageUrl:
            'https://user-images.githubusercontent.com/87889660/162030430-33826aeb-b834-46eb-9bac-e5dd8d51bb20.png',
            alt: 
            'Eventube\'s home page image',
    },
]


export default function Project() {
    return (
        <div id="projects" className="bg-white">
            {/* Project Header */}
            <div>
                <div className="bg-transparent max-w-7xl mx-auto py-10 px-4 sm:py-25 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">2.</h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Projects
                        </p>
                    </div>
                </div>
            </div>


            {/* Project Cards */}

            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none px-4" >
                {projects.map((project) => (
                    <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.alt}/>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                            <p className="mt-3 text-base text-gray-500">{project.description}</p>
                        </div>
                        <div className="flex-1 flex justify-evenly">
                            <span className="text-lg font-medium text-indigo-600">
                                <a href={project.links.href[0]} rel="noreferrer" className="hover:underline" target="_blank">
                                    {project.links.name[0]}
                                </a>
                            </span>
                            <span className="text-lg font-medium text-indigo-600">
                                <a href={project.links.href[1]} rel="noreferrer" className="hover:underline" target="_blank">
                                    {project.links.name[1]}
                                </a>
                            </span>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}