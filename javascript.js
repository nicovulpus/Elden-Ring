function scrollToElementWithOffset(selector, offset = 80) {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
}

function scrollToElementWithOffset(selector, offset = 80) {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
}

function scrollToElementWithOffset(selector, offset = 80) {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const aboutLinkBody = document.querySelector("a[href='#body-text-1']");
  const aboutLinkHome = document.querySelector("a[href='#']");
  const aboutLinkContact = document.querySelector("a[href='#footer']");

  if (aboutLinkBody) {
    aboutLinkBody.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToElementWithOffset("#body-text-1", 50);
    });
  }

  if (aboutLinkHome) {
    aboutLinkHome.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (aboutLinkContact) {
    aboutLinkContact.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToElementWithOffset("#footer", 50);
    });
  }
});

count = 1000;

function increment() {
  count += 1;
  document.getElementById("death-count").innerText = count;
}
