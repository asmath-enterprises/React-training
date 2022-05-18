import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
import Blogcarousel from "components/carousel";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/article/")
      .then((response) => {
        const { data } = response;
        setArticles(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      {articles.map((article, index) => (
        <Blogcarousel
          key={index}
          title={article.title}
          content={article.content}
        />
      ))}

      <Footer />
    </div>
  );
};

export default Home;
