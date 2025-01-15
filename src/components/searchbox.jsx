import React, { useState, useEffect, useRef } from "react";
import Link  from "next/link";

// Updated predefined suggestions with more complex data
const predefinedSuggestions = [
  {
    id: 1,
    title: "دوره جامع بازسازی ساختمان",
    link: "/info/بازسازی-ساختمان",
    description: "آموزش کامل اصول و تکنیک‌های بازسازی ساختمان",
    image: "/reconstruction/1.webp"
  },
  {
    id: 2,
    title: "دوره جامع نورپردازی",
    link: "/info/نورپردازی",
    description: "یادگیری اصول طراحی نور در فضاهای داخلی و خارجی",
    image: "/Lighting/8.webp"
  },
  {
    id: 3,
    title: "مدلسازی و رندرینگ",
    link: "/info/مدلسازی-رندرینگ",
    description: "آموزش کامل مدلسازی سه بعدی و رندرینگ",
    image: "/Modeling/3.webp"
  },
];

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [suggestions, setSuggestions] = useState([]); // State for suggestions
  const suggestionsRef = useRef(null); // Ref for suggestions list
  const [inputWidth, setInputWidth] = useState("w-24"); // State for input width

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchInput(value); // Update search input state
    // Filter suggestions based on input
    if (value) {
      const filteredSuggestions = predefinedSuggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions); // Update suggestions based on input
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  const handleClickOutside = (event) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) && !event.target.closest('.relative')) {
      setSuggestions([]); // Hide suggestions when clicking outside
      setSearchInput(""); // Clear the search input when clicking outside
      setInputWidth("w-24"); // Reset width when clicking outside
    }
  };

  const handleInputFocus = () => {
    setInputWidth("w-full md:w-[140px] lg:w-[150px] xl:w-[350px] border-none"); // Responsive width on focus
  };

  const handleInputBlur = () => {
    if (!searchInput) {
      setInputWidth("w-24");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside); 
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex md:flex font-IranYekan font-normal text-sm relative w-full max-w-lg  items-center border border-accent bg-white/0 justify-between rounded-xl overflow-hidden mt-1 px-3"> {/* Styling for the search box */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={15} fill="#1DAFBE"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange} // Handle input change
          onFocus={handleInputFocus} // Handle input focus
          onBlur={handleInputBlur} // Handle input blur
          placeholder="...جستجو"
          className={`text-accent placeholder:text-accent placeholder:text-sm bg-white/0 border-none outline-none focus:ring-0 focus:ring-offset-0 p-1 transition-all duration-300 ${inputWidth} text-right `} // Apply transition and dynamic width
        />
      </div>
      {suggestions.length > 0 && (
        <ul ref={suggestionsRef} className="font-IranYekan font-normal text-sm absolute z-10 bg-background border rounded-2xl shadow-lg mt-1 w-full max-w-lg">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} className="p-2 hover:bg-accent/10 cursor-pointer">
              <Link href={suggestion.link} className="flex items-center space-x-2 rtl:space-x-reverse">
                <img src={suggestion.image} alt={suggestion.title} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1 text-right">
                  <h3 className="font-semibold">{suggestion.title}</h3>
                  <p className="text-xs text-gray-600 truncate">{suggestion.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
