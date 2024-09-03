const form = document.querySelector('form');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const button = document.querySelector('.change-btn');

let active = false;

form.addEventListener('click',changeTheme)

function toggle(event){
  active = !active;

  if(active){
    body.style.backgroundColor = `var(--drk-primary-color)`;
    container.style.backgroundColor = `var(--drk-secondary-color)`;
    container.style.color = `var(--drk-font)`;
    button.style.backgroundColor = `var(--drk-tertiary-color)`;
  }else{
    body.style.backgroundColor = `var(--lgt-primary-color)`
    container.style.backgroundColor = `var(--lgt-secondary-color)`;
    container.style.color = `var(--lgt-font)`;
    button.style.backgroundColor = `var(--lgt-tertiary-color)`;
  }
}
