
document.querySelectorAll("div").forEach(el => {
    el.classList.add("scroll-animate");
  });
  
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
  });
  
  
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
  
  
  
  