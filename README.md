# WebAnimate
Uses CSS animations with a JS functions as well with easy class targets and automatically load all targets.

### Loaders

| Class | JS |
| --- | --- |
| animate-spin | spin |
| animate-elasticSpin | elasticSpin |
| animate-pulse | pulse |
| animate-flash | flash |
| animate-shake | shake |
| animate-shake2 | shake2 |
| animate-grow | grow |
| animate-fade-in | fade-in |
| animate-fade-out | fade-out |
| animate-bounce | bounce |
| animate-bounce2 | bounce2 |
| animate-flip | flip |
| animate-swing | swing |
| animate-wobble | wobble |
| animate-fade-in-down | fade-in-down |
| animate-fade-in-left | fade-in-left |
| animate-fade-out-down | fade-out-down |
| animate-fade-out-right | fade-out-right |
| animate-bounce-in | bounce-in |
| animate-bounce-in-right | bounce-in-right |
| animate-bounce-out | bounce-out |
| animate-bounce-out-down | bounce-out-down |
| animate-rotate-in-down-left | rotate-in-down-left |
| animate-rotate-in-up-left | rotate-in-up-left |
| animate-hinge | hinge |
| animate-roll-in | roll-in |
| animate-roll-out | roll-out |
| animate-beat | beat |

### Options
| type | class | value(s) |
| ---- | ----- | ------ |
| Speed | animate-speed-* | slow-x3, slow-x2, slow, fast, fast-x2, fast-x3|
| Delay | animate-delay-* | 1, 2, 3, 4, 5 |
| Direction | animate-dir-* | normal, reverse, alt, alt-reverse |
| Fill | animate-fill-* | forwards, backwards, both, none |
| count | animate-count-* | infinite, 1, 2, 3, 4, 5 |
| State | animate-state-* | run, pause |
| Duration | animate-dur-* | 0, 1, 2, 3, 4, 5 |
| Timing | animate-timing-* | linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end |

***

## How to execute CSS animatation
To execute the animation on the element you must use one of the elements [Loaders table](#loaders); here is an example:
```html
<div class="animate-roll-in">Rolling in div.</div>
```
to override certain animations you can use that by using the [Options table](#Options); here is an example:
```html
<div class="animate-roll-in animate-speed-fast">Fast rolling in div.</div>
```

***

### Executing in JS
To execute in javascript you would need to import the script
```html
<!--This element is an example for the docs.-->
<div id="testElement">Test text</div>
<script src=".../WebAnimate.js"></script>
<script>
// execute code here
</script>
```

Then you want to create a variable with the class:
```js
let x = new WebAnimate('#testElement');//Requires a target(by default it will select all elements).
```
The to create the animation type by using **createAnimation()**:
```js
/**'
     * Creates animations to all alaments
     * @param {object|string} animate - Returns animation name or object
     * @param {string} speed - Property defines how long an animation should take to complete one cycle.
     * @param {int} delay - Property specifies a delay for the start of an animation.
     * @param {string} direction - Property defines whether an animation should be played forwards, backwards or in alternate cycles.
     * @param {string} fill - Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).
     * @param {string} count - Property specifies the number of times an animation should be played.
     * @param {string} state - Property specifies whether the animation is running or paused.
     * @param {int} duration - Property defines how long an animation should take to complete one cycle.
     * @param {string} timing - Specifies the speed curve of an animation.
     * @param {array} ignore - The element count that will be ignored(Starting with 1...).
     * @returns {void}
     */
x.createAnimation({
    animation: 'spin',
    delay: 3,
    timing: 'linear'
});
```
