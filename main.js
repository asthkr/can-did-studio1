
const imgzoom2 = document.querySelectorAll("#gallery-anime .gallery-item");

imgzoom2.forEach((element) => {
	const contents = element.querySelectorAll(".contentgallery") 

    gsap.set(contents, { scale:.5,
    yPercent:50, });

    gsap.to(contents, { 
        yPercent:0, 
        duration: 1.2,
        autoAlpha:1,
        scale: 1,
        ease: "power2.out",
        stagger:2.5,
        scrollTrigger: {   
            trigger: element,
            start: "top bottom-=30%",
            end: "bottom top+=100",
            toggleActions: "play reverse play reverse"
        }
    });
})


const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: "#blogbox1",
      start: "top bottom+=100",
      end: "bottom bottom",
      markers:false,
    },
  });
  
  tl.fromTo("#blogbox1", {
    y:100,

  opacity
  :.7,
  scale:.6,
  },
  {y:0,
   
      opacity:1,
      scale:1,
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: "#blogbox2",
          start: "top bottom",
          end: "bottom bottom",
          markers:false,
        },
      });
  
      tl2.fromTo("#blogbox2", {
        y:100,
    
      opacity
      :.7,
      scale:.6,
      },
      {y:0,
       
          opacity:1,
          scale:1,
        });
   

        const tl3 = gsap.timeline({
            scrollTrigger: {
              scrub: 1,
              trigger: "#blogbox3",
              start: "top bottom",
              end: "bottom bottom",
              markers:false,
            },
          });
          
          tl.fromTo("#blogbox3", {
            y:100,
        
          opacity
          :.7,
          scale:.6,
          },
          {y:0,
           
              opacity:1,
              scale:1,
            });