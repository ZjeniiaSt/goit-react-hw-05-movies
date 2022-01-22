export const scrollPage = () => {
  setTimeout(myRef => {
    window.scrollTo({
      behavior: 'smooth',
      top: myRef.current.offsetTop,
    });
  }, 500);
};
