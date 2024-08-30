export const event: EventType[] = [
  {
    id: "tech-fest",
    name: "Tech Fest",
    description:
      "An annual event showcasing the latest in technology and innovation.",
    rules: [
      "Participants must be registered students.",
      "No late entries allowed.",
      "Teams must have 4-6 members.",
    ],
    coordinators: [
      { name: "John Doe", image: "john_doe.jpg" },
      { name: "Jane Smith", image: "jane_smith.jpg" },
    ],
    volunteer: [
      { name: "Alice Johnson", image: "alice_johnson.jpg" },
      { name: "Bob Brown", image: "bob_brown.jpg" },
    ],
  },
  {
    id: "hackathon",
    name: "Hackathon",
    description: "A 24-hour coding competition to solve real-world problems.",
    rules: [
      "Teams of 3-5 members.",
      "No pre-built solutions allowed.",
      "All code must be written during the event.",
    ],
    coordinators: [
      { name: "Chris Evans", image: "chris_evans.jpg" },
      { name: "Emma Watson", image: "emma_watson.jpg" },
    ],
    volunteer: [
      { name: "David Miller", image: "david_miller.jpg" },
      { name: "Sophia Green", image: "sophia_green.jpg" },
    ],
  },
  {
    id: "cultural-night",
    name: "Cultural Night",
    description:
      "A celebration of diverse cultures through performances and exhibitions.",
    rules: [
      "Open to all students.",
      "Performances must be pre-approved.",
      "Traditional attire encouraged.",
    ],
    coordinators: [
      { name: "Liam Williams", image: "liam_williams.jpg" },
      { name: "Olivia Davis", image: "olivia_davis.jpg" },
    ],
    volunteer: [
      { name: "Noah Wilson", image: "noah_wilson.jpg" },
      { name: "Mia Moore", image: "mia_moore.jpg" },
    ],
  },
  {
    id: "debate-competition",
    name: "Debate Competition",
    description:
      "A competitive event where students engage in structured arguments on given topics.",
    rules: [
      "Teams of 2 members.",
      "Each speaker has 5 minutes.",
      "No offensive language allowed.",
    ],
    coordinators: [
      { name: "Ethan Brown", image: "ethan_brown.jpg" },
      { name: "Ava Taylor", image: "ava_taylor.jpg" },
    ],
    volunteer: [
      { name: "Lucas Martin", image: "lucas_martin.jpg" },
      { name: "Isabella Lee", image: "isabella_lee.jpg" },
    ],
  },
  {
    id: "science-exhibition",
    name: "Science Exhibition",
    description: "An exhibition of innovative science projects by students.",
    rules: [
      "Projects must be original.",
      "Group projects allowed.",
      "All safety guidelines must be followed.",
    ],
    coordinators: [
      { name: "Mason Clark", image: "mason_clark.jpg" },
      { name: "Sophia Adams", image: "sophia_adams.jpg" },
    ],
    volunteer: [
      { name: "James Thompson", image: "james_thompson.jpg" },
      { name: "Emily Harris", image: "emily_harris.jpg" },
    ],
  },
  {
    id: "art-workshop",
    name: "Art Workshop",
    description:
      "A hands-on workshop for students to explore various art techniques.",
    rules: [
      "Participants must bring their own supplies.",
      "Respect other participants' work.",
      "Clean up after yourself.",
    ],
    coordinators: [
      { name: "Henry Lewis", image: "henry_lewis.jpg" },
      { name: "Amelia Scott", image: "amelia_scott.jpg" },
    ],
    volunteer: [
      { name: "Benjamin King", image: "benjamin_king.jpg" },
      { name: "Charlotte Baker", image: "charlotte_baker.jpg" },
    ],
  },
  {
    id: "music-concert",
    name: "Music Concert",
    description:
      "A concert featuring performances by student bands and solo artists.",
    rules: [
      "All genres welcome.",
      "Performance time limit: 10 minutes.",
      "No explicit lyrics allowed.",
    ],
    coordinators: [
      { name: "Elijah Hill", image: "elijah_hill.jpg" },
      { name: "Abigail White", image: "abigail_white.jpg" },
    ],
    volunteer: [
      { name: "Alexander Green", image: "alexander_green.jpg" },
      { name: "Grace Walker", image: "grace_walker.jpg" },
    ],
  },
  {
    id: "photography-contest",
    name: "Photography Contest",
    description:
      "A contest to showcase the best photography talent among students.",
    rules: [
      "Only original photos allowed.",
      "No digital manipulation except for cropping and color correction.",
      "Maximum of 3 entries per participant.",
    ],
    coordinators: [
      { name: "Daniel Harris", image: "daniel_harris.jpg" },
      { name: "Ella Young", image: "ella_young.jpg" },
    ],
    volunteer: [
      { name: "Logan Allen", image: "logan_allen.jpg" },
      { name: "Avery Torres", image: "avery_torres.jpg" },
    ],
  },
  {
    id: "drama-performance",
    name: "Drama Performance",
    description: "A theatrical performance by the drama club.",
    rules: [
      "Scripts must be approved.",
      "No improvisation allowed.",
      "All costumes must be appropriate.",
    ],
    coordinators: [
      { name: "Jackson Ramirez", image: "jackson_ramirez.jpg" },
      { name: "Sofia Perez", image: "sofia_perez.jpg" },
    ],
    volunteer: [
      { name: "William Gonzales", image: "william_gonzales.jpg" },
      { name: "Harper Sanchez", image: "harper_sanchez.jpg" },
    ],
  },
  {
    id: "math-quiz",
    name: "Math Quiz",
    description: "A competitive quiz focused on mathematical problem-solving.",
    rules: [
      "Teams of 2-3 members.",
      "No calculators allowed.",
      "Time limit for each round: 30 minutes.",
    ],
    coordinators: [
      { name: "Sebastian Rivera", image: "sebastian_rivera.jpg" },
      { name: "Victoria Mitchell", image: "victoria_mitchell.jpg" },
    ],
    volunteer: [
      { name: "Matthew Lee", image: "matthew_lee.jpg" },
      { name: "Lily Carter", image: "lily_carter.jpg" },
    ],
  },
  {
    id: "sports-meet",
    name: "Sports Meet",
    description:
      "An inter-college sports meet with competitions in various sports.",
    rules: [
      "Only registered participants allowed.",
      "Follow the rules of each sport.",
      "No unsportsmanlike conduct.",
    ],
    coordinators: [
      { name: "Luke Campbell", image: "luke_campbell.jpg" },
      { name: "Chloe Roberts", image: "chloe_roberts.jpg" },
    ],
    volunteer: [
      { name: "Dylan Parker", image: "dylan_parker.jpg" },
      { name: "Zoe Phillips", image: "zoe_phillips.jpg" },
    ],
  },
  {
    id: "robotics-workshop",
    name: "Robotics Workshop",
    description: "A workshop on building and programming robots.",
    rules: [
      "Participants must have basic knowledge of robotics.",
      "Teams of 4-6 members.",
      "No external help allowed.",
    ],
    coordinators: [
      { name: "Aiden Turner", image: "aiden_turner.jpg" },
      { name: "Aria Collins", image: "aria_collins.jpg" },
    ],
    volunteer: [
      { name: "Nathan Edwards", image: "nathan_edwards.jpg" },
      { name: "Evelyn Bennett", image: "evelyn_bennett.jpg" },
    ],
  },
  {
    id: "literary-fest",
    name: "Literary Fest",
    description:
      "A festival celebrating literature with events like poetry readings, storytelling, and book discussions.",
    rules: [
      "Original works only.",
      "Time limit for readings: 10 minutes.",
      "Respect all participants' contributions.",
    ],
    coordinators: [
      { name: "Caleb Scott", image: "caleb_scott.jpg" },
      { name: "Hannah Morgan", image: "hannah_morgan.jpg" },
    ],
    volunteer: [
      { name: "Joshua Martinez", image: "joshua_martinez.jpg" },
      { name: "Leah Stewart", image: "leah_stewart.jpg" },
    ],
  },
];

export const sponsorImages = [
  {
    name: "Jack",
    img: "/./assets/updates-logo.png",
  },
  {
    name: "Jill",
    img: "/./assets/updates-logo.png",
  },
  {
    name: "John",
    img: "/src/assets/updates-logo.png",
  },
  {
    name: "Jane",
    img: "/src/assets/updates-logo.png",
  },
  {
    name: "Jenny",
    img: "/src/assets/updates-logo.png",
  },
  {
    name: "James",
    img: "/src/assets/updates-logo.png",
  },
];
