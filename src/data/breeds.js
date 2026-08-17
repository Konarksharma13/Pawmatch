const breeds = [
  {
    id: 1,
    name: "Golden Retriever",
    image: "/dog-pics/1.jpg",
    traits: ["Friendly", "Loyal", "Playful"],
    energy: "High",
    size: "Large",
    lifespan: "10-12 years",
    description:
      "A gentle and intelligent family companion known for loyalty, patience, and affection.",
    goodFor: "Families, first-time owners, therapy work",
    exercise: "Daily walks, play sessions, swimming"
  },

  {
    id: 2,
    name: "Labrador Retriever",
    image: "/dog-pics/2.jpg",
    traits: ["Outgoing", "Reliable", "Active"],
    energy: "High",
    size: "Large",
    lifespan: "10-14 years",
    description:
      "A friendly and energetic breed that loves people, games, and learning new things.",
    goodFor: "Families, active owners, beginners",
    exercise: "Long walks, fetch, outdoor activities"
  },

  {
    id: 3,
    name: "German Shepherd",
    image: "/dog-pics/3.jpg",
    traits: ["Protective", "Smart", "Confident"],
    energy: "High",
    size: "Large",
    lifespan: "9-13 years",
    description:
      "A highly intelligent working breed famous for loyalty and trainability.",
    goodFor: "Experienced owners, active households",
    exercise: "Training, running, mental challenges"
  },

  {
    id: 4,
    name: "Siberian Husky",
    image: "/dog-pics/4.jpg",
    traits: ["Adventurous", "Energetic", "Independent"],
    energy: "High",
    size: "Medium",
    lifespan: "12-14 years",
    description:
      "A beautiful and energetic breed built for endurance and exploration.",
    goodFor: "Active owners, outdoor lovers",
    exercise: "Long walks, running, adventure activities"
  },

  {
    id: 5,
    name: "Beagle",
    image: "/dog-pics/5.jpg",
    traits: ["Curious", "Friendly", "Playful"],
    energy: "Medium",
    size: "Small",
    lifespan: "12-15 years",
    description:
      "A cheerful scent hound with a curious mind and lovable personality.",
    goodFor: "Families, apartment owners",
    exercise: "Walks, sniffing games, play"
  },

  {
    id: 6,
    name: "Shiba Inu",
    image: "/dog-pics/6.jpg",
    traits: ["Independent", "Clever", "Confident"],
    energy: "Medium",
    size: "Small",
    lifespan: "13-16 years",
    description:
      "A Japanese breed known for independence, intelligence, and charm.",
    goodFor: "Experienced owners, quieter homes",
    exercise: "Daily walks and mental stimulation"
  },

  {
    id: 7,
    name: "Corgi",
    image: "/dog-pics/7.jpg",
    traits: ["Funny", "Smart", "Social"],
    energy: "Medium",
    size: "Small",
    lifespan: "12-15 years",
    description:
      "A small herding dog with a huge personality and playful attitude.",
    goodFor: "Families, apartment living",
    exercise: "Daily play and moderate walks"
  },

  {
    id: 8,
    name: "Poodle",
    image: "/dog-pics/8.jpg",
    traits: ["Intelligent", "Elegant", "Trainable"],
    energy: "High",
    size: "Medium",
    lifespan: "12-15 years",
    description:
      "A clever and athletic breed known for intelligence and low shedding.",
    goodFor: "Active families, smart dog lovers",
    exercise: "Training, games, mental challenges"
  },

  {
    id: 9,
    name: "Dachshund",
    image: "/dog-pics/9.jpg",
    traits: ["Brave", "Curious", "Playful"],
    energy: "Medium",
    size: "Small",
    lifespan: "12-16 years",
    description:
      "A small but fearless breed with a big personality.",
    goodFor: "Apartment owners, playful families",
    exercise: "Short walks and indoor games"
  },

  {
    id: 10,
    name: "Border Collie",
    image: "/dog-pics/10.jpg",
    traits: ["Genius", "Focused", "Energetic"],
    energy: "High",
    size: "Medium",
    lifespan: "12-15 years",
    description:
      "One of the smartest dog breeds, famous for learning quickly.",
    goodFor: "Very active owners and trainers",
    exercise: "Advanced training, running, puzzles"
  },
  {
  id: 11,
  name: "French Bulldog",
  image: "/dog-pics/11.jpg",
  traits: ["Affectionate", "Funny", "Relaxed"],
  energy: "Low",
  size: "Small",
  lifespan: "10-12 years",
  description:
    "A charming companion known for its playful personality and love for people.",
  goodFor: "Apartment owners, relaxed households",
  exercise: "Short walks and indoor play"
},

{
  id: 12,
  name: "Pug",
  image: "/dog-pics/12.jpg",
  traits: ["Funny", "Loving", "Social"],
  energy: "Low",
  size: "Small",
  lifespan: "12-15 years",
  description:
    "A cheerful little companion famous for its expressive face and big personality.",
  goodFor: "Families, apartment living",
  exercise: "Light walks and play sessions"
},

{
  id: 13,
  name: "Rottweiler",
  image: "/dog-pics/13.jpg",
  traits: ["Loyal", "Protective", "Confident"],
  energy: "High",
  size: "Large",
  lifespan: "9-10 years",
  description:
    "A powerful and devoted breed known for confidence and strong bonds with owners.",
  goodFor: "Experienced owners, active families",
  exercise: "Training, walks, strength activities"
},

{
  id: 14,
  name: "Doberman Pinscher",
  image: "/dog-pics/14.jpg",
  traits: ["Alert", "Intelligent", "Loyal"],
  energy: "High",
  size: "Large",
  lifespan: "10-13 years",
  description:
    "An elegant and intelligent working dog with strong protective instincts.",
  goodFor: "Active owners, experienced handlers",
  exercise: "Running, training, mental games"
},

{
  id: 15,
  name: "Great Dane",
  image: "/dog-pics/15.jpg",
  traits: ["Gentle", "Friendly", "Calm"],
  energy: "Medium",
  size: "Giant",
  lifespan: "7-10 years",
  description:
    "A giant breed with a surprisingly gentle and affectionate personality.",
  goodFor: "Families with space",
  exercise: "Moderate walks and relaxed activity"
},

{
  id: 16,
  name: "Saint Bernard",
  image: "/dog-pics/16.jpg",
  traits: ["Gentle", "Patient", "Loyal"],
  energy: "Low",
  size: "Giant",
  lifespan: "8-10 years",
  description:
    "A famous rescue breed known for kindness and calm temperament.",
  goodFor: "Families, large homes",
  exercise: "Moderate walks"
},

{
  id: 17,
  name: "Boxer",
  image: "/dog-pics/17.jpg",
  traits: ["Playful", "Energetic", "Protective"],
  energy: "High",
  size: "Large",
  lifespan: "10-12 years",
  description:
    "A fun-loving and athletic breed with endless enthusiasm.",
  goodFor: "Active families",
  exercise: "Games, running, training"
},

{
  id: 18,
  name: "Yorkshire Terrier",
  image: "/dog-pics/18.jpg",
  traits: ["Bold", "Lively", "Affectionate"],
  energy: "Medium",
  size: "Small",
  lifespan: "13-16 years",
  description:
    "A tiny companion with a confident personality and lots of energy.",
  goodFor: "Apartment owners",
  exercise: "Short walks and indoor play"
},

{
  id: 19,
  name: "Maltese",
  image: "/dog-pics/19.jpg",
  traits: ["Gentle", "Playful", "Loving"],
  energy: "Medium",
  size: "Small",
  lifespan: "12-15 years",
  description:
    "A sweet companion breed known for affection and elegant appearance.",
  goodFor: "Families, seniors, apartment owners",
  exercise: "Light walks and play"
},

{
  id: 20,
  name: "Chihuahua",
  image: "/dog-pics/20.jpg",
  traits: ["Brave", "Alert", "Loyal"],
  energy: "Medium",
  size: "Tiny",
  lifespan: "14-17 years",
  description:
    "A tiny dog with a huge personality and strong attachment to owners.",
  goodFor: "Apartment owners, experienced small-dog owners",
  exercise: "Short walks and indoor games"
},
{
  id: 21,
  name: "Shih Tzu",
  image: "/dog-pics/21.jpg",
  traits: ["Affectionate", "Friendly", "Calm"],
  energy: "Low",
  size: "Small",
  lifespan: "10-18 years",
  description:
    "A loving companion breed known for its gentle nature and strong bond with humans.",
  goodFor: "Families, seniors, apartment owners",
  exercise: "Short walks and indoor play"
},

{
  id: 22,
  name: "Samoyed",
  image: "/dog-pics/22.jpg",
  traits: ["Friendly", "Happy", "Energetic"],
  energy: "High",
  size: "Medium",
  lifespan: "12-14 years",
  description:
    "A fluffy and cheerful breed famous for its smile and friendly personality.",
  goodFor: "Active families, cold climates",
  exercise: "Daily activity and play"
},

{
  id: 23,
  name: "Akita Inu",
  image: "/dog-pics/23.jpg",
  traits: ["Loyal", "Dignified", "Independent"],
  energy: "Medium",
  size: "Large",
  lifespan: "10-15 years",
  description:
    "A Japanese breed known for loyalty, courage, and a calm presence.",
  goodFor: "Experienced owners",
  exercise: "Daily walks and training"
},

{
  id: 24,
  name: "Bernese Mountain Dog",
  image: "/dog-pics/24.jpg",
  traits: ["Gentle", "Loyal", "Calm"],
  energy: "Medium",
  size: "Large",
  lifespan: "7-10 years",
  description:
    "A gentle giant known for affection and a calm family-friendly nature.",
  goodFor: "Families with space",
  exercise: "Moderate walks and outdoor time"
},

{
  id: 25,
  name: "Newfoundland",
  image: "/dog-pics/25.jpg",
  traits: ["Gentle", "Patient", "Protective"],
  energy: "Medium",
  size: "Giant",
  lifespan: "9-10 years",
  description:
    "A sweet giant breed famous for kindness and swimming ability.",
  goodFor: "Families, large homes",
  exercise: "Swimming and moderate walks"
},

{
  id: 26,
  name: "Cavalier King Charles Spaniel",
  image: "/dog-pics/26.jpg",
  traits: ["Gentle", "Social", "Affectionate"],
  energy: "Medium",
  size: "Small",
  lifespan: "12-15 years",
  description:
    "A charming companion breed that loves being close to people.",
  goodFor: "Families, first-time owners",
  exercise: "Daily walks and play"
},

{
  id: 27,
  name: "Boston Terrier",
  image: "/dog-pics/27.jpg",
  traits: ["Funny", "Friendly", "Smart"],
  energy: "Medium",
  size: "Small",
  lifespan: "11-13 years",
  description:
    "A lively and affectionate companion often called the American Gentleman.",
  goodFor: "Apartment owners, families",
  exercise: "Short walks and games"
},

{
  id: 28,
  name: "Jack Russell Terrier",
  image: "/dog-pics/28.jpg",
  traits: ["Energetic", "Brave", "Curious"],
  energy: "High",
  size: "Small",
  lifespan: "13-16 years",
  description:
    "A small but energetic hunting breed with a fearless personality.",
  goodFor: "Active owners",
  exercise: "High activity and mental games"
},

{
  id: 29,
  name: "Basset Hound",
  image: "/dog-pics/29.jpg",
  traits: ["Relaxed", "Loyal", "Friendly"],
  energy: "Low",
  size: "Medium",
  lifespan: "10-12 years",
  description:
    "A gentle scent hound known for patience and a laid-back personality.",
  goodFor: "Families, relaxed households",
  exercise: "Moderate walks"
},

{
  id: 30,
  name: "Greyhound",
  image: "/dog-pics/30.jpg",
  traits: ["Gentle", "Calm", "Athletic"],
  energy: "Medium",
  size: "Large",
  lifespan: "10-14 years",
  description:
    "A fast but surprisingly relaxed breed that loves quiet companionship.",
  goodFor: "Calm homes, experienced owners",
  exercise: "Short bursts of activity and walks"
},
// {
//   id: 31,
//   name: "Whippet",
//   image: "/dogs/whippet.jpg",
//   traits: ["Gentle", "Fast", "Calm"],
//   energy: "Medium",
//   size: "Medium",
//   lifespan: "12-15 years",
//   description:
//     "A graceful and affectionate breed known for speed outdoors and calm behavior indoors.",
//   goodFor: "Active families, apartment owners",
//   exercise: "Short runs and daily walks"
// },

// {
//   id: 32,
//   name: "Afghan Hound",
//   image: "/dogs/afghan-hound.jpg",
//   traits: ["Elegant", "Independent", "Sensitive"],
//   energy: "Medium",
//   size: "Large",
//   lifespan: "12-14 years",
//   description:
//     "An ancient breed known for beauty, independence, and unique personality.",
//   goodFor: "Experienced owners",
//   exercise: "Regular walks and open space"
// },

// {
//   id: 33,
//   name: "Dalmatian",
//   image: "/dogs/dalmatian.jpg",
//   traits: ["Energetic", "Playful", "Alert"],
//   energy: "High",
//   size: "Large",
//   lifespan: "11-13 years",
//   description:
//     "A recognizable spotted breed full of energy and enthusiasm.",
//   goodFor: "Active families",
//   exercise: "Running, games, outdoor activities"
// },

// {
//   id: 34,
//   name: "Cane Corso",
//   image: "/dogs/cane-corso.jpg",
//   traits: ["Protective", "Confident", "Loyal"],
//   energy: "High",
//   size: "Large",
//   lifespan: "9-12 years",
//   description:
//     "A powerful Italian guardian breed known for loyalty and confidence.",
//   goodFor: "Experienced owners",
//   exercise: "Training and structured exercise"
// },

// {
//   id: 35,
//   name: "Alaskan Malamute",
//   image: "/dogs/alaskan-malamute.jpg",
//   traits: ["Strong", "Friendly", "Adventurous"],
//   energy: "High",
//   size: "Large",
//   lifespan: "10-14 years",
//   description:
//     "A strong northern breed built for endurance and companionship.",
//   goodFor: "Active owners, outdoor lovers",
//   exercise: "Long walks and outdoor activities"
// },

// {
//   id: 36,
//   name: "Australian Shepherd",
//   image: "/dogs/australian-shepherd.jpg",
//   traits: ["Intelligent", "Energetic", "Focused"],
//   energy: "High",
//   size: "Medium",
//   lifespan: "12-15 years",
//   description:
//     "A highly intelligent herding breed that loves learning and activity.",
//   goodFor: "Active families and trainers",
//   exercise: "Training, games, agility"
// },

// {
//   id: 37,
//   name: "Australian Cattle Dog",
//   image: "/dogs/australian-cattle-dog.jpg",
//   traits: ["Hardworking", "Loyal", "Alert"],
//   energy: "High",
//   size: "Medium",
//   lifespan: "12-16 years",
//   description:
//     "A hardworking and energetic breed built for herding and adventure.",
//   goodFor: "Very active owners",
//   exercise: "Heavy exercise and training"
// },

// {
//   id: 38,
//   name: "Belgian Malinois",
//   image: "/dogs/belgian-malinois.jpg",
//   traits: ["Intelligent", "Driven", "Protective"],
//   energy: "High",
//   size: "Medium",
//   lifespan: "12-14 years",
//   description:
//     "A focused working dog known for intelligence and athletic ability.",
//   goodFor: "Experienced handlers",
//   exercise: "Advanced training and activity"
// },

// {
//   id: 39,
//   name: "Miniature Schnauzer",
//   image: "/dogs/miniature-schnauzer.jpg",
//   traits: ["Alert", "Friendly", "Smart"],
//   energy: "Medium",
//   size: "Small",
//   lifespan: "12-15 years",
//   description:
//     "A lively small breed with a confident personality and playful nature.",
//   goodFor: "Families and apartment owners",
//   exercise: "Daily walks and games"
// },

// {
//   id: 40,
//   name: "Havanese",
//   image: "/dogs/havanese.jpg",
//   traits: ["Cheerful", "Social", "Affectionate"],
//   energy: "Medium",
//   size: "Small",
//   lifespan: "14-16 years",
//   description:
//     "A friendly companion breed known for happiness and strong attachment to people.",
//   goodFor: "Families, first-time owners",
//   exercise: "Play and moderate walks"
// },
// {
//   id: 41,
//   name: "Papillon",
//   image: "/dogs/papillon.jpg",
//   traits: ["Intelligent", "Playful", "Alert"],
//   energy: "Medium",
//   size: "Small",
//   lifespan: "14-16 years",
//   description:
//     "A tiny but clever companion known for intelligence and a cheerful personality.",
//   goodFor: "Families, apartment owners",
//   exercise: "Play sessions and daily walks"
// },

// {
//   id: 42,
//   name: "Weimaraner",
//   image: "/dogs/weimaraner.jpg",
//   traits: ["Energetic", "Loyal", "Athletic"],
//   energy: "High",
//   size: "Large",
//   lifespan: "10-13 years",
//   description:
//     "A graceful hunting breed known for energy, loyalty, and affection.",
//   goodFor: "Active owners, outdoor lovers",
//   exercise: "Running, hiking, training"
// },

// {
//   id: 43,
//   name: "Vizsla",
//   image: "/dogs/vizsla.jpg",
//   traits: ["Affectionate", "Active", "Gentle"],
//   energy: "High",
//   size: "Medium",
//   lifespan: "12-14 years",
//   description:
//     "A loving and athletic breed that forms very strong bonds with humans.",
//   goodFor: "Active families and runners",
//   exercise: "Long walks, running, games"
// },

// {
//   id: 44,
//   name: "Rhodesian Ridgeback",
//   image: "/dogs/rhodesian-ridgeback.jpg",
//   traits: ["Brave", "Independent", "Loyal"],
//   energy: "High",
//   size: "Large",
//   lifespan: "10-12 years",
//   description:
//     "A powerful African breed known for courage and independence.",
//   goodFor: "Experienced active owners",
//   exercise: "Running and outdoor activities"
// },

// {
//   id: 45,
//   name: "Irish Setter",
//   image: "/dogs/irish-setter.jpg",
//   traits: ["Friendly", "Energetic", "Playful"],
//   energy: "High",
//   size: "Large",
//   lifespan: "12-15 years",
//   description:
//     "A cheerful and elegant breed known for its friendly personality.",
//   goodFor: "Active families",
//   exercise: "Daily activity and outdoor play"
// },

// {
//   id: 46,
//   name: "English Setter",
//   image: "/dogs/english-setter.jpg",
//   traits: ["Gentle", "Friendly", "Calm"],
//   energy: "Medium",
//   size: "Large",
//   lifespan: "10-12 years",
//   description:
//     "A gentle hunting breed with a calm and affectionate temperament.",
//   goodFor: "Families and outdoor lovers",
//   exercise: "Walks and outdoor exploration"
// },

// {
//   id: 47,
//   name: "American Staffordshire Terrier",
//   image: "/dogs/american-staffordshire-terrier.jpg",
//   traits: ["Confident", "Loyal", "Affectionate"],
//   energy: "Medium",
//   size: "Medium",
//   lifespan: "12-16 years",
//   description:
//     "A strong and affectionate companion known for loyalty and confidence.",
//   goodFor: "Responsible experienced owners",
//   exercise: "Play, walks, training"
// },

// {
//   id: 48,
//   name: "Bull Terrier",
//   image: "/dogs/bull-terrier.jpg",
//   traits: ["Playful", "Funny", "Brave"],
//   energy: "Medium",
//   size: "Medium",
//   lifespan: "10-14 years",
//   description:
//     "A unique-looking breed with a playful and entertaining personality.",
//   goodFor: "Active households",
//   exercise: "Games and daily walks"
// },

// {
//   id: 49,
//   name: "Basenji",
//   image: "/dogs/basenji.jpg",
//   traits: ["Independent", "Curious", "Clean"],
//   energy: "Medium",
//   size: "Small",
//   lifespan: "13-14 years",
//   description:
//     "An ancient African breed known for independence and quiet nature.",
//   goodFor: "Experienced owners",
//   exercise: "Walks and mental stimulation"
// },

// {
//   id: 50,
//   name: "Chow Chow",
//   image: "/dogs/chow-chow.jpg",
//   traits: ["Independent", "Loyal", "Calm"],
//   energy: "Low",
//   size: "Medium",
//   lifespan: "8-12 years",
//   description:
//     "A distinctive breed known for its lion-like appearance and reserved personality.",
//   goodFor: "Experienced owners, quieter homes",
//   exercise: "Moderate walks"
// }
];


export default breeds;