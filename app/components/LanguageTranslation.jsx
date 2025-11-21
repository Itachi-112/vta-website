import React from 'react';
// Using lucide-react for a nice icon
// Note: In a real app, you'd install and import this.
// A mock is provided below for this environment.

// Data for the language cards, sorted alphabetically
// Added 'Swahili'
const languages = [
    'Arabic', 'Bengali', 'Chinese', 'Czech', 'English', 'French', 'German',
    'Gujarati', 'Hindi', 'Indonesian', 'Italian', 'Japanese', 'Kannada',
    'Korean', 'Malayalam', 'Marathi', 'Polish', 'Portuguese', 'Punjabi',
    'Russian', 'Spanish', 'Swahili', 'Tamil', 'Telugu', 'Turkish', 'Turkish',
    'Ukrainian', 'Urdu', 'Uzbek', 'Vietnamese'
];

/**
 * A reusable card component for displaying a language.
 * * Improvements:
 * - Added 'group' to the parent div.
 * - On hover, the text color now also changes to 'text-[#56b4e9]'.
 * - Increased card size with more padding (py-5 px-4).
 * - Reverted to white background with blue text.
 */
const LanguageCard = ({ name }) => (
    <div className="group bg-white rounded-lg text-center font-medium shadow-md
                  hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] 
                  transition-all duration-300 ease-in-out cursor-pointer">
        <div className="py-5 px-4 text-blue-900 group-hover:text-[#56b4e9] transition-colors duration-300 ease-in-out">
            {name}
        </div>
    </div>
);

/**
 * The main component that renders the entire section.
 * * Improvements:
 * - Removed the footer.
 * - The main div now uses 'flex-col min-h-screen' to ensure the layout fills the viewport.
 * - The language grid section now has 'flex-grow' to take up remaining space.
 * - Title section has more padding ('py-24') for a 'hero' feel.
 * - Removed the Globe icon.
 * - Removed the subtitle paragraph.
 * - Language grid section has a gradient background and more padding.
 * - Grid gap is increased to 'gap-6'.
 */
export default function App() {
    return (
        <>
            {/* Import Inter font from Google Fonts */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
            </style>

            {/* Main wrapper: Ensures full height and flex-col layout */}
            <div className="grow flex flex-col antialiased bg-gray-50">

                {/* Main content area */}
                <main className="flex flex-col grow">

                    {/* 1. Title Section (White Background) */}
                    <section className="py-16 bg-gray-50 text-center shadow-sm z-10">
                        <div className="flex justify-center items-center">
                            <h1 className="text-4xl md:text-5xl font-extrabold font-sans text-[#56b4e9]">
                               <span className='text-[#2f486b]'>L</span>anguages We Translate
                            </h1>
                        </div>

                        {/* Decorative dashes */}
                        <div className="flex justify-center items-center mt-0 space-x-2">
                            <span className="mx-0 mb-0 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></span>
                            <span className="mx-0 mb-0 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></span>
                            <span className="mx-0 mb-0 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></span>
                            <span className="mx-0 mb-0 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></span>
                        </div>
                        
                    </section>

                    {/* 2. Language Grid Section (Blue Gradient Background) */}
                    {/* 'flex-grow' makes this section fill the remaining vertical space */}
                    <section className="border-white rounded-4xl bg-linear-to-b from-[#56b4e9] to-[#56b4e9] pt-12 pb-20 px-4 sm:px-8">
                        {/* Max-width container to center the grid */}
                        <div className="max-w-7xl mx-auto">

                            {/* New Title Block (inside blue section) - REMOVED */}

                            {/* Responsive Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-9">
                                {/* Map over the languages array to create a card for each */}
                                {languages.map((language, index) => (
                                    <LanguageCard key={`${language}-${index}`} name={language} />
                                ))}
                            </div>
                        </div>
                    </section>

                </main>

                {/* Footer has been removed */}

            </div>
        </>
    );
}








