const app = Vue.createApp({
    data() {
        return {
            firstname: "Marco",
            lastname: "Dev",
            email: "marcodev@free.fr",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
       async getUser() {
           const res = await fetch("https://randomuser.me/api");
           /* It return a 'results array' with single user by default 
              so i can destructure it */
           const {results} = await res.json();
           console.log(results);
            this.firstname = results[0].name.first,
            this.lastname =  results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})

app.mount("#app");