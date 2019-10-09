import { timingSafeEqual } from "crypto";

export const storeHelper = {
    computed: {
        // calc
        calc: function() {
            return this.calculator;
        },
        calculator: function() {
            return this.$store.getters["calc/calculator"];
        },
        fields: function() {
            // Fields query
            return this.$store.getters["calc/fields"];
        },
        questions: function() {
            // Fields query
            return this.$store.getters["calc/questions"];
        },
        orderedFields: function() {
            return this.fields.sort(function(a, b) {
                return a.order - b.order;
            });
        },
        edibleFields: function() {
            return this.orderedFields.filter(field => field.order > 0);
        },
        submittedFields: function() {
            return this.edibleFields.filter(field => field.submitted).reverse();
        },
        notSubmittedFields: function() {
            return this.edibleFields.filter(field => !field.submitted);
        },
        domains: function() {
            // Domains query
            return this.$store.getters["calc/domains"];
        },
        currentField: function() {
            // Current field stuf
            // If a field is selected, return it

            var selectedField = this.selectedField;
            if (selectedField) return selectedField;

            // No field is selected : return the first not submitted
            var notSubmittedFields = this.notSubmittedFields;
            if (notSubmittedFields.length) return notSubmittedFields[0];

            // Return false
            return false;
        },
        selectedField: function() {
            return this.edibleFields.find(field => field.selected);
        },
        hasOneSelected: function() {
            return this.selectedField ? true : false;
        },
        progress: function() {
            return Math.round(
                (this.submittedFields.length / this.edibleFields.length) * 100
            );
        },
        total: function() {
            var total = 0;
            this.fields.forEach(field => {
                total += field.result;
            });
            return total;
        }
    },
    methods: {
        update: function() {
            this.domains.forEach(domain => {
                domain.result = 0;
                domain.fields.forEach(field => {
                    if (field.formula) {
                        this.parseFormula(field);
                    } else {
                        field.result = field.coefficient * field.val;
                    }
                    domain.result += field.result;
                });
            });
            this.$store.commit("calc/update");
            this.$store.dispatch("storage/save");
        },
        parseFormula: function(field) {
            var formula = field.formula.replace("COEF", field.coefficient);
            formula = formula.replace("VAL", field.val);

            this.questions.forEach(question => {
                formula = formula.replace(
                    "QUESTION_" + question.code,
                    question.val
                );
            });
            field.result = eval(formula);
        },
        reset: function() {
            this.fields.forEach(field => {
                field.val = 0;
                field.submitted = 0;
            });
            this.update();
        },
        selectField: function(field) {
            this.unselectField();
            field.selected = true;
        },
        unselectField: function() {
            this.fields.forEach(field => {
                field.selected = false;
            });
        }
    }
};
