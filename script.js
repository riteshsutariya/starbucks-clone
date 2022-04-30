console.log(window)
// alert(window.screen.width)

const btn=document.getElementById('menu-btn')
const menu=document.getElementById('menu');
var flag=0;
function navToggle(){
  
  btn.classList.toggle('open')
  menu.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
  if(flag==0)
  {
      flag=1;
      
  }
  else if(flag==1)
  {
      flag=0;
  }
  console.log(flag);
}

btn.addEventListener('click',navToggle)