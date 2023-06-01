import React, { useState } from 'react';
import Header from '@/components/header';
import { Parallax, Background } from 'react-parallax';
import ReactMarkdown from 'react-markdown'

import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Blog({allPostsData}) {

  const [activePost, setActivePost] = useState(allPostsData[0]);

  return (
    <div className="page-wrapper bg-rosebrown">
      <Header />

      <div className="blog-index-container">
        {allPostsData.map(post => (
          <div className="blog-preview-card" onClick={() => setActivePost(post)} key={post.id} >
            <img className="blog-preview-image" src={post.image} />
            <p className="blog-preview-header">{post.title}</p>
            <p className="blog-preview-date">{post.date}</p>
            <div className="blog-preview-content">
              <ReactMarkdown children={post.content} />
            </div>
          </div>
        ))}
      </div>

      {activePost ? (
        <div className="modal-background" onClick={() => setActivePost(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="parallax-container ">
            <Parallax className="w-full h-full" strength={500}>
              <Background className="image-container">
                <img className="max-w-full min-w-w-screen" src="/img/stockHeader.jpg"></img>
              </Background>

              <div className="parallax-foreground-container">
                <img className="jg-logo" src="/img/jgspecialty.png" />
                <span className='tagline'>Excellence in Chemistry, Affordable by Design</span>
              </div>
              
              {/* <div class="gradient-black"/> */}
            </Parallax>
            </div>
            <p className="blogpost-header">{activePost.title}</p>
            <p className="blogpost-date">{activePost.date}</p>
            <div className="blogpost-content">
              <ReactMarkdown children={activePost.content} />
              <ReactMarkdown children={activePost.content} />
            </div>
          </div>
        </div>
      ) : null}
      
        
    </div>
  )
}