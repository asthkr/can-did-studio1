$(window).scroll(function () {
  var header = $(".header"),
    scroll = $(window).scrollTop();

  if (scroll >= 50) header.addClass("fixed");
  else header.removeClass("fixed");
});
$(".nav-icon").click(function () {
  $(".nav-bar").toggleClass("d-none");
});
const imgzoom2 = document.querySelectorAll("#gallery-anime .gallery-item");

imgzoom2.forEach((element) => {
  const contents = element.querySelectorAll(".contentgallery");

  gsap.set(contents, { scale: 0.5, yPercent: 50 });

  gsap.to(contents, {
    yPercent: 0,
    duration: 1.2,
    autoAlpha: 1,
    scale: 1,
    ease: "power2.out",
    stagger: 2.5,
    scrollTrigger: {
      trigger: element,
      start: "top bottom-=30%",
      end: "bottom top+=100",
      toggleActions: "play reverse play reverse",
    },
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    trigger: "#blogbox1",
    start: "top bottom",
    end: "bottom bottom",
    markers:false,
  },
});

tl.fromTo(
  ".img-box1",
  {
    y: 100,
x:-200,
    opacity: 0.7,
    scale: 0.6,
  },
  {x:0,
    y: 0,
    opacity: 1,
    scale: 1,
  }
);

const tl2 = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    trigger: "#blogbox2",
    start: "top bottom",
    end: "bottom bottom",
    markers:false,
  },
});

tl2.fromTo(
  ".img-box2",
  {
    y: 200,

    opacity: 0.7,
    scale: 0.6,
  },
  {
    y: 0,

    opacity: 1,
    scale: 1,
  }
);

const tl3 = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    trigger: "#blogbox3",
    start: "top bottom",
    end: "bottom bottom",
    markers:false,

  },
});

tl3.fromTo(
  ".img-box3",
  {
    y: 100,
x:200,
    opacity: 0.7,
    scale: 0.6,
  },
  {
    y: 0,
x:0,
    opacity: 1,
    scale: 1,
  }
);
