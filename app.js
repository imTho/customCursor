const cursor = document.querySelector('.cursor');

document.onmousemove = function(e){
    console.log(e);

    cursor.style.top = e.clientY+"px";
    cursor.style.left = e.clientX+"px";
};