var Cylon = require('cylon');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot


function fly(robot) {
    function fly(robot) {
        bot = robot;
        bot.drone.disableEmergency();
        bot.drone.ftrim();
        bot.drone.takeoff();
        after(10*1000, function() {
            bot.drone.left(0.2);
        });
        after(5 * 1000, function () {
            bot.drone.left(0);
            bot.drone.forward(0.2);
        });
        after(5 * 1000, function () {
            bot.drone.forward(0);
            bot.drone.stop();
        });
    }}
    Cylon.start();

