const technologies = [
  {
    name: 'Front-end',
    role: 'React, JavaScript, TailwindCSS, HTML, CSS',
  },
  {
    name: 'Back-end',
    role: 'Node and Express',
  },
  {
    name: 'Database',
    role: 'SQL, MySQL, MongoDB, Mongoose',
  },
  {
    name: 'Tools',
    role: 'Jest, Apollo GraphQL, JSON Web Token, Postman',
  },
  {
    name: 'DevOps',
    role: 'Jenkins, Artifactory, GitHub Enterprise',
  },
]

export default function About() {

  return (
    <>
      {/* About header */}
      <div id="about" className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-25 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">1.</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About
            </p>
          </div>
        </div>
      </div>

      {/* About Seciton */}
      <div className="relative bg-white py-6 sm:py-16">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">

              {/* Dot graphics */}
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                {/* Image of me */}
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://user-images.githubusercontent.com/87889660/156487594-7b1ea81b-313d-4ffb-863f-ce5c1ea935f9.jpg"
                  alt="Chicago skyline"
                />

              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">

            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Tenacious &#38; Resourceful
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  I am currently a Junior DevOps Engineer at DocuSign. I finished Northwestern University's Full Stack Coding Bootcamp in March 2022. In 2020, I graduated from DePaul University with a B.S in Marketing and a Minor in Graphic Design.
                </p>
                <p className="text-lg">
                  I am passionate about combining my design and coding skills to create innovative solutions for the community.  Creative problem solving and debugging are my jam.
                </p>
                <p className="text-lg">
                  Below are a few technologies I have been working with recently:
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap justify-center mt-7">
                {technologies.map((technology, i) => (
                  <div
                    key={i}
                    className="relative w-2/5 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-indigo-600 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 m-3 mb-3"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="mb-1 text-sm font-medium text-gray-900">{technology.name}</p>
                      <p className="text-sm text-gray-500">{technology.role}</p>
                    </div>
                  </div>
                ))}
              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}


