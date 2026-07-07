'use client';
import { useEffect } from 'react';

function Animations() {
  useEffect(() => {
    document.documentElement.classList.add('js-anim');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in-view'));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el, i) => {
      if (!el.style.getPropertyValue('--reveal-delay')) {
        el.style.setProperty('--reveal-delay', `${Math.min(i % 6, 5) * 0.08}s`);
      }
      revealObserver.observe(el);
    });

    document.querySelectorAll('.split-heading').forEach((heading) => {
      if (heading.children.length > 0) return;
      const text = heading.textContent?.trim() || '';
      heading.textContent = '';
      heading.setAttribute('aria-label', text);

      const words = text.split(/\s+/);
      words.forEach((word, wi) => {
        const line = document.createElement('span');
        line.className = 'split-line';
        line.setAttribute('aria-hidden', 'true');

        const inner = document.createElement('span');
        inner.className = 'word';
        inner.style.setProperty('--word-delay', `${wi * 0.06}s`);
        inner.textContent = word;
        line.appendChild(inner);
        heading.appendChild(line);

        if (wi < words.length - 1) {
          heading.appendChild(document.createTextNode(' '));
        }
      });

      const wordObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          heading.querySelectorAll('.split-line').forEach((line) =>
            line.classList.add('in-view')
          );
          wordObserver.disconnect();
        },
        { threshold: 0.35 }
      );
      wordObserver.observe(heading);
    });

    const tiltEls = document.querySelectorAll('.tilt');
    const tiltHandlers = [];

    tiltEls.forEach((el) => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty('--rx', `${-y * 10}deg`);
        el.style.setProperty('--ry', `${x * 10}deg`);
        el.style.setProperty('--ty', '-6px');
      };
      const onLeave = () => {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
        el.style.setProperty('--ty', '0');
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      tiltHandlers.push({ el, onMove, onLeave });
    });

    const magneticEls = document.querySelectorAll('.magnetic');
    const magneticHandlers = [];

    magneticEls.forEach((el) => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      };
      const onLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      magneticHandlers.push({ el, onMove, onLeave });
    });

    return () => {
      revealObserver.disconnect();
      tiltHandlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
      magneticHandlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return null;
}

export default Animations;
