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

      testoBarrato(){
        if (this.todos.done = true) {
          this.todos.done = false
        }else if (this.todos.done = false) {
          this.todos.done = true
        }
      }


    },
  }).mount('#app')