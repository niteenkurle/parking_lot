
const readline = require('readline');
const readLine = readline.createInterface({    
    input: process.stdin,
    output: process.stdout
});
const parkingImplInstance = require('./parkingImpl')

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
               // console.log("input", input);
                try {
                    const result = await parkingImplInstance.park(input[1].trim(), input[2].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('leave'):

                try {
                    const result = await parkingImplInstance.leave(input[1]);
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

            case ('registration_numbers_for_cars_with_colour'):

                try {
                    const result = await parkingImplInstance.getRegistrationNumbersFromColor(input[1].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;


            case ('slot_numbers_for_cars_with_colour'):

                try {
                    const result = await parkingImplInstance.getSlotNumbersFromColor(input[1].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;


            case ('slot_number_for_registration_number'):

                try {
                    const result = await parkingImplInstance.getSlotNumberFromRegNo(input[1].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('exit'):
                rl.pause();
                break;

            default:
                console.log('Seems like an issue with command that you typed , please note predeifed commands are case sensitive and matched as per the description!');
        }
    });
}

initMain();