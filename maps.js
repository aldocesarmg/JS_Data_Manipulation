import inquirer from "inquirer";

let shoppingListMap = new Map();
let keepMenuOpen = true;

export default async function MapFunctionsMenu() {
    console.log(`This is a shopping list`);
    console.log(`Please choose the option: \n 1. Add new element \n 2. Show elements \n 3. Delete an element`);

    do{
        await askInput([{
            type: 'input',
            name: 'menuSelection',
            message: 'Please choose an option: '
        }], answer => addElementToMap(answer.menuSelection));
    } while (keepMenuOpen);
}

async function addElementToMap(selection) {
    switch(selection) {
        case '1':
            let questions = [
                {
                type: 'input',
                name: 'elementName',
                message: 'Please introduce the new element: '
                },
                {
                type: 'input',
                name: 'elementQuantity',
                message: 'Please introduce quantity for the new element: '
                } 
            ];
            await askInput(questions, answer => shoppingListMap.set(answer.elementName, answer.elementQuantity));
            break;
        default:
            console.log(`Not an option.`);
            break;
    }
}

async function askInput(questions, action) {
    await inquirer.prompt(questions).then(answer => {
        return action(answer);
    });
}

// module.exports = MapFunctionsMenu;