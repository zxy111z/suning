/**
 * Created by Administrator on 2017/12/28/028.
 */
{
    // 轮播图
    let imgs=document.querySelectorAll(".imgs-box li");
    let pages=document.querySelectorAll(".lunbo-box li");
    pages.forEach(function(value,index){
        value.onclick=function(){
            for (var i=0;i<pages.length;i++){
                imgs[i].classList.remove("active");
                pages[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    })

    // 自动轮播
    let n=0;
    let banner=document.querySelector(".banner-center");
    function bannerfn(dir="r"){
       if(dir==="r"){
           n++;
           if(n===imgs.length){
               n=0;
           }
       }else if(dir==="l"){
           n--;
           if(n===-1){
               n=imgs.length-1;
           }
       }
        for (var i=0;i<pages.length;i++){
            pages[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        pages[n].classList.add("active");
        imgs[n].classList.add("active");
    }
    let t=setInterval(bannerfn,5000);
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(bannerfn,5000)
    }

    // 左右箭头
    let left=document.querySelector(".prev");
    let right=document.querySelector(".next");
    let flag=true;
    right.onclick=function(){
        if(flag){
            flag=false;
            bannerfn();
        }
    }
    left.onclick=function(){
        if(flag){
            flag=false;
            bannerfn("l");
        }

    }
    imgs.forEach(function(val,index){
        val.addEventListener("transitionend",function(){
            flag=true;
        });
    })
}
// 楼层跳转
{
    let topbar = document.querySelector(".topbar");
    let leftbar=document.querySelector(".aside-nei");
    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        // console.log(st);
        if (st >= 900) {
            topbar.style.top = "0";
        } else {
            topbar.style.top = "-50px";
        }
        if(st>=2830){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }
        lists.forEach(function (value,index) {
            if(st>=value.offsetTop){
                for(let i=0;i<lists.length;i++){
                    floors[i].classList.remove("active");
                }
                floors[index].classList.add("active");
            }
        })
    };


    let lists = document.querySelectorAll(".lists");
    // console.log(lists);
    let floors = document.querySelectorAll(".aside-nei li");
    // console.log(floors);
    floors.forEach (function (ele, index) {
        ele.onclick = function () {
            let ot = lists[index].offsetTop;
            // console.log(ot);
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) * 30 / 300;
            let time = 0;
            let t = setInterval(function () {
                now += speed;
                time += 30;
                if (time === 300) {
                    clearInterval(t);
                    now = ot;
                }
                document.documentElement.scrollTop = now;
            }, 30)
        }
    })
}