const title=document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");
const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
showalltask();
function showalltask(){
    tasks.forEach((value,index)=> {

        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv=document.createElement("div");
        div.append(innerdiv);

        const p=document.createElement("p");
        p.innerText=value.title;
        innerdiv.append(p);

        const span=document.createElement("span");
        span.innerText=value.description;
        innerdiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deletebtn");
        btn.innerText="-";
        div.append(btn);
        btn.addEventListener("click",()=>{
            removetask();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showalltask();
        });
        container.append(div);
    });
}
function removetask(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    });
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const v=title.value;
    const v2=description.value;
    removetask();
    tasks.push({
        title:v,
        description:v2,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showalltask();
});