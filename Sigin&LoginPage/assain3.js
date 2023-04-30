var name1=document.getElementById("u_name")
var password1=document.getElementById("u_pass")

password1.addEventListener("focusin",function()
{
    if(name1.value===``)
    {
        var para1=document.getElementById("namepara");
        para1.style.display="block"
    }
})


var btn=document.getElementById("btn");
btn.addEventListener("click",function(){

    var a=detail_check();
    if(a==true)
    {
        var name1=document.getElementById("u_name")
        var password1=document.getElementById("u_pass")
        name1.value=``;
        password1.value=``;
    }

})

function detail_check()
{
    var name1=document.getElementById("u_name").value
    var password1=document.getElementById("u_pass").value
    flag=true;
    var letters = /^[A-Za-z]+$/;
    if(name1==``)
    {
        var para1=document.getElementById("namepara");
        para1.style.display="block"
        flag=false;
    }
    else if(!name1.match(letters))
    {
        var para3=document.createElement("p")
        para3.textContent="Invalid User Name..!!"
        para3.style.color="red"
        var divv=document.getElementById("divname")
        divv.append(para3)
        flag=false;
    }  
     if(password1==``)
    {
        var para2=document.getElementById("passpara")
        para2.style.display="block"
        flag=false;
    }
    return flag;
}