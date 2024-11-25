// START locomotive SCROLL
    function getScrollAnimation(){
        gsap.registerPlugin(ScrollTrigger);
        const locoScroll = new LocomotiveScroll({
          el: document.querySelector("#main"),
          smooth: true,
        });
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#main", {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        ScrollTrigger.refresh();
    }
    getScrollAnimation();
// End locomotive SCROLL

// START MOUSE FOLLOWER
    let myFollower = document.querySelector(".cursor");
    let myMain = document.querySelector('#main');
    document.addEventListener('mousemove',function(eventInfo){
      gsap.to(myFollower, {
        x: eventInfo.x + 20,
        y: eventInfo.y + 20,
      });
    })

    let videoEle = document.querySelector('header video');
    videoEle.addEventListener('mouseenter',function(){
      myFollower.style.display = `flex`
      myFollower.style.justifyContent = `center`
      myFollower.style.alignItems = `center`
      myFollower.style.width = `100px`
      myFollower.style.height = `20px`
      myFollower.style.borderRadius = `8px`;
      myFollower.innerHTML= `<span>View more</span>`
      
    })
    videoEle.addEventListener('mouseleave',function(){
      myFollower.style.display = `flex`
      myFollower.style.justifyContent = `center`
      myFollower.style.alignItems = `center`
      myFollower.style.width = `17px`
      myFollower.style.height = `17px`
      myFollower.style.borderRadius = `50%`;
      myFollower.innerHTML= ``
      
    })
   
// END MOUSE FOLLOWER

// start animat header

document.querySelector(".navRight2").addEventListener('mouseenter',function(){
    document.querySelector(".navRight1").classList.remove("opacity-0");
});
document.querySelector(".navRight2").addEventListener('mouseleave',function(){
    document.querySelector(".navRight1").classList.add("opacity-0");
});

let tlForHeaders = gsap.timeline()

tlForHeaders.from(".welcomeMsg h2", {
  x: 50,
  opacity:0,
  stagger: 0.2,
  duration:1
});
tlForHeaders.to(".welcomeMsg h2", {
  x: -10,
  opacity:0,
  stagger: 0.1,
  duration:0.5
});
tlForHeaders.to(".welcomeMsg", {
  y:"-120%",
  duration:1,
});
tlForHeaders.to(".welcomeMsg", {
  display:"none",
});



tlForHeaders.from("header h1", {
  y: 80,
  duration: 0.5,
  opacity: 0,
  rotate: "5deg",
  
},"-=0.05");
tlForHeaders.from("header h2", {
  y: 80,
  duration: 1,
  opacity: 0,
  rotate: "5deg",
},"-=0.05");


let tlOne = gsap.timeline({
  scrollTrigger: {
    trigger: 'header h1',
    scroller:"#main",
    start:'-50% 27%',
    end:'top 0%',
    scrub: 3
  },
});
tlOne.to('header h1',{
    x:-130,
},"anime")
tlOne.to('header h2',{
    x:130,
},"anime")
tlOne.to('header video',{
    width: "95%",
    y:-400,
    duration:1,
    ease: true,
},"anime")
// end animat header

// start page two
document.querySelectorAll(".dashEle").forEach(function(ele){
    ele.addEventListener('mouseenter',function(){
        eleUrlImg = ele.getAttribute("data-image")
        document.querySelector(".rightPartForImg").innerHTML = `<img src="${eleUrlImg}" alt="">`;
    })
});

let tlTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageTwo",
    scroller: "#main",
    start: "top bottom",
    // end: "top 200%",
    scrub: 3,
  },
});
tlTwo.to("#main", {
  backgroundColor: "#fff",
});



// ==========================

if(window.innerWidth > 800){
  let tlThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".pageTwo h2",
      scroller: "#main",
      start: "top 27%",
      end: "top 0%",
      scrub: 3,
    },
  });
  tlThree.from(".pageTwo h2", {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: true,
  });
  tlThree.from(".pageTwo .dashOne", {
    y: 100,
    opacity: 0,

    duration: 2,
    ease: true,
  },"together");
  tlThree.from(".pageTwo .dashTwo", {
    y: 100,
    duration: 2,
    opacity: 0,

    ease: true,
  } ,"together");
  tlThree.from(".pageTwo .dashThree", {
    y: 100,
    duration: 2,
    opacity: 0,

    ease: true,
  } ,"together");
}
if(window.innerWidth < 800){
  let tlThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".pageTwo h2",
      scroller: "#main",
      start: "-20% 60%",
      end: "-20% 0%",
      scrub: 3,
    },
  });

  tlThree.from(".pageTwo h2", {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: true,
  });
  tlThree.from(".pageTwo .dashOne", {
    y: 100,
    opacity: 0,

    duration: 2,
    ease: true,
  });
  tlThree.from(".pageTwo .dashTwo", {
    y: 100,
    duration: 2,
    opacity: 0,

    ease: true,
  });
  tlThree.from(".pageTwo .dashThree", {
    y: 100,
    duration: 2,
    opacity: 0,

    ease: true,
  });
}

// end page two


// start page three





if(window.innerWidth > 1200){
  let tlFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "0% 10%",
    end: "0% 0%",
    scrub: 3,
  },
});
tlFour.to('.FirstRow .firstCol',{
    x:"40vw",
    duration:1
},"anime2")
tlFour.to('.FirstRow .secondCol',{
    x:"-40vw",
    duration:1
},"anime2")


let tlFive = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "60% 10%",
    end: "60% 0%",
    scrub: 3,
  },
});
tlFive.to('.secondRow .firstCol',{
    x:"40vw",

},"anime3")
tlFive.to('.secondRow .secondCol',{
    x:"-40vw",

},"anime3")
}
if(window.innerWidth > 992 && window.innerWidth <= 1200){
let tlFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "0% 25%",
    end: "0% 0%",
    scrub: 3,
  },
});
tlFour.to('.FirstRow .firstCol',{
    x:"40vw",
},"anime2")
tlFour.to('.FirstRow .secondCol',{
    x:"-40vw",
},"anime2")


let tlFive = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "60% 25%",
    end: "60% 0%",
    scrub: 3,
  },
});
tlFive.to('.secondRow .firstCol',{
    x:"40vw",
},"anime3")
tlFive.to('.secondRow .secondCol',{
    x:"-40vw",
},"anime3")

}
if(window.innerWidth > 767 && window.innerWidth <=992){
  let tlFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "0% 55%",
    end: "0% 0%",
    scrub: 3,
  },
});
tlFour.to('.FirstRow .firstCol',{
    x:"40vw",
},"anime2")
tlFour.to('.FirstRow .secondCol',{
    x:"-40vw",
},"anime2")


let tlFive = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "60% 55%",
    end: "60% 0%",
    scrub: 3,

  },
});
tlFive.to('.secondRow .firstCol',{
    x:"40vw",
},"anime3")
tlFive.to('.secondRow .secondCol',{
    x:"-40vw",
},"anime3")
}
if(window.innerWidth > 500 && window.innerWidth <=767){
let tlFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "0% 63%",
    end: "0% 0%",
    scrub: 3,
  },
});
tlFour.to('.FirstRow .firstCol',{
    x:"40vw",
},"anime2")
tlFour.to('.FirstRow .secondCol',{
    x:"-40vw",
},"anime2")


let tlFive = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "60% 63%",
    end: "60% 0%",
    scrub: 3,

  },
});
tlFive.to('.secondRow .firstCol',{
    x:"40vw",
},"anime3")
tlFive.to('.secondRow .secondCol',{
    x:"-40vw",
},"anime3")
}
if (window.innerWidth <= 500) {
  let tlFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "0% 73%",
    end: "0% 0%",
    scrub: 3,
  },
});
tlFour.to('.FirstRow .firstCol',{
    x:"40vw",
},"anime2")
tlFour.to('.FirstRow .secondCol',{
    x:"-40vw",
},"anime2")


let tlFive = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageThreeWrapper",
    scroller: "#main",
    start: "60% 73%",
    end: "60% 0%",
    scrub: 3,

  },
});
tlFive.to('.secondRow .firstCol',{
    x:"40vw",
},"anime3")
tlFive.to('.secondRow .secondCol',{
    x:"-40vw",
},"anime3")
}
// end page three


// START PAGE FOUR
let thSix = gsap.timeline({
  scrollTrigger: {
    trigger: ".pageFour ",
    scroller: "#main",
    start: "top bottom",
    // end: "top 200%",
    scrub: 3,
  },
});
thSix.to("#main", {
  backgroundColor: "#000",
});
// END PAGE FOUR

// START PAGE FIVE
let myBoxes = document.querySelectorAll('.box');
console.log(myBoxes);
myBoxes.forEach(function(box){
  box.addEventListener('mouseenter',function(){
    let myBoxImgURL = box.getAttribute('data-image')
          myFollower.style.borderRadius = `0`;
          myFollower.style.backgroundImage = `url(${myBoxImgURL})`;
          myFollower.style.backgroundPosition = `center`;
          myFollower.style.backgroundSize = `cover`;
          myFollower.style.mixBlendMode = `unset`;
    if(window.innerWidth > 900){
      myFollower.style.width = `400px`;
      myFollower.style.height = `450px`;
    }
    if(window.innerWidth< 900){
      myFollower.style.width = `300px`;
      myFollower.style.height = `350px`;

    }
    if(window.innerWidth< 800){
      myFollower.style.width = `250px`;
      myFollower.style.height = `300px`;

    }
    if(window.innerWidth< 600){
      myFollower.style.width = `150px`;
      myFollower.style.height = `200px`;
    }
    if(window.innerWidth< 500){
      myFollower.style.width = `100px`;
      myFollower.style.height = `150px`;
    }
    
    // myFollower.innerHTML = `<img src="${myBoxImgURL}" alt="">`;
  })
  box.addEventListener('mouseleave',function(){
    myFollower.style.width = `17px`;
    myFollower.style.height = `17px`;
    myFollower.style.borderRadius = `50%`;
    myFollower.style.backgroundImage = `none`;
    myFollower.style.mixBlendMode = `difference`;

  })
  
})

// END PAGE FIVE


// overlay
let myNavLinks = document.querySelectorAll("nav li a");
console.log(myNavLinks);
myNavLinks.forEach(function(link){
  link.addEventListener('mouseenter',function(){
    document.querySelector(".overlayAll").style.display = 'block';
    document.querySelector(".overlayAll").style.opacity = '1';
    console.log(this.innerHTML);
    let myH2Val = this.innerHTML;
    console.log(document.querySelectorAll(".overlayAll .wrapper h2").forEach(function(h2){
      h2.innerHTML = myH2Val;
    }));
    
    
  })
  link.addEventListener('mouseleave',function(){
    document.querySelector(".overlayAll").style.display = 'none';
    document.querySelector(".overlayAll").style.opacity = '0';
  })
})

// overlay

// menu Overlay
let flag = false;
document.querySelector(".hamburger").addEventListener('click',function(){
  if(flag == false){
  document.querySelector(".menuOverLay").style.top = "0%";
  document.querySelector(".hamburger span:nth-child(1)").style.transform = 'translateY(0) rotate(45deg)';
  document.querySelector(".hamburger span:nth-child(2)").style.transform = 'translateY(0) rotate(-45deg)';
  flag = true
  }else{
    document.querySelector(".menuOverLay").style.top = "-120%";
    document.querySelector(".hamburger span:nth-child(1)").style.transform = 'translateY(-3px) rotate(0)';
  document.querySelector(".hamburger span:nth-child(2)").style.transform = 'translateY(3px) rotate(0)';
    flag = false;
  }
})

// window.innerWidth