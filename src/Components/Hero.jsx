import React from 'react'

import { logo } from '../assets';
import { getImageUrl } from '../utils';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <img src={logo}
           alt="sumz_logo"
           className="w-28 object-contain"/>
      <button
        type="button"
        onClick={() => window.open('https://github.com/adrianhajdin/project_ai_summarizer/blob/main/src/App.css')}
        className="black_btn">
        Github
      </button>
      </nav>
      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden"/>
        <span className= "orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading summarizer, an open-source article summarizer which
        turns lengthy articles into clear and consise summaries.
      </h2>
    </header>
  )
}

export default Hero