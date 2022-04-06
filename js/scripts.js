// GSAP included in `index.html`
console.log("OK");

gsap.from("#g", { rotation: 360, duration: 4, transformOrigin: "50% 50%", repeat:-1 });
gsap.from("#o1", { rotation: -360, duration: 2, transformOrigin: "50% 50%" ,repeat:-1});
gsap.from("#o2", { rotation: 360, duration: 2, transformOrigin: "50% 50%" ,repeat:-1});
gsap.from("#e", { rotation: -360, duration: 4, transformOrigin: "50% 50%" ,repeat:-1});
gsap.from("#hook", { rotation: 5, duration: 1, transformOrigin: "top" ,repeat:-1, yoyo: true, });
gsap.fromTo("#puff", {opacity: 1,transformOrigin: "50% 50%"}, {opacity: 0,scale: 10, duration: 3, repeat: -1, repeatDelay: 2});

//gsap.from("#puff", { y: 500, scale: -100, opacity: 0.3,rotation: 360, repeat: -1, repeatDelay: 2});



