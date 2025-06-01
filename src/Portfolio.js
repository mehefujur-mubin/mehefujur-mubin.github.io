import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Md Mehefujur Rahman Mubin</h1>
        <p className="text-lg text-gray-600">Machine Learning Engineer | Researcher | Data Scientist</p>
        <div className="mt-4 space-x-4">
          <a href="mailto:mehefujurmubin@gmail.com" className="text-blue-500">mehefujurmubin@gmail.com</a>
          <a href="https://linkedin.com/in/mehefujur-mubin" className="text-blue-500" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">
          CSE graduate with Data Science major. Passionate about AI, CV, and Robotics. Working at Metrosofts.se and IUB RIoT Lab.
        </p>
      </section>
    </div>
  );
}
