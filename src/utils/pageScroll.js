function PageScroll(idx) {
  window.scrollTo({
    left: 0,
    top: window.innerHeight * (idx - 1),
    behavior: "smooth",
  });
}

export { PageScroll };
