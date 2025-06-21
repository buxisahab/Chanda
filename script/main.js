// ...before this, keep everything as-is

.to(".one", 0.7, {
    opacity: 0,
    y: 10
}, "+=4.5") // was 3.5

.to(".two", 0.7, {
    opacity: 0,
    y: 10
}, "-=1")

.to(".three", 0.7, {
    opacity: 0,
    y: 10
}, "+=4.5") // was 3

// Slightly longer to read message
.staggerTo(".hbd-chatbox span", 1.5, {
    visibility: "visible",
}, 0.06) // was 0.05

.to(".fake-btn", 0.1, {
    backgroundColor: "rgb(127, 206, 248)",
}, "+=5") // was +=4

.to(".four", 0.5, {
    scale: 0.2,
    opacity: 0,
    y: -150
}, "+=2") // was +=1

// Idea sentences
.from(".idea-1", 0.7, ideaTextTrans)
.to(".idea-1", 0.7, ideaTextTransLeave, "+=3.5") // was 2.5

.from(".idea-2", 0.7, ideaTextTrans)
.to(".idea-2", 0.7, ideaTextTransLeave, "+=3.5") // was 2.5

.from(".idea-3", 0.7, ideaTextTrans)
.to(".idea-3", 0.7, ideaTextTransLeave, "+=4") // was 2.5

.from(".idea-4", 0.7, ideaTextTrans)
.to(".idea-4", 0.7, ideaTextTransLeave, "+=2.8") // was 2.5

// Idea-5 is emotional – give it more time to sink in
.from(".idea-5", 0.7, {
    rotationX: 15,
    rotationZ: -10,
    skewY: "-5deg",
    y: 50,
    z: 10,
    opacity: 0,
}, "+=2")
.to(".idea-5", 0.7, {
    scale: 0.2,
    opacity: 0,
}, "+=3.5") // was 2

.to(".idea-5 span", 0.7, {
    rotation: 90,
    x: 8,
}, "+=1.8") // slight delay increase

// End section text (final note)
.staggerFrom(".nine p", 1, ideaTextTrans, 1.5) // was 1.2