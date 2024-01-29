import React, { useState } from 'react';
import Article from "./article";
import CommentTitle from "./commentTitle";
import Hr from "./hr";
import Comment from './comment';
import Search from "./shopSearch";
import Featured from "./featured";

const Product: React.FC = () => {
    const [showBigArticle, setShowBigArticle] = useState(false);
  
    const toggleArticleView = () => {
      setShowBigArticle(!showBigArticle);
    };

  return (
    <>
    <Search onToggleView={toggleArticleView} />
    <Article/>
    <Hr/>
    <div className="flex flex-col items-center">
        <CommentTitle/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
    <Hr/>
    <Featured/>
    </>
  );
}

export default Product;
