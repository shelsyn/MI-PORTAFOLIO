import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';


const Hero = () => {
  const [name, setName] = useState('');
  const fullName = 'Shelsyn Guio';

  useEffect(() => {
    const typingDelay = 100; // Retardo entre cada caracter
    const deletingDelay = 50; // Retardo al borrar caracteres
    const newLineDelay = 1000; // Retardo después de escribir el nombre completo

    let currentName = '';
    let isDeleting = false;
    let charIndex = 0;

    const type = () => {
      const currentChar = fullName[charIndex];

      if (isDeleting) {
        currentName = currentName.slice(0, -1);
      } else {
        currentName = fullName.slice(0, charIndex + 1);
      }

      setName(currentName);

      if (!isDeleting && charIndex === fullName.length - 1) {
        isDeleting = true;
        setTimeout(() => {
          isDeleting = false;
          charIndex = 0;
          setName('');
          setTimeout(type, typingDelay);
        }, newLineDelay);
      } else if (isDeleting && currentName === '') {
        charIndex = 0;
        setTimeout(type, typingDelay);
      } else {
        charIndex += isDeleting ? -1 : 1;
        setTimeout(type, isDeleting ? deletingDelay : typingDelay);
      }
    };

    const initialTypingDelay = 1500; // Retardo antes de comenzar a escribir
    setTimeout(type, initialTypingDelay);
  }, []);

  return (
    <section className={`relative w-full h-[70vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c3a7ff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
  
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#c3a7ff]">{name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Passionate software engineer experienced in <br className="sm:block hidden" />
            innovative tech solutions.
          </p>
        </div>
      </div>
    </section>
  );
  
};

export default Hero;
