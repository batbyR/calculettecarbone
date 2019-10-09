let m = require("marked");

export const marked = {
    methods: {
        previewText(text) {
            m.setOptions({
                renderer: new m.Renderer(),
                gfm: true,
                tables: true,
                breaks: true,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false
            });
            return m(text);
        }
    }
};
