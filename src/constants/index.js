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

  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Explore",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Comfortable Accommodations",
    icon: web,
  },
  {
    title: "Luxury Spacecrafts ",
    icon: mobile,
  },
  {
    title: "Spaceport Transfers",
    icon: backend,
  },
  {
    title: "Secure Booking",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
];

const experiences = [
  {
    title: "DAY 1",
    company_name: "Arrival & Orientation",
    icon: tesla,
    iconBg: "#383E56",
    date: "",
    points: [
    " Upon Arrival At Our Lunch Facility, Our Team Will Provide You With An Orientation On The Spacecraft And Safety Procedures. You will have a Chance to Meet Your Fellow Travellers and Ask Any Questions you may Have. "
    ],
  },
  {
    title: "DAY 2 - 3",
    company_name: "Astronaut Training",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "",
    points: [
     "Before you can Embark on the Journey, You will Undergo Intensive Astronaut Training. Our Team of Experienced Trainers Will Prepare You For The Rigors of Space Travel, Including Zero Gravity and Other Space Related Phenomena"
    ],
  },
  {
    title: "DAY 4 - 6",
    company_name: "Launch and Transit to Orbit",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
    "On Day 4, You Will Board The Spacecraft And Prepare For Launch. After A Final Systems Check, The Countdown Will Begin, And You Will Feel The Intense Thrust Of The Engines As You Blast Off Into Space. During The Three-Day Transit To Orbit, You Will Have A Chance To Acclimate To The Weightlessness Of Space And Take In The Breathtaking Views Of Earth From Above"
    ],
  },
  {
    title: "DAY 7 - 10",
    company_name: "Exploration of Space",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Once In Orbit, Your Journey Will Truly Begin. You Will Have The Opportunity To Experience The Wonders Of Space Firsthand, Including Spacewalks, Experiments, And Exploration Of Nearby Celestial Bodies. You Will Be Guided By Our Experienced Crew And Scientists, Who Will Provide You With A Wealth Of Knowledge About Space And The Universe"
    ],
  },

  {
    title: "DAY 11 - 12",
    company_name: "Return To Earth",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "After Your Unforgettable Journey, It Will Be Time To Return To Earth. The Spacecraft Will Undergo A Series Of Maneuvers To Prepare For Reentry Into The Atmosphere, Where You Will Experience Intense G-Forces Before Finally Landing Safely Back On Earth."
          ],
  },
];

const testimonials = [
  {
    testimonial:
    "I've always dreamed of traveling to space, and this agency made that dream a reality. The entire experience was seamless, from booking my trip to the actual launch. The staff were professional and knowledgeable, and the trip itself was an experience I'll never forget.",
    name: "Ellana Ava",
    designation: "Moon Tour",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "My trip with this space travel agency was absolutely out of this world! The views from space were breathtaking, and the staff went above and beyond to make sure every aspect of my trip was taken care of. I can't recommend this company enough!",
        name: "Hannah Schmitt",
    designation: "Mars Tour",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "I was nervous about booking a trip to space, but this agency made me feel comfortable and confident in my decision. They were transparent about the risks and safety precautions, and I felt like I was in good hands the entire time. The trip itself was an adventure I'll never forget!",
    name: "Olivia",
    designation: "Venus Tour",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },

];

const projects = [
  {
    name: "Moon Mission: Explore Luna",
    description:
     "Experience lunar adventure that takes you to the Moon's surface, where you'll encounter breathtaking landscapes and rich history.",


    tags: [
      {
        name: "Moon",
        color: "blue-text-gradient",
      },
      {
        name: "Chaanda Mama",
        color: "green-text-gradient",
      },
      {
        name: "12 Days",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  
  },
  {
    name: "Mars Expedition: Red Planet Adventure",
    description:
    "Get ready for a once-in-a-lifetime Mars expedition. Explore Martian terrain and be part of the next chapter in space exploration.",
    tags: [
      {
        name: "Mars",
        color: "blue-text-gradient",
      },
      {
        name: "Mangal-Grah",
        color: "green-text-gradient",
      },
      {
        name: "25 Days",
        color: "pink-text-gradient",
      },

    ],
    image: tripguide,

   
  },
  {
    name: "Venusian Adventure: Discover Venus",
    description:
    "Uncover the mysteries of Venus on our upcoming expedition. Witness its beauty and contribute to scientific discovery.",
    tags: [
      {
        name: "Venus",
        color: "blue-text-gradient",
      },
      {
        name: "Sky-is-High",
        color: "green-text-gradient",
      },
      {
        name: "30 Days",
        color: "pink-text-gradient",
      },
      
    ],
    image: jobit,

   
  },
];

export { services, technologies, experiences, testimonials, projects };
