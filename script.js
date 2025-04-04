var cur = document.querySelector("#cursor");
var blurcur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x+15 +"px"
    cur.style.top = dets.y +"px"
    blurcur.style.left = dets.x - 200 +"px"
    blurcur.style.top = dets.y - 200 +"px"
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale = 2
        cur.style.border = "1px solid #fff"
        cur.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cur.style.scale = 1;
        cur.style.border = "0px solid #95C11E";
        cur.style.backgroundColor = "#95C11E";
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

gsap.from("#upper-colon",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#upper-colon",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#lower-colon",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#upper-colon",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})