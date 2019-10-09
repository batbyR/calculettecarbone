export const uxHelper = {
    computed: {
        fieldDetailsOpened: function() {
            return this.$store.state.ux.fieldDetailsOpened;
        }
    },
    methods: {
        toggleFieldDetails: function() {
            this.$store.state.ux.fieldDetailsOpened = !this.$store.state.ux
                .fieldDetailsOpened;
        },
        closeFieldDetails: function() {
            this.$store.state.ux.fieldDetailsOpened = false;
        }
    }
};
