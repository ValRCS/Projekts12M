console.log("My view is running!");

let app = new Vue({
    el: "#app", //where our app will attach
    data: {
        message: "You loaded this page on " + new Date().toLocaleString(),
        greeting: "Sunny Day today",
        seen: true,
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split("").reverse().join("");
        },
        toggleElement: function () {
            this.seen = !this.seen; //a way of reversing Boolean
        },
    },
    computed: {
        // a computed getter
        capitalMessage: function () {
            // `this` points to the vm instance
            return this.message.toUpperCase();
        },
    },
});
