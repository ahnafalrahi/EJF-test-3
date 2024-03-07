

let panels = gsap.utils.toArray(".panel")

    gsap.to(panels,{
    xPercent: -100 * (panels.length - 1),
    ease:"none",
    scrollTrigger:{  
    trigger:".page2",
    // pin:true,
    scrub:1,
    snap: 1 / (panels.length - 1),
    end:() => "+=" + document.querySelector(".page2").offsetWidth

}})

let panel2 = gsap.utils.toArray(".panel2")

gsap.to(panel2,{
    xPercent:100*(panel2.length-1),
    ease:"none",
    scrollTrigger:{
    trigger:".page3",
    scrub:1,
    snap: 1/ (panel2.length - 1),
    end:() => "+=" + document.querySelector(".page3").offsetWidth

}})






let tl = gsap.timeline({scrollTrigger:{
    // trigger:".pa2",
    start:"53% 50%",
    end:"150% 50%",
    markers:true,
    scrub:true,
    // pin:true

}})

tl.to(".center",{
    height:"100%",
    width:"100%",
    markers:true,
    duration:"5", 

})

tl.to(".center2",{
    height:"100%",
    width:"100%",
    markers:true,
    duration:"5", 

})























