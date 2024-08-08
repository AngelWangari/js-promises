const delayedColorChange=(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve()
        },delay)
    })
};
delayedColorChange("red",)
.then(()=>delayedColorChange("pink",2000))
.then(()=>delayedColorChange("purple",2000))
.then(()=>delayedColorChange("orange",2000))
.then(()=>delayedColorChange("yellow",2000))
.then(()=>delayedColorChange("maroon",2000))