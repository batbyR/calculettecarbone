export const forcedLogin = {
    mounted: function() {
        var user = this.$store.getters["user/data"];

        if (!user.logedIn) {
            this.$router.push("/");
        }
    }
};
