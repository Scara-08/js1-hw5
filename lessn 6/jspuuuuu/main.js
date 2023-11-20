let count = document.getElementById('count');
let time = document.getElementById('time');
let countPerSecond = document.getElementById('count-per-second');
let click = document.getElementById('click');
let reset = document.getElementById('reset');

let i = 0;
let interval;
let timeout;
let timeValue = time.value * 1000; 

click.onclick = () => {
    if (i === 0) {
        interval = setInterval(() => {
            timeValue -= 100;
            time.value = (timeValue / 1000).toFixed(2);
        }, 100);
        timeout = setTimeout(() => {
            click.disabled = true;
            countPerSecond.textContent = (i / (time.value)).toFixed(2);
            clearInterval(interval);
        }, timeValue);
    }
    i++;
    count.textContent = i;
}

reset.onclick = () => {
    i = 0;
    clearTimeout(timeout);
    count.textContent = i;
    countPerSecond.textContent = 0;
    click.removeAttribute('disabled');
    clearInterval(interval);
    time.value = 10;
    timeValue = time.value * 1000;
}

time.onchange = (event) => {
    if (event.target.value < 5) {
        event.target.value = 5;
        timeValue = event.target.value * 1000;
    } else if (event.target.value > 15) {
        event.target.value = 15;
        timeValue = event.target.value * 1000;
    } else {
        timeValue = event.target.value * 1000;
    }
}










//let root = document.getElementById ('root')

// root.style.backgroundColor = 'red';
// console.log(root.style);


//root.style.cssText = 'background-color: yellow'


// let timeout = setTimeout(()=>{
// console.log('Hello Worl!');
// },2000)

// clearTimeout(timeout);

// let interval = setInterval(()=> {
// console.log('Helo World!');
//     },2000);

// clearInterval(interval);

