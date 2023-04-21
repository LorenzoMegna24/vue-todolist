const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
          {
            text: 'Fare i compiti',
            done: false
          },
          {
            text: 'Fare la spesa',
            done: true
          },
          {
            text: 'Fare il bucato',
            done: false
          }
        ],
        
        TestoNewTodo: '',
        error: false
        
      }
    },
    methods:{
      fatta(x){
        this.todos.splice(x,1)
      },

      addTodo(){

        let newObj = {
          text: this.TestoNewTodo,
          done: false
        };
        if (newObj.text != '') {
          this.todos.push(newObj)
          this.error = false
        }else{
          this.error = true
        }
      },

      testoBarrato(x, element){
        
        if (this.todos[x].done == false) {
          this.todos[x].done = true
        }else {
          this.todos[x].done = false
        }
       // element.done = !element.done
       }


    },
  }).mount('#app')