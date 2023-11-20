import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    photoshop,
    adobe1,
    wordpress,
    bootstrap,
    sass,
    git,
    live,
    figma,
   
    crossculcurelove,
    gym,
    darija,
    threejs,
    restaurant,
    weatherapp,
    usa,
    france,
    
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-end Developer",
      icon: web,
      description:" Creates websites and applications interfaces using HTML, CSS, CSS Framework(tailwindcss, bootstrap), JavaScript, react library."
    },
    {
      title: "Designer",
      icon: mobile,
      description:"Preparing and modifying designs using Photoshop and other tools."
    },
    {
      title: "Customer service representative",
      icon: backend,
      description:"Provided friendly, prompt, and professional assistance to customers."
    },
    {
      title: "Content Creator",
      icon: creator,
      description:"Developing high-quality social media, marketing materiels and media buyer. "
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Adobe",
      icon: adobe1,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  
  
  const testimonials = [
    {
      testimonial:
        "Anass built me an amazing resource to learn and study the regional Moroccan Arabic dialect. No such resource existed before.",
      name: "Katelynn Sortino",
      image: usa,
      designation: "Travel Writer",
      company: ""
    },
    {
      testimonial:
        "Anass was super professional and helpful in building my restaurant menu. Before we relied on expensive paper menus that needed to be updated constantly. His website was an incredible upgrade for our customers.",
      name: "Laura Esposito",
      designation: "Manager of",
      company: "North Slope Bakery",
      image:usa,
    },
    {
      testimonial:
        "Anass helped me build and troubleshoot two fantastic websites. He's professional, reliable, and very easy to work with. I'm happy with the results.",
      name: "Aziza Boulahri",
      designation: "CTO of",
      company: "6 Enterprises",
      image:france,
    },
  ];
  
  const projects = [
    {
      name: "Wordpress CrossCultureLove",
      description:
        "In order to support those in international relationships, I created this website CrossCultureLove in collaboration with my wife since she's American and I'm from Morocco. I designed the website with Wordpress while she wrote the articles.",
      tags: [
      
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
       
      ],
      image: crossculcurelove,
      source_code_link: "https://crossculturelove.com/",
      live_code_link: "https://crossculturelove.com/",
    },
    {
      name: "React Gym App",
      description:
        "My wife wanted an app to help her feel less lost at the gym. I created this app to support her health goals and give her support, even when I'm at work.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "text-amber-300",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/Marfousidev/react-gym-app",
      live_code_link: "https://marfousidev.github.io/react-gym-app/",
    },
    {
      name: "Darija-English-Dictionary ",
      description:
        "I created this Moroccan Darija app to help my wife learn my regional Arabic dialect. We released this app as a free resource for others wanting to learn the regional Moroccan Arabic language. I created the app using Google Sheets and converted it to a JSON.files, manually translating over 2,000 terms (and counting) myself along with the help of my wife. This search input can be searched in Arabic and English.",
      tags: [
        {
          name: "Json.files",
          color: "blue-text-gradient",
        },
        {
          name: "Spreadsheet",
          color: "green-text-gradient",
        },
        
        {
          name: "Tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "text-amber-300",
        },

      ],
      image: darija,
      source_code_link: "https://github.com/Marfousidev/darija-english-dictionary",
      live_code_link: "https://marfousidev.github.io/darija-english-dictionary/",

    },
    
    {
      name: "restaurant-menu-landing-page  ",
      description:
        "I took a Figma restaurant menu design and turn it into a full-fledged website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "text-amber-300",
        },
        {
          name: "Figma",
          color: "blue-text-gradient",
        },

      ],
      image: restaurant,
      source_code_link: "https://github.com/Marfousidev/restaurant-menu-app",
      live_code_link: "https://marfousidev.github.io/restaurant-menu-app/",
    },
    {
      name: "WeatherApp ",
      description:
        "I created a location-based weather app with a robust search feature using javascript, CSS and RapidAPI.",
      tags: [
       
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "text-amber-300",
        },

      ],
      image: weatherapp,
      source_code_link: "https://github.com/Marfousidev/WeatherApp",
      live_code_link: "https://marfousidev.github.io/WeatherApp/",
    },
  ];
  
  export { services, technologies,testimonials, projects };
