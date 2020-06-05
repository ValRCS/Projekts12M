console.log("My view is running!");

let app = new Vue({
    el: "#app", //where our app will attach
    data: {
        message: "Hello Vue!",
        greeting: "Sunny Day today",
    },
});
