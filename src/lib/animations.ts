// 3D Animation Utilities and CSS-in-JS animations

export const animations = {
  // 3D Transform animations
  float: 'animate-[float_6s_ease-in-out_infinite]',
  floatDelay: 'animate-[float_6s_ease-in-out_infinite_1s]',
  rotate3D: 'animate-[rotate3D_20s_linear_infinite]',
  pulse3D: 'animate-[pulse3D_4s_ease-in-out_infinite]',
  
  // Entrance animations
  fadeInUp: 'animate-[fadeInUp_1s_ease-out_forwards]',
  fadeInLeft: 'animate-[fadeInLeft_1s_ease-out_forwards]',
  fadeInRight: 'animate-[fadeInRight_1s_ease-out_forwards]',
  scaleIn: 'animate-[scaleIn_1s_ease-out_forwards]',
  
  // Hover animations
  hoverLift: 'transition-all duration-300 hover:transform hover:-translate-y-4 hover:scale-105',
  hover3D: 'transition-all duration-300 hover:transform hover:rotateY-12 hover:rotateX-12 hover:scale-105',
  hoverGlow: 'transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25',
}

export const keyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotateZ(0deg); }
    50% { transform: translateY(-20px) rotateZ(5deg); }
  }
  
  @keyframes rotate3D {
    0% { transform: rotateY(0deg) rotateX(0deg); }
    25% { transform: rotateY(90deg) rotateX(0deg); }
    50% { transform: rotateY(180deg) rotateX(90deg); }
    75% { transform: rotateY(270deg) rotateX(90deg); }
    100% { transform: rotateY(360deg) rotateX(0deg); }
  }
  
  @keyframes pulse3D {
    0%, 100% { 
      transform: scale(1) rotateY(0deg);
      box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
    }
    50% { 
      transform: scale(1.05) rotateY(180deg);
      box-shadow: 0 0 0 20px rgba(168, 85, 247, 0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-40px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(40px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale3d(0.8, 0.8, 0.8);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`

// Intersection Observer hook for scroll animations
export const useScrollAnimation = (threshold: number = 0.1) => {
  if (typeof window === 'undefined') return { ref: () => {} }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp')
          entry.target.classList.remove('opacity-0')
        }
      })
    },
    { threshold }
  )

  const setRef = (element: HTMLElement | null) => {
    if (element) {
      observer.observe(element)
    }
  }

  return { ref: setRef }
}

// 3D Card flip effect
export const card3DStyles = {
  container: 'perspective-1000 group cursor-pointer',
  card: 'relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180',
  front: 'absolute inset-0 backface-hidden',
  back: 'absolute inset-0 backface-hidden rotate-y-180'
}

// Parallax scroll effect
export const parallaxEffect = (speed: number = 0.5) => {
  if (typeof window === 'undefined') return {}
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -speed
    return `translateY(${rate}px)`
  }

  return { transform: handleScroll() }
}

// Generate random 3D positions for floating elements
export const generateFloat3DPositions = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
    delay: i * 0.2,
    duration: 4 + Math.random() * 4,
    size: 20 + Math.random() * 40
  }))
}