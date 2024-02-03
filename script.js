const buttons= document.querySelectorAll("button");
const input= document.getElementById('input')
let s='';

buttons.forEach(element =>{
  element.addEventListener('click',(e)=>{
    if(e.target.innerText=='='){
      s=String(eval(s));
      input.value=s;
    }
      else if(e.target.innerText=='AC'){
        s='';
        input.value=s;
      }
        else if(e.target.innerText=='DEL'){
          s=s.substring(0,s.length-1);
          input.value=s;
        }
          else if(e.target.innerText=='+/-'){
            s=-(String(eval(s)));
            input.value=s;
          }
    else{
      s+=e.target.innerText;
      input.value=s;
    }
  })
})