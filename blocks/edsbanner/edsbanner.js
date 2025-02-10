function decorateEDSbanner(el) {
    el.classList.add('decorated');
  }
  
  const banners = document.querySelectorAll('.eds-banner');
  banners.forEach((el) => {
    decorateEDSbanner(el);
  });
  