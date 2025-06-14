
import React, { useState, useEffect } from 'react';

const RecentSubmissions = () => {
  const [currentSubmission, setCurrentSubmission] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const indianNames = [
  "Arjun", "Priya", "Rahul", "Ananya", "Vikram", "Shreya", "Aditya", "Kavya", 
  "Rohan", "Meera", "Karan", "Riya", "Sidharth", "Pooja", "Aryan", "Neha",
  "Varun", "Isha", "Akash", "Divya", "Harsh", "Tanya", "Nikhil", "Sakshi",
  "Dev", "Kritika", "Yash", "Aditi", "Arnav", "Simran",
  "Aman", "Tarun", "Manav", "Ishaan", "Dhruv", "Kunal", "Jai", "Parth",
  "Saurav", "Tejas", "Ankit", "Nishant", "Abhay", "Rajat", "Uday",
  "Naina", "Sneha", "Anushka", "Bhavya", "Diya", "Trisha", "Lavanya", "Sanika",
  "Radhika", "Malvika", "Charvi", "Tanvi", "Mahi", "Ishita", "Jhanvi"
];

  const cities = ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Faridabad", "Gurgaon"];

  const getRandomSubmission = () => {
    const randomName = indianNames[Math.floor(Math.random() * indianNames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    return { name: randomName, city: randomCity };
  };

  const [submissions] = useState(() => 
    Array.from({ length: 10 }, getRandomSubmission)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentSubmission((prev) => (prev + 1) % submissions.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [submissions.length]);

  const currentData = submissions[currentSubmission];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className={`
          bg-black/90 border-stranger-red border-2 rounded-lg p-3 backdrop-blur-sm
          transition-all duration-300 ease-in-out transform
          ${isVisible ? 'translate-x-0 opacity-90' : 'translate-x-full opacity-0'}
          min-w-[220px] max-w-[260px]
        `}
      >
        <div className="text-center">
          <div className="font-stranger text-white text-base font-semibold mb-1">
            {currentData.name} from {currentData.city}
          </div>
          <div className="font-stranger text-white/70 text-xs">
            just filled the form
          </div>
        </div>
        
        {/* Small glow effect */}
        <div className="absolute -inset-1 bg-stranger-red/20 rounded-lg blur-sm -z-10" />
      </div>
    </div>
  );
};

export default RecentSubmissions;
