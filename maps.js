import inquirer from "inquirer";

let shoppingListMap = new Map();
let keepMenuOpen = true;

export default async function MapFunctionsMenu() {
    console.log(`This is a shopping list`);
    console.log(`Please choose the option: \n 1. Add new element \n 2. Show elements \n 3. Delete an element \n 4. Check if element exists \n 5. Get number of elements in the list \n 6. Get specific element from the map \n 7. Clear the list`);

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
            let addQuestions = [
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
            await askInput(addQuestions, answer => shoppingListMap.set(answer.elementName, answer.elementQuantity));
            // Si algun elemento se repite a la hora de agregarlo al map, se sustituye de acuerdo a su key
            break;
        case '2':
            shoppingListMap.forEach((item, quantity) => {
                console.log(item, quantity);
            });
            break;
        case '3':
            let removeQuestion = [
                {
                    type: 'input',
                    name: 'removeElement',
                    message: 'Please introduce the element to delete: '
                }
            ]
            await askInput(removeQuestion, answer => shoppingListMap.delete(answer.removeElement) ? console.log('The element was deleted successfully.') : console.log('Error: Element is not present in the list.'));
            break;
        case '4':
            let checkQuestion = [
                {
                    type: 'input',
                    name: 'checkElement',
                    message: 'Please introduce the element to check: '
                }
            ]
            await askInput(checkQuestion, answer => shoppingListMap.has(answer.checkElement) ? console.log('Element exists') : console.log('Element does not exist'));
            break;
        case '5':
            
            break;
        case '6':
            
            break;
        case '7':
            
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