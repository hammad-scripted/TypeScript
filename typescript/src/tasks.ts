import './tasks.css'

//  either we can use generic type or we can use type assertion
const btn=document.querySelector('.test-btn') as HTMLButtonElement;
btn?.addEventListener('click', () => console.log('clicked'));

const taskForm=document.querySelector('.form') as HTMLFormElement;
const taskInput=taskForm.querySelector('.form-input') as HTMLInputElement;
const taskList=document.querySelector('.list') as HTMLUListElement; 