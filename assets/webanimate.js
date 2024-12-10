/*
@project WebAnimate
@author XHiddenProjects
@version 0.0.6
*/

class WebAnimate{
    /**
     * Access to WebAnimate classes
     * @param {object} selector - Selected element(s).
     * @returns {void}
     */
    constructor(selector) {
        this.elem = document.querySelectorAll(selector);
        this.handler={};
        this.speed='';
        this.dir = '';
        this.delay='';
        this.fill = '';
        this.count = '';
        this.state = '',
        this.dur = '',
        this.timing = '';
    }
    /**
     * Sets the speed of the animation.
     * @param {string} p - Options: slow-x3|slow-x2|slow|fast|fast-x2|fast-x3 
     * @returns {void}
     */
    setSpeed(p){
        if(typeof p!=='string'){
            console.error('Your input must be a string');
            return false;
        }
        this.speed = 'animate-speed-'+p;
    }
    /**
     * Sets the delay count(by seconds)
     * @param {int} d - Options: 1, 2, 3, 4, or 5. 
     * @returns {void}
     */
    setDelay(d){
        if(typeof(d)!=='number'){
            console.error('Your input must be a number')
        }
        this.delay = 'animate-delay-'+d;
    }
    /**
     * Sets the direction of the animation.
     * @param {string} r - Options: normal|reverse|alt|alt-reverse.
     * @returns {void}
     */
    setDirection(r){
        if(typeof r!=='string'){
            console.error('Your input must be a string');
            return false;
        }
        this.dir = 'animate-dir-'+r;
    }
    /**
     * Sets the fill mode for the animation.
     * @param {string} f - Options: fowards, backwards, both, or none.
     * @returns {void}
     */
    setFill(f){
        if(typeof f!=='string'){
            console.error('Your input must be a string');
            return false;
        }
        this.fill = 'animate-fill-'+f;
    }
    /**
     * Sets the count of the animation
     * @param {string} c - Options: infinite, 1, 2, 3, 4, or 5
     * @returns {void}
     */
    setCount(c){
        if(typeof c!=='string'){
            console.error('Your input must be a string');
            return false;
        }
        this.dir = 'animate-count-'+c;
    }
    /**
     * Sets the state of the animation
     * @param {string} s - Options: "run" or "pause".
     * @returns {void} 
     */
    setState(s){
        if(typeof s!=='string'){
            console.error('Your input must be a string');
            return false;
        }
        this.state = 'animate-state-'+s;
    }
    /**
     * Sets the duration of the animation
     * @param {int} s - Options: 0, 1, 2, 3, 4, or 5.
     * @returns {void} 
     */
    setDuration(t){
        if(typeof t!=='number'){
            console.error('Your input must be a number');
            return false;
        }
        this.dur = 'animate-dur-'+t;
    }
     /**
     * Sets the timing of the animation
     * @param {string} t - Options: linear|ease|ease-in|ease-out|ease-in-out|step-in|step-out.
     * @returns {void} 
     */
     setTiming(t){
        if(typeof t!=='string'){
            console.error('Your input must be a string');
            return false;
        }
        this.timing = 'animate-timing-'+t;
    }
    /**
     * The event that will cause the element to play the animation.
     * @param {string} eventName - The event that will get the element to play the animation.
     * @param {string} animation - The animation that will be played after event has taken place.
     * @returns {void}
     */
    attachEvent(eventName, animation){
        [...this.elem].forEach((e)=>{
            let sd=this.speed, 
                dy=this.delay,
                dr=this.dir,
                fl=this.fill,
                ct=this.count,
                st=this.state,
                du=this.dur,
                tm=this.timing;
                e.tabIndex = 0;
            this.handler[e] = e.addEventListener(eventName,function(event,s=sd,d=dy,r=dr,f=fl,c=ct,q=st,k=du,t=tm){
                s!=='' ? this.classList.add(s) : '';
                d!=='' ? this.classList.add(d) : '';
                r!=='' ? this.classList.add(r) : '';
                f!=='' ? this.classList.add(f) : '';
                c!=='' ? this.classList.add(c) : '';
                q!=='' ? this.classList.add(q) : '';
                k!=='' ? this.classList.add(k) : '';
                t!=='' ? this.classList.add(t) : '';
                this.classList.add('animate-'+animation);
            });
        });
    }
    /**
     * Kills off the event by action
     * @param {string} eventName - The event that will stop the animation.
     * @param {string} animation - The animation that will be removed after action is taken.
     * @returns {void}
     */
    stopEvent(eventName, animation){
        [...this.elem].forEach((e)=>{
            let sd=this.speed,
                dy=this.delay,
                dr=this.dir,
                fl=this.fill,
                ct=this.count,
                st=this.state,
                du=this.dur,
                tm=this.timing;
            this.handler[e] = e.addEventListener(eventName,function(event,s=sd, d=dy, r=dr,f=fl,c=ct,q=st,k=du,t=tm){
                s!=='' ? this.classList.remove(s) : '';
                d!=='' ? this.classList.remove(d) : '';
                r!=='' ? this.classList.remove(r) : '';
                f!=='' ? this.classList.remove(f) : '';
                c!=='' ? this.classList.remove(c) : '';
                q!=='' ? this.classList.remove(q) : '';
                k!=='' ? this.classList.remove(k) : '';
                t!=='' ? this.classList.remove(t) : '';
                this.classList.remove('animate-'+animation);
            });
        });
    }
    /**
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
    createAnimation(animate, speed='', delay=0, direction='normal', fill='none',count='infinte',state='running', duration=0, timing='linear', ignore=[]){
        var i=0;
        if(typeof(animate)==='object'){
            [...this.elem].forEach((e)=>{
                i+=1;
                if(!animate.ignore||!animate.ignore.includes(i)){
                    e.classList.add('animate-'+animate.animation);
                    typeof(animate.speed)==='string'&&animate.speed!=='' ? e.classList.add('animate-speed-'+animate.speed) : '';
                    typeof(animate.delay)==='number'&&animate.delay!=0 ? e.classList.add('animate-delay-'+animate.delay) : '';
                    typeof(animate.direction)==='string'&&animate.direction!='' ? e.classList.add('animate-dir-'+animate.direction) : '';
                    typeof(animate.fill)==='string'&&animate.fill!='' ? e.classList.add('animate-fill-'+animate.fill) : '';
                    typeof(animate.count)==='string'&&animate.count!='' ? e.classList.add('animate-count-'+animate.count) : '';
                    typeof(animate.state)==='string'&&animate.state!='' ? e.classList.add('animate-state-'+animate.state) : '';
                    typeof(animate.duration)==='number'&&animate.duration!='' ? e.classList.add('animate-dur-'+animate.duration) : '';
                    typeof(animate.timing)==='string'&&animate.timing!='' ? e.classList.add('animate-timing-'+animate.timing) : '';
                }
            });
        }else{
            [...this.elem].forEach((e)=>{
                i+=1;
                if(!ignore.includes(i)){
                    e.classList.add('animate-'+animate);
                    typeof(speed)==='string'&&speed!=='' ? e.classList.add('animate-speed-'+speed) : '';
                    typeof(delay)==='number'&&delay!=0 ? e.classList.add('animate-delay-'+delay) : '';
                    typeof(direction)==='string'&&direction!=='' ? e.classList.add('animate-dir-'+direction) : '';
                    typeof(fill)==='string'&&fill!=='' ? e.classList.add('animate-fill-'+fill) : '';
                    typeof(count)==='string'&&count!=='' ? e.classList.add('animate-count-'+count) : '';
                    typeof(state)==='string'&&state!=='' ? e.classList.add('animate-state-'+state) : '';
                    typeof(duration)==='number'&&duration!=0 ? e.classList.add('animate-dur-'+duration) : '';
                    typeof(timing)==='string'&&timing!=='' ? e.classList.add('animate-timing-'+timing) : '';
                }
            });
        }
    }
    /**
     * Creates animations with a certain conditions
     * @param {object} animate - JSON format of the number and conditions(Starting with 1...)
     * @returns {void}
     */
    condAnimation(animate){
        var i=0;
        [...this.elem].forEach((e)=>{
            i+=1;
            if(animate[i]){
                e.classList.add('animate-'+animate[i].animation);
                typeof(animate[i].speed)==='string'&&animate[i].speed!=='' ? e.classList.add('animate-speed-'+animate[i].speed) : '';
                typeof(animate[i].delay)==='number'&&animate[i].delay!=0 ? e.classList.add('animate-delay-'+animate[i].delay) : '';
                typeof(animate[i].direction)==='string'&&animate[i].direction!=='' ? e.classList.add('animate-dir-'+animate[i].direction) : '';
                typeof(animate[i].fill)==='string'&&animate[i].fill!=='' ? e.classList.add('animate-fill-'+animate[i].fill) : '';
                typeof(animate[i].count)==='string'&&animate[i].count!=='' ? e.classList.add('animate-count-'+animate[i].count) : '';
                typeof(animate[i].state)==='string'&&animate[i].state!=='' ? e.classList.add('animate-state-'+animate[i].state) : '';
                typeof(animate[i].duration)==='number'&&animate[i].duration!=0 ? e.classList.add('animate-dur-'+animate[i].duration) : '';
                typeof(animate[i].timing)==='string'&&animate[i].timing!=='' ? e.classList.add('animate-timing-'+animate[i].timing) : '';
            }
        });
    }
}
