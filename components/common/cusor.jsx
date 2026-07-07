'use client';
import React, { useEffect } from 'react';

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return undefined;

    const animateit = function (e) {
      const hoverAnim = this.querySelector('.hover-anim');
      if (!hoverAnim) return;

      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    const activateCursor = () => cursor.classList.add('cursor-active');
    const deactivateCursor = () => cursor.classList.remove('cursor-active');

    const hoverTargets = document.querySelectorAll('.hover-this');
    const pointerTargets = document.querySelectorAll('a, .cursor-pointer');

    hoverTargets.forEach((element) => {
      element.addEventListener('mousemove', animateit);
      element.addEventListener('mouseleave', animateit);
    });

    pointerTargets.forEach((element) => {
      element.addEventListener('mouseenter', activateCursor);
      element.addEventListener('mouseleave', deactivateCursor);
    });

    window.addEventListener('mousemove', editCursor);

    return () => {
      hoverTargets.forEach((element) => {
        element.removeEventListener('mousemove', animateit);
        element.removeEventListener('mouseleave', animateit);
      });

      pointerTargets.forEach((element) => {
        element.removeEventListener('mouseenter', activateCursor);
        element.removeEventListener('mouseleave', deactivateCursor);
      });

      window.removeEventListener('mousemove', editCursor);
    };
  }, []);

  return <div className="cursor"></div>;
}

export default Cursor;
