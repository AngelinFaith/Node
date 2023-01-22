// To use events in node. First need to import events.
const events= require("events");

//Then In order to access the inbuild methods of event class, we need to assign it in the variable to 
// create it as a object and access it by variable.property/methodName. 
const customEventEmitter = new events();

// Creating the event. 
// on("event type", listener function);
customEventEmitter.on("response", function(firstName, lastName) {
    console.log(`The Name is ${firstName}, ${lastName}`);
});

customEventEmitter.on("response",(id)=>{
    console.log(`The data is ${id}`);
});
customEventEmitter.on("response",()=>{
    console.log("Event without data");
});

customEventEmitter.on("display",(message)=>{
    console.log(`The received message ${message}`);
})

//Calling the event.
// emit("eventType", "value");

customEventEmitter.emit("response", "Faith", "Sheeba"); // This parameter is applicable for all the response events we decalre above.
// customEventEmitter.emit("response", 24);
// customEventEmitter.emit("response");
customEventEmitter.emit("display", "Hello...");


