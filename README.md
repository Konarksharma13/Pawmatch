# 🐾 PawMatch - Find Your Perfect Dog Companion

**PawMatch** is an interactive dog breed discovery platform designed for International Dog Day. Explore diverse dog breeds, learn their unique personalities, and find the perfect companion that matches your lifestyle and preferences.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-teal?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🔍 **Intelligent Search & Filtering**
- Search breeds by name in real-time
- Filter by energy level (Low, Medium, High)
- Responsive search results with instant feedback

### ❤️ **Favorites Management**
- Save your favorite breeds with a single click
- Favorites persist across sessions using localStorage
- Quick visual indicators for favorited breeds

### 🆚 **Breed Comparison**
- Compare up to 2 dog breeds side-by-side
- Analyze key differences in size, energy, lifespan, and traits
- Make informed decisions about which breed suits you best

### 📊 **Comprehensive Breed Information**
- Detailed breed profiles with:
  - High-quality images
  - Personality traits
  - Size and energy levels
  - Lifespan estimates
  - Best suited living conditions
  - Exercise requirements
  
### 🎯 **Curated Selection**
- 12+ popular dog breeds included
- Each breed profile includes practical recommendations
- Information about suitability for different lifestyles

### 🎨 **Smooth Animations & Modern UI**
- Framer Motion animations for delightful interactions
- Card hover effects and modal transitions
- Responsive design that works on all devices
- Warm, dog-friendly color palette

### 🐶 **Educational Content**
- Random dog facts to learn while exploring
- Personality-based recommendations
- Tips for finding the right companion

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dog-search.git
cd dog-search

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

```bash
# Create an optimized build
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
dog-search/
├── public/
│   ├── dog-pics/          # Dog breed images
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── BreedCard.jsx      # Individual breed card component
│   │   ├── BreedGrid.jsx      # Grid layout for breeds
│   │   ├── BreedModal.jsx     # Detailed breed modal
│   │   ├── SearchBar.jsx      # Search and filter controls
│   │   ├── CompareBar.jsx     # Breed comparison interface
│   │   ├── Hero.jsx           # Hero section
│   │   ├── DogFact.jsx        # Random dog facts
│   │   └── Footer.jsx         # Footer component
│   ├── data/
│   │   └── breeds.js          # Breed database with details
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies
└── vite.config.js             # Vite configuration
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 with @tailwindcss/vite
- **Animations**: Framer Motion 13
- **Icons**: Lucide React 1.31
- **State Management**: React Hooks (useState, useEffect)
- **Linting**: ESLint 10

## 🎯 Core Components

### **App.jsx**
The main component that manages:
- Global state for favorites, search, energy filters, and comparisons
- Navigation between views
- Data filtering logic
- LocalStorage persistence

### **BreedCard.jsx**
Displays individual breed cards with:
- Breed image with smooth hover animations
- Favorite toggle button
- Personality traits
- Click-to-view-details functionality

### **BreedGrid.jsx**
Responsive grid layout that:
- Displays filtered breed cards
- Adapts to screen size
- Shows empty state when no breeds match filters

### **BreedModal.jsx**
Detailed breed information modal featuring:
- Full breed description
- Complete stats (size, energy, lifespan)
- Suitability recommendations
- Exercise requirements
- Close button and smooth transitions

### **SearchBar.jsx**
Search and filter interface with:
- Real-time text search input
- Energy level dropdown
- Responsive layout

### **CompareBar.jsx**
Side-by-side breed comparison showing:
- Side-by-side breed details
- Key differences highlighted
- Quick comparison of traits and stats

## 💾 Data Format

Each breed object includes:
```javascript
{
  id: number,
  name: string,
  image: string,
  traits: string[],
  energy: "Low" | "Medium" | "High",
  size: string,
  lifespan: string,
  description: string,
  goodFor: string,
  exercise: string
}
```

## 🎨 Styling & Design

- **Color Scheme**: Warm oranges, greens, and neutrals
- **Typography**: Bold headings with readable body text
- **Spacing**: Consistent padding and margin patterns
- **Shadows**: Subtle shadows with hover amplification
- **Responsive Breakpoints**: Mobile-first design approach

## 🚀 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build (optimized)
npm run build

# Preview production build
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 📝 Features in Detail

### Search Functionality
Type any breed name to instantly filter the displayed breeds. Search is case-insensitive.

### Energy Level Filter
Select from:
- **All Energy**: Display all breeds regardless of energy level
- **Low Energy**: Breeds suited for apartment living, less active owners
- **Medium Energy**: Balanced breeds for typical families
- **High Energy**: Breeds requiring active owners and lots of exercise

### Favorites System
Click the heart icon on any breed card to save it to favorites. Your selections are automatically saved and restored when you return.

### Breed Comparison
Click "Compare" on up to 2 breed cards to view them side-by-side and understand their differences at a glance.

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development Tips

### Adding New Breeds
Edit `src/data/breeds.js` and add a new breed object following the existing format.

### Customizing Styles
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes
- Modify Tailwind config in `tailwind.config.js`

### Environment Variables
Create a `.env` file if you need API integration in the future.

## 📦 Performance Optimizations

- Vite's fast development server with HMR
- Optimized production builds with code splitting
- Lazy-loaded components and images
- Efficient filtering algorithms

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐕 About the Project

PawMatch was created to help potential dog owners find their perfect companion by providing accurate, comprehensive information about dog breeds. Whether you're a first-time dog owner or an experienced handler, this tool helps match your lifestyle with the ideal breed.

## 🎉 Special Thanks

- 12+ dog breeds and their detailed characteristics
- Community contributions and feedback
- International Dog Day inspiration

---

**Ready to find your perfect match?** Start exploring breeds now! 🐾

For questions or suggestions, please open an issue or reach out to the community.
