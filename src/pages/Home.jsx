import React from 'react';
import Typical from 'react-typical';
import downCaret from '../images/down_caret.svg';

export const Home = () => {
  
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const ref = params.get('ref');
  const decoded = ref ? atob(params.get('ref')) : "";

  return (
    <section id="home">
      <Typical
        steps={[`Hello ${decoded ? decoded : 'world'}!`, 4000, 
                'My name is Josiah Lansford.', 2000, 
                "I'm a React", 200,
                "I'm a Qt", 300,
                "I'm a Python", 200,
                "I'm a UI", 300,
                "I'm a full-stack web developer.", 5000,
                "I'm a full-stack web developer (I even figured out how to center this div).", 2000]}
        loop={Infinity}
        wrapper="h1"
      />
      <img id="caret" src={downCaret} alt="" />
    </section>
  )
}
