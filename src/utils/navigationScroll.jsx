"use client";
function navigationScroll() {
  const sections = document.querySelectorAll("section");
  const navLink = document.querySelectorAll("header nav a");
  window.onscroll = () => {
    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 500;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");
      if (top > offset && top < offset + height) {
        const navigations = document.querySelectorAll(
          `header nav a[href*=${id}]`
        );
        navLink.forEach((links) => {
          links.classList.add("hover:text-[#DD0426]");
          links.classList.remove(
            "border-[#DD0426]",
            "bg-[#DD0426]",
            "font-extrabold",
            "text-white"
          );
        });
        navigations.forEach((navigation) => {
          navigation.classList.remove("hover:text-[#DD0426]");
          navigation.classList.add(
            "border-[#DD0426]",
            "bg-[#DD0426]",
            "font-extrabold",
            "text-white",
            "hover:text-white"
          );
        });
      }
    });
  };
}

export { navigationScroll };
