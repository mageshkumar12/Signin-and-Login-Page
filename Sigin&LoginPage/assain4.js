var name11=document.getElementById("u_name")
        var email22=document.getElementById("email")
        var pass111=document.getElementById("pass1")
        var pass222=document.getElementById("pass2")

name11.addEventListener("input",function(){
       var letters = /^[A-Za-z]+$/;
       if(u_name.value.match(letters))
        {
   
        }
        else{
            var ndiv=document.getElementById("namedivp2")
            ndiv.style.display="block"
        }
})
email22.addEventListener("focusout",function(){
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email22.value))
  {

  }
  else{
    const para23=document.getElementById("mailpara2")
    para23.style.display="block"
  }
})




email22.addEventListener("focusin",function(){

    if(name11.value===``)
    {
      const para11=document.getElementById("namepara")
      para11.style.display="block"
    }
})

pass111.addEventListener("focusin",function(){
    if(name11.value==``)
    {
      const para11=document.getElementById("namepara")
      para11.style.display="block"
    }
   
    if(email22.value==``)
    {
     const para22=document.getElementById("mailpara")
     para22.style.display="block"
     
    }
})

pass222.addEventListener("focusin",function(){

    if(name11.value==``)
    {
      const para11=document.getElementById("namepara")
      para11.style.display="block"
    }
   
    if(email22.value==``)
    {
     const para22=document.getElementById("mailpara")
     para22.style.display="block"
    }
    if(pass111.value==``)
    {
     const para33=document.getElementById("pass1para")
     para33.style.display="block"
    }
})



var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    var a=detail_check();
    var b= pass_check()

    if(a==true && b==true)
    {
        
        name11.value=``;
        email22.value=``;
        pass111.value=``;
        pass222.value=``;

        var cnpara=document.createElement("p")
        cnpara.textContent="Submitted Successfully"
        cnpara.style.color="green"
        var cndiv=document.getElementById("pass2div")
        cndiv.append(cnpara)

    }
})


function detail_check()
{
    var namee=document.getElementById("u_name").value
    var emaill=document.getElementById("email").value
    var pass1=document.getElementById("pass1").value
    var pass2=document.getElementById("pass2").value
    var flag=true;
    

    if(namee==``)
    {
      const para11=document.getElementById("namepara")
      para11.style.display="block"
      flag=false;
    }
    else if(!isNaN(namee))
    {
        var ndiv=document.getElementById("namedivp2")
        ndiv.style.display="block"
        flag=false;
    }
    if(emaill==``)
    {
     const para22=document.getElementById("mailpara")
     para22.style.display="block"
     flag= false;
    }
    if(pass1==``)
    {
     const para33=document.getElementById("pass1para")
     para33.style.display="block"
     flag= false;
    }
    if(pass2==``)
    {
     const para44=document.getElementById("pass2para")
     para44.style.display="block"
     flag= false;
    }

    return flag;
}


function pass_check()
{
    var password1=(document.getElementById("pass1").value) 
    var password2=(document.getElementById("pass2").value) 
  
    if(password1.localeCompare(password2)>0)
            {
                var para5=document.getElementById("pass2para2");
                para5.style.display="block";
                return false;
            }
            return true;
}