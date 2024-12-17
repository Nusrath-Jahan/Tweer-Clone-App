import React, { useState, useEffect, createContext } from "react";
import TweetInput from "./TweetInput";
import TweetList from "./TweetList";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import "./App.css";

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({
    name: "User",
    profilePicture: "user.jpg",
  });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const formattedTweets = data.map((post) => ({
          id: post.id,
          content: post.body,
          user: { name: "API User", profilePicture: "default.jpg" },
        }));
        setTweets(formattedTweets);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };
    fetchTweets();
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <>
      <AppContext.Provider value={{ user, theme, setTheme }}>
        <div className={`app ${theme}`}>
          <button
            className="toggle-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
          <Sidebar />
          <main>
            <Profile />
            <TweetInput addTweet={addTweet} />
            <TweetList tweets={tweets} />
          </main>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
