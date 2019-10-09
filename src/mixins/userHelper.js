export const userHelper = {
    computed: {
        theuser: function() {
            return this.$store.getters["user/user"];
        }
    },
    methods: {
        setUser: function(user_data) {
            this.$store.dispatch("user/set", user_data);
        },
        userHelper_login: function() {
            var payload = {
                email: this.email,
                password: this.password
            };
            axios.post("/api/login/", payload).then(response => {
                var user_data = {
                    token: response.data.token,
                    email: response.data.email,
                    name: response.data.name
                };
                self.setUser(user_data);
                self.$emit("logedin");
            });
        },
        userHelper_register: function() {
            var payload = {
                email: this.email,
                password: this.password
            };
            axios.post("/api/register/", payload).then(response => {
                var user_data = {
                    token: response.data.token,
                    email: response.data.email,
                    name: response.data.name
                };
                self.setUser(user_data);
                self.$emit("registered");
            });
        }
    }
};
