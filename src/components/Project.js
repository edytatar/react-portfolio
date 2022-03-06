const projects = [
    {
        title: 'NeighborGoods',
        links: { name: ['GitHub', 'Live Site'], href: ['https://github.com/Bread-Winners/NeighborGoods', 'https://bread-winners-neighborgoods.herokuapp.com/'] },
        description:
            'With NeighborGoods, you can keep track of the food pantries you have visited and write private notes and public reviews. Did that food pantry you visit yesterday have fresh produce? Write a note to yourself so you remember for next time.',
        imageUrl:
            'https://user-images.githubusercontent.com/87889660/156894032-24ba2083-5e8e-4f25-810d-05272edda330.png',
        alt: 
        'NeighborGoods\' home page image',
    },
    {
        title: 'Team Profile Manager',
        links: { name: ['GitHub', 'Live Site'], href: ['https://github.com/edytatar/Team-Profile-Manager', '#'] },
        description:
            'This is a Node.js command-line application that collects information about employees on a team and generates an HTML webpage that displays summaries for each individual. The Team Profile Manager is simple to use and builds a convenient location for all team members contact information.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            alt: 
            'Team Profile Manager\'s home page image',
    },
    {
        title: 'Eventube',
        links: { name: ['GitHub', 'Live Site'], href: ['https://github.com/edytatar/eventube', 'https://edytatar.github.io/eventube/'] },
        description:
            'This application is a tool for users to find musical events in their local area using Ticketmaster, YouTube, and LocationIQ\'s API. Technologies used: HTML, CSS, and JavaScript.',
        imageUrl:
            'https://user-images.githubusercontent.com/87889660/156894042-90c8e513-4c86-4baf-a53b-436a6f8450e9.png',
            alt: 
            'Eventube\'s home page image',
    },
]


export default function Project() {
    return (
        <div id="projects">
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
                            <img className="h-48 w-full object-cover" src={project.imageUrl} alt="{project.alt}" />
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