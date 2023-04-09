import inquirer from 'inquirer';
import chalk from 'chalk';

async function guessNumber() {
    let numberFoud = false;
    let count = 0;
    while (!numberFoud) {
        let myNumber = await inquirer.prompt([{
            name: 'myNum',
            type: 'number',
            message: count>0?'Try another number between 1 to 10':'Type any number between 1 to 10: '
        }])

        if (myNumber.myNum == Math.floor(Math.random() * 11)) {
            console.log( chalk.white.bgGreen.bold("\n Wahoo! you find the number:"))
            numberFoud = true;
        } else {
            if (count < 2) {
                numberFoud = false;
                count++
                console.log( chalk.red.bold('Wrong'))
            } else {
                console.log( chalk.white.bgRed.bold('\n Ohoo! you can\'t guess the number'))
                break;
            }

        }
    }

    await inquirer
        .prompt([
            {
                name: 'repeat',
                message: chalk.white.bgBlue.bold('\n Play Again? Press "Y"')
            },
        ])
        .then(answers => {
            if (answers.repeat == 'Y' || answers.repeat == 'y') {
                guessNumber();
            } else {

            }
        });
}


await guessNumber();


