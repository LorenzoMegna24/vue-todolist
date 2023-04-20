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
        this.todos.push(newObj)

      },


    },
  }).mount('#app')