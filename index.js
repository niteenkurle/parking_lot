
const readline = require('readline');
const readLine = readline.createInterface({    
    input: process.stdin,
    output: process.stdout
});
const parkingImplInstance = require('./parkingImpl')
const fs = require('fs')

// Get the user input 
let initMain = () => {

    readLine.on('line', async (input) => {
        input = input.split(" ");

        switch (input[0]) {
            case ('create_parking_lot'):

                try {
                    const result = await parkingImplInstance.createParkingLot(input[1]);
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('park'):
                try {
                    const result = await parkingImplInstance.park(input[0].trim(), input[1].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('leave'):

                try {
                    const result = await parkingImplInstance.leave(input[1], input[2]);
                    console.log(result);

                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;


            case ('status'):

                try {
                    const result = await parkingImplInstance.status();
                    console.log(result);

                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('exit'):
                rl.pause();
                break;

            default:
                console.log('Seems like an issue with command!');
        }
    });
}

initMain();