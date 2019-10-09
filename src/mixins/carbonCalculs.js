export const carbonCalculs = {
    methods: {
        progress: function() {
            var fields = this.$store.getters.fields;
            return Math.round(
                (fields.filter(field => field.submitted).length /
                    fields.length) *
                    100
            );
        }
    }
};
