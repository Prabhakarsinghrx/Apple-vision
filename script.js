function loco(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco()
//page-1
gsap.to("#page1 video",{
  scrollTrigger:{
      trigger:"#page1 video",
      start:"1% top",
      end:"bottom top",
      scroller:`#main`,
      
  },
  onStart:()=>{
      document.querySelector("#page1 video").play()
  }
})

gsap.to("#page1",{
  scrollTrigger:{
      trigger:"#page1",
      start:"top top",
      end:"bottom top",
      scroller:"#main",
      pin:true,
  }
})
gsap.to("#intro",{ //intro scroll
  scrollTrigger:{
      trigger:"#intro",
      start:" 15% top ",
      end:"bottom top",
      scroller:"#main",
      pin:true,
  }
})

//page2 
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    start:"top top",
    scroller:"#main",
    pin:true,
    scrub:1,
  }
})

tl.to("#page2 h1",{
    top:"-50%",


})
//page-3 
var tla = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    start:"top top",
    scroller:"#main",
    pin:true,
    scrub:1,
  }
})

tla.to("#page3 h1",{
    top:"-50%",


})

//page3-1
var tlb = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3-1",
    start:"top top",
    scroller:"#main",
    pin:true,
    scrub:1,
  }
})

tlb.to("#page3-1 h1",{
    top:"-50%",


})

//page3-2
var tlc = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3-2",
    start:"top top",
    scroller:"#main",
    pin:true,
    scrub:1,
  }
})

tlc.to("#page3-2 h1",{
    top:"-50%",

})

//page5
var tld = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5",
    start:"top top",
    scroller:"#main",
    pin:true,
    scrub:1,
  }
})

tld.to("#page5 #page5-in",{
    top:"-50%",

})

//page 7 
var tle = gsap.timeline({
  scrollTrigger:{
    trigger:"#page7",
    start:"top top",
    scroller:"#main",
    pin:true,
    scrub:1,
  }
})

tle.to("#page7 #page7-in",{
    top:"-50%",

})