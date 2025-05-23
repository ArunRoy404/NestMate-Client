const listingsData = [
  {
    _id: "1",
    title: "Looking for Roommate in Brooklyn, NYC",
    location: "Brooklyn, New York",
    rentAmount: 1200,
    roomType: "Shared Room",
    lifestylePreferences: {
      pets: true,
      smoking: false,
      nightOwl: true
    },
    interests: ["Netflix", "Cooking", "Music"],
    description: "I'm looking for a friendly roommate to share my spacious 2-bedroom apartment. Great location near subway and shops.",
    contactInfo: "+1 (555) 123-4567",
    availability: "Available",
    userEmail: "sarah@example.com",
    photoURL: "https://example.com/images/sarah.jpg ",
    likeCount: 8
  },
  {
    _id: "2",
    title: "Affordable Room in San Francisco",
    location: "Mission District, San Francisco",
    rentAmount: 950,
    roomType: "Single Room",
    lifestylePreferences: {
      pets: false,
      smoking: false,
      nightOwl: false
    },
    interests: ["Reading", "Yoga", "Coffee"],
    description: "Cozy single room available in a modern apartment. Ideal for professionals who value quiet evenings.",
    contactInfo: "+1 (555) 234-5678",
    availability: "Available",
    userEmail: "david@example.com",
    photoURL: "https://example.com/images/david.jpg ",
    likeCount: 5
  },
  {
    _id: "3",
    title: "Downtown LA Roommate Needed",
    location: "Downtown Los Angeles",
    rentAmount: 1100,
    roomType: "Shared Room",
    lifestylePreferences: {
      pets: false,
      smoking: true,
      nightOwl: true
    },
    interests: ["Parties", "Gaming", "Fitness"],
    description: "Furnished shared room in a lively downtown apartment. Looking for someone outgoing and easygoing.",
    contactInfo: "+1 (555) 345-6789",
    availability: "Unavailable",
    userEmail: "alex@example.com",
    photoURL: "https://example.com/images/alex.jpg ",
    likeCount: 3
  },
  {
    _id: "4",
    title: "Peaceful Roommate Needed in Seattle",
    location: "Capitol Hill, Seattle",
    rentAmount: 1050,
    roomType: "Single Room",
    lifestylePreferences: {
      pets: true,
      smoking: false,
      nightOwl: false
    },
    interests: ["Hiking", "Books", "Tea"],
    description: "Calm and tidy apartment. I enjoy reading and hiking. Looking for someone respectful and tidy.",
    contactInfo: "+1 (555) 456-7890",
    availability: "Available",
    userEmail: "emily@example.com",
    photoURL: "https://example.com/images/emily.jpg ",
    likeCount: 7
  },
  {
    _id: "5",
    title: "Apartment Share in Chicago",
    location: "Lakeview, Chicago",
    rentAmount: 1300,
    roomType: "Single Room",
    lifestylePreferences: {
      pets: true,
      smoking: false,
      nightOwl: true
    },
    interests: ["Movies", "Chill", "Gym"],
    description: "Spacious apartment with two bedrooms. Seeking a fun and responsible roommate. Netflix and chill welcome!",
    contactInfo: "+1 (555) 567-8901",
    availability: "Unavailable",
    userEmail: "james@example.com",
    photoURL: "https://example.com/images/james.jpg ",
    likeCount: 6
  },
  {
    _id: "6",
    title: "Modern Apartment in Boston",
    location: "Back Bay, Boston",
    rentAmount: 1400,
    roomType: "Single Room",
    lifestylePreferences: {
      pets: false,
      smoking: false,
      nightOwl: false
    },
    interests: ["Studying", "Art", "Walking"],
    description: "Looking for a roommate to share a luxury apartment. Quiet neighborhood, close to universities.",
    contactInfo: "+1 (555) 678-9012",
    availability: "Available",
    userEmail: "olivia@example.com",
    photoURL: "https://example.com/images/olivia.jpg ",
    likeCount: 4
  },
  {
    _id: "7",
    title: "Cozy Home in Denver",
    location: "Capitol Hill, Denver",
    rentAmount: 900,
    roomType: "Shared Room",
    lifestylePreferences: {
      pets: true,
      smoking: true,
      nightOwl: true
    },
    interests: ["Nature", "Music", "Dogs"],
    description: "A laid-back space with a dog-friendly policy. Looking for a roommate who loves nature and music.",
    contactInfo: "+1 (555) 789-0123",
    availability: "Available",
    userEmail: "liam@example.com",
    photoURL: "https://example.com/images/liam.jpg ",
    likeCount: 2
  },
  {
    _id: "8",
    title: "Room for Rent in Downtown Miami",
    location: "Downtown Miami",
    rentAmount: 1500,
    roomType: "Single Room",
    lifestylePreferences: {
      pets: false,
      smoking: true,
      nightOwl: true
    },
    interests: ["Nightlife", "Travel", "Fashion"],
    description: "Luxury high-rise apartment. Looking for someone who enjoys nightlife and city life.",
    contactInfo: "+1 (555) 890-1234",
    availability: "Unavailable",
    userEmail: "noah@example.com",
    photoURL: "https://example.com/images/noah.jpg ",
    likeCount: 5
  },
  {
    _id: "9",
    title: "Quiet Room in Portland",
    location: "Pearl District, Portland",
    rentAmount: 1000,
    roomType: "Single Room",
    lifestylePreferences: {
      pets: false,
      smoking: false,
      nightOwl: false
    },
    interests: ["Writing", "Meditation", "Plants"],
    description: "Ideal for introverts or remote workers. Peaceful environment and lots of natural light.",
    contactInfo: "+1 (555) 901-2345",
    availability: "Available",
    userEmail: "sophia@example.com",
    photoURL: "https://example.com/images/sophia.jpg ",
    likeCount: 6
  },
  {
    _id: "10",
    title: "Student-Friendly Room in Austin",
    location: "University Neighborhood, Austin",
    rentAmount: 800,
    roomType: "Shared Room",
    lifestylePreferences: {
      pets: true,
      smoking: false,
      nightOwl: true
    },
    interests: ["Study Groups", "Biking", "BBQ"],
    description: "Great for students. Close to campus and many amenities nearby. Looking for someone sociable.",
    contactInfo: "+1 (555) 012-3456",
    availability: "Unavailable",
    userEmail: "ethan@example.com",
    photoURL: "https://example.com/images/ethan.jpg ",
    likeCount: 4
  }
];

export default listingsData;