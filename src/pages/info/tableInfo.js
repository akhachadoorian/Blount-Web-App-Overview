export const designTable = {
    title: "Design",
    content: [
        {
            label: "Framework",
            info: "The code framework should be modular in structure to allow for more features to be added in the future",
        },
        {
            label: "Visuals",
            info: "The web app should also appear module in design yet appear complete at the same time.",
        },
    ]
}

export const webAppTable = {
    title: 'Web Application',
    content: [
        {
            label: "Authentication",
            info: "Students, faculty, and alumnae should be able to log into their profile, and view the application based on what level of access they have (student / alumnae / faculty).",
        },
        {
            label: "Profiles",
            info: "There should be multiple sections throughout the application, with profiles and descriptions of Blount Ambassadors, Mentors, and Pets.",
        },
        {
            label: "Community",
            info: "Application should feature a community / communications page where Blount students can interact with one another.",
        },
        {
            label: "News",
            info: "There should be a page dedicated faculty/administration’s news posts.",
        },
        {
            label: "Academics",
            info: "Should have a list of study resources, course packets, available study rooms, etc.",
        },
        {
            label: "Clubs & Events",
            info: "Should have a list of study resources, course packets, available study rooms, etc.",
        },
        {
            label: "Polling Feature",
            info: "Section where Blount faculty and admin can poll Blount students.",
        },
        {
            label: "Calendar",
            info: "Application should feature a calendar of all important events and reminders for Blount students/alumnae.",
        },
        {
            label: "Alumni Connections",
            info: "Section solely dedicated to connecting students with alumnae. There should be an about Blount Alumni Fellows section, Dynamic World Map with vector arrows radiating from Tuscaloosa, Alumni Profiles, and available Alumni Internships.",
        },
        {
            label: "Blount Culture",
            info: "Page that is more of a fun page for students, filled with various random and fun information/games.",
        },
    ]
}

export const wordpressTable = {
    title: 'Wordpress',
    subtitles: [
        "Advantages",
        "Considerations"
    ],
    content: [
        [
            {
                label: "Flexibility via Plugins",
                info: "High flexibility through plugins, allowing for easy customization without necessarily having custom development. Developers can also develop custom plugins for specific interactions.",
            },
            {
                label: "Admin Dashboard",
                info: "Features an intuitive admin dashboard (similar to Payload CMS), simplifying tasks like creating pages, publishing posts, and managing media.",
            },
            {
                label: "CMS Features",
                info: " The “drag-and-drop” capabilities reduce the need for technical skills and making it significantly easier to manage content.",
            },
            {
                label: "Non-Developer Friendly",
                info: "Designed to be accessible to non-developers, so clients can independently update their website’s content. This can also help reduce long term maintenance costs.",
            },
            {
                label: "Tutorials & Documentation",
                info: "With a vast community of developers, extensive guides, tutorials, forms, and libraries of documentation there are many examples that cover nearly every aspect of the platform.",
            },
            {
                label: "CMS of UA",
                info: "It is the official CMS of the University of Alabama, and there are already approved plugins, themes, guides and documentation specific to the university, including authentication for CAS logins.",
            },
        ],
        [
            {
                label: "Common Hacking Target",
                info: "Due to it’s popularity, it is a common target for hackers and regular updates are essential to maintaining security. Core updates, as well as theme updates should be monitored closely to prevent security breaches.",
            },
            {
                label: "Can Be Slow",
                info: "If not properly optimized WordPress sites can become slow if not properly optimized.  Optimizing performance often requires configuring caching solutions, reducing unnecessary plugins, and optimizing databases and images to ensure fast load times and a smoother user experience.",
            },
        ],
    ]
}

export const laravelTable = {
    title: 'Laravel',
    subtitles: [
        "Advantages",
        "Considerations"
    ],
    content: [
        [
            {
                label: "Seamless Database Interactions",
                info: "Comprehensive built-in ORM (Eloquent) for seamless database interaction. This allows the developers to work with data as if it was an object representation rather than SQL queries, which also supports “soft deletes” that mark records as deleted without actually deleting them.",
            },
            {
                label: "Built-in Authentication tools",
                info: "Built-in tools for authentication, routing, and session management to streamline web application development.  The authentication system includes user login, registration and role-based access control.  With secure password hashing and support for API authentication. The routing system allows for intuitive route definitions, RESTful API routing and middleware integration. For session management, Larabel supports multiple session storage options, and offers access to session data, ensuring secure and efficient user data across requests.",
            },
            {
                label: "Modular development packages",
                info: "Widely recognized for having extensive and comprehensive documentation.  Including video tutorials and guides on how to implement common features. There is also a large and active community to get support on common issues and problem solving.",
            },
            {
                label: "Extensive Documentation",
                info: "There are several packages that help with modular development, this could allow there to be a similar structure as Payload CMS.",
            },
        ],
        [
            {
                label: "Steep learning Curve",
                info: "There is a rather steep learning curve, understanding the MVC architecture and other advanced features take time and effort, especially if the developers are not familiar with PHP.",
            },
            {
                label: "Uncontrollable Threats",
                info: "It does require a third party authentication package to enhance its capabilities, this can possibly cause there to be additional vulnerabilities that could be out of developers control.",
            },
            {
                label: "Potential Scalability Challenges",
                info: "Performance overhead can grow as more features are added, potentially leading to scalability challenges.",
            },
        ]

    ]
}

export const codeigniteTable = {
    title: 'CodeIgnite',
    subtitles: [
        "Advantages",
        "Considerations"
    ],
    content: [
        [
            {
                label: "Optimized Performance",
                info: "Known for its small footprint and optimized performance, which is suitable for projects where speed and efficiency are critical.",
            },
            {
                label: "Minimal Configuration",
                info: "Its straightforward approach, minimal configuration, and intuitive structure that make it easy even when developers are new to PHP.",
            },
            {
                label: "Strong Documentation",
                info: "A comprehensive set of pre-built libraries and helpers that simplify common tasks like file uploads, form validation, session management and working with databases.",
            },
            {
                label: "Prebuilt Libraries",
                info: "With an active and supportive community and strong documentation, developers can find solutions quickly.",
            },
        ],
        [
            {
                label: "Limited features ",
                info: "There are limited features compared to other larger frameworks.Developers may need to build certain functionality from scratch or integrate third-party solutions.",
            },
            {
                label: "Potential for manual query writing",
                info: "Developers have to rely on Active Record or write custom queries, which could lead to more manual work when handling complex database relationships.",
            },
            {
                label: "Fewer libraries / 3rd party integrations",
                info: "Has a smaller ecosystem, which means that there are fewer ready-made libraries and third-party integrations available.  While this can lead to more customized solutions, it means more manual integration work for developers, particularly when implementing advanced features.",
            },
        ]
    ]
}

export const collectionTable = {
    title: 'Collections',
    content: [
        {
            label: 'Clubs',
            info: 'Holds the names and related information of all the Blount clubs.',
        },
        {
            label: 'Club Pages',
            info: 'Holds the web app pages specifically for the Blount clubs.',
        },
        {
            label: 'File',
            info: 'Collection of the all the uploaded files on the web app.',
        },
        {
            label: 'Media',
            info: 'Collection of the all the uploaded images and videos on the web app.',
        },
        {
            label: 'Pages',
            info: 'Collection of the web app’s main pages.',
        },
        {
            label: 'News Posts',
            info: 'Holds all of the web app’s news posts from all the publishers.',
        },
        {
            label: 'Quote',
            info: 'Collection of the all the quotes that can be randomly generated.',
        },
        {
            label: 'Social Media & Email',
            info: 'Collection of the social medias or emails that can be inserted to pages.',
        },
        {
            label: 'Users',
            info: 'Collection of the all users and admin accounts.',
        },
    ]
}

export const globalTable = {
    title: 'Globals',
    content: [
        {
            label: 'Header',
            info: 'Holds all settings and data for the navigation bar.',
        },
    ]
}