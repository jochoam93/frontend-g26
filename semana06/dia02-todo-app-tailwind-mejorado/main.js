const taskInput = document.querySelector('.task__input')
const taskButtonClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

//console.log({taskInput,taskButtonClear,taskList})

const tasks=[
    {
        id: 'tarea-1',
        title: 'Estudiar Javascript',
        completed: true
    },

    {
        id: 'tarea-2',
        title: 'Salir algun dia al receso',
        completed: false
    },

    {
        id: 'tarea-3',
        title: 'Resolver el reto de la semana',
        completed: false
    }
]

//01-debemos agregar una nueva tarea a la lista

taskInput.addEventListener('keydown',(event)=>{

//    console.log('hola')

const {value} = event.target // se extra el value del elemento target



if(event.key === 'Enter'){

    console.log('Estamos agregando una nueva tarea',value)
    taskInput.value=''
}


})

