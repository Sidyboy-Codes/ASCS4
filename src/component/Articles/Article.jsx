import React from "react";
import "./Article.css";

// assets
import tempArticle from "../../assets/Temp-article.jpg";

// things to do
// dynamic article img and link

const Article = () => {
  return (
    <section id="article">
      <h1>Recent News</h1>
      <div className="article__container">
        {[...Array(8)].map((x, i) => (
          <a href="https://www.sportsnet.ca/nba/article/bold-basketball-predictions-for-2023-raptors-make-a-splash-as-trade-deadline-buyers/">
            <div className="article__card">
              <div className="article__card__img">
                <img src={tempArticle} />
              </div>
              <div className="article__card__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque obcaecati minus corrupti voluptates dolores voluptatibus?</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Article;
