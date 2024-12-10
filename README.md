# WebAnimate
Uses CSS animations with a JS functions as well with easy class targets and automatically load all targets.

CSS/JS Link:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/XHiddenProjects/WebAnimate@0.0.6/assets/webanimate.min.css"/>
<script src="https://cdn.jsdelivr.net/gh/XHiddenProjects/WebAnimate@0.0.6/assets/webanimate.min.js"></script>
```

### Loaders

| Class | JS | format |
| --- | --- | ----- |
| animate-spin | spin | 2D |
| animate-elasticSpin | elasticSpin | 2D |
| animate-pulse | pulse | 2D |
| animate-flash | flash | 2D |
| animate-shake | shake | 2D |
| animate-shake2 | shake2 | 2D |
| animate-grow | grow | 2D |
| animate-fade-in | fade-in | 2D |
| animate-fade-out | fade-out | 2D |
| animate-bounce | bounce | 2D |
| animate-bounce2 | bounce2 | 2D |
| animate-flip | flip | 3D |
| animate-swing | swing | 2D |
| animate-wobble | wobble | 2D |
| animate-fade-in-down | fade-in-down | 2D |
| animate-fade-in-left | fade-in-left | 2D |
| animate-fade-out-down | fade-out-down | 2D |
| animate-fade-out-right | fade-out-right | 2D |
| animate-bounce-in | bounce-in | 2D |
| animate-bounce-in-right | bounce-in-right | 2D |
| animate-bounce-out | bounce-out | 2D |
| animate-bounce-out-down | bounce-out-down | 2D |
| animate-rotate-in-down-left | rotate-in-down-left | 2D |
| animate-rotate-in-up-left | rotate-in-up-left | 2D |
| animate-hinge | hinge | 2D |
| animate-roll-in | roll-in | 2D |
| animate-roll-out | roll-out | 2D |
| animate-beat | beat | 2D |
| animate-flip-horz-bottom | flip-horz-bottom | 3D |
| animate-flip-horz-top | flip-horz-top | 3D |
| animate-flip-horz-back | flip-horz-back | 3D |
| animate-flip-horz-forward | flip-horz-forward | 3D |
| animate-flip-vert-right | flip-vert-right | 3D |
| animate-flip-vert-left | flip-vert-left | 3D |
| animate-flip-vert-backward | flip-vert-backward | 3D |
| animate-flip-vert-forward | flip-vert-forward | 3D |
| animate-throw | throw | 2D |

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

To play/stop animations _ON EVENT_ triggers
```js
let animation = 'bounce';
/**
     * The event that will cause the element to play the animation.
     * @param {string} eventName - The event that will get the element to play the animation.
     * @param {string} animation - The animation that will be played after event has taken place.
     * @returns {void}
*/
x.attachEvent('mouseover',animation);
/**
     * Kills off the event by action
     * @param {string} eventName - The event that will stop the animation.
     * @param {string} animation - The animation that will be removed after action is taken.
     * @returns {void}
*/
x.stopEvent('mouseout',animation);
```
Create animations from conditions, use **condAnimation()**
```js
/**
     * Creates animations with a certain conditions
     * @param {object} animate - JSON format of the number and conditions(Starting with 1...)
     * @returns {void}
*/
x.condAnimation({
    1:{//Targets the first element of the selected queries.
        animation: 'roll-out',
        speed: 'fast',
        delay: 2,
        direction: 'normal',
        fill: 'none',
        count: 'infinite',
        state: 'run',
        duration: 3,
        timing: 'linear'
    }
});
```
