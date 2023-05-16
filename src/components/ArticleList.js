import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const postElement = posts.map((obj) => {
        return <Article key={obj.id} title={obj.title} date={obj.date} preview={obj.preview} />
    })
    return <main>
        {postElement}
    </main>
};

export default ArticleList;