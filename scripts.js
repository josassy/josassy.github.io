const header = document.querySelector("header");
const fakeHeader = document.querySelector(".fake-header");

const stickyHeader = () => function() {
  const sr1 = fakeHeader.getBoundingClientRect();
  const sr2 = header.getBoundingClientRect();

  if (sr1.top > 0) {
    $realSticky.classList.remove("sticky");
    $fakeSticky.style.top = 0;
  } else {
    $realSticky.classList.add("sticky");
    $fakeSticky.style.top = `-${sr2.height + 1}px`;
  }
};

window.onscroll = function() {stickyHeader()};
