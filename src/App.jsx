import React from "react";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Mon Média</h1>
        <ArticleList />
      </div>

      <footer className="text-center text-gray-500 py-6">
        © {new Date().getFullYear()} VotreMédia - Tous droits réservés
      </footer>
    </>
  );
}

export default App;
