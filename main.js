"use strict";

const maxLines = 20; // 何行で改ページするか
const box = document.getElementById("box");
const pages = 3;
let currentPage = 1;

const createLines = (currentPage) => {
    let str = "";
    for (let i = 0; i < 15; i++){
        str += "<p>これはテストです</p>";
    }
    str += "<p><a href='#p-" + (currentPage + 1) + "'>次のページへ</a></p>";
    return str;
}

const createTestPages = () =>{
    let str = "";
    for(let i = 0; i < 3; i++){
        str += "<div id='p-" + i + "' class='page'>";
        str += createLines(i);
        str += "</div>";
    }
    box.innerHTML = str;
}

createTestPages();

const movePage = (isNext) => {
    if(isNext){
        if(currentPage < pages){
            currentPage++;
        }
    } else {
        if(currentPage > 1){
            currentPage--;
        }
    }
    // console.log(x);
    window.scrollTo({
        left: (currentPage - 1) * window.innerWidth,
        behavior: 'smooth'
    });
    console.log(currentPage)
}