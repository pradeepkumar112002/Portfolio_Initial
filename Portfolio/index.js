//sliding animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('bright');
        }
        else{
            entry.target.classList.remove('bright');
        }
    });
});
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));
const hiddenElements1 = document.querySelectorAll('.hid');
hiddenElements1.forEach((el)=>observer1.observe(el));
const hiddenElements2 = document.querySelectorAll('.lef')
hiddenElements2.forEach((el)=>observer2.observe(el))
const hiddenElements3 = document.querySelectorAll('.rig');
hiddenElements3.forEach((el)=>observer3.observe(el))

//hamburger for mobile

let toggle = document.getElementsByClassName('toggle')[0]
let nav = document.getElementsByClassName('ele')[0]
let head = document.getElementById('head');
toggle.addEventListener('click', () => {
    console.log("Clicked")
    nav.classList.toggle('active');
    head.classList.toggle('act');

})

var gal = document.getElementById("gallery");
gal.addEventListener('click',()=>{
    window.alert("Under Construction")
})