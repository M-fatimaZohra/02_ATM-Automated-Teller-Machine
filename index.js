import inquirer from "inquirer";
let myBalance = 10000000;
let myPin = 3045;
const result = await inquirer.prompt([
    {
        name: "Authentication",
        type: "number",
        message: "Provide pin to start",
    },
]);
if (result.Authentication === myPin) {
    console.log(`Welcome to ATM Machine`);
    const step1 = await inquirer.prompt([
        {
            name: "Choose",
            type: "list",
            choices: ["Withdraw", "CheckBalance", "FastCash", "ChangePin"],
            message: "What You Want To Do?",
        },
    ]);
    if (step1.Choose === "Withdraw") {
        const step2 = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Enter your Amount >>"
            }
        ]);
        if (step2.Amount <= myBalance) {
            console.log(`\n•Your Balance ${myBalance}:\n\n•Your Amount of withdraw ${step2.Amount}:`);
            console.log(`\n•Your Current Balance Now = ${myBalance - step2.Amount}`);
        }
        else {
            console.log(`BALANCE BOUNCED! BALANCE BOUNCED!
                your balance is ${myBalance}`);
        }
    }
    else if (step1.Choose === "CheckBalance") {
        console.log(`Your Current balance is ${myBalance}`);
    }
    else if (step1.Choose === "FastCash") {
        const step2 = await inquirer.prompt([
            {
                name: "Choose",
                type: "list",
                choices: [500, 1000, 1500, 3000, 5000, 10000, 15000,],
                message: "select from the following unit"
            }
        ]);
        if (step2.Choose === 500) {
            console.log(`•Fast Cash Scucessfully. \n• Current cash: ${myBalance - 500} `);
        }
        else if (step2.Choose === 1000) {
            console.log(`•Fast Cash Scucessfully. \n• Current cash: ${myBalance - 1000} `);
        }
        else if (step2.Choose === 1500) {
            console.log(`•Fast Cash Scucessfully. \n• Current cash: ${myBalance - 1500} `);
        }
        else if (step2.Choose === 3000) {
            console.log(`•Fast Cash Scucessfully. \n• Current cash: ${myBalance - 3000} `);
        }
        else if (step2.Choose === 5000) {
            console.log(`•Fast Cash Scucessfully. \n• Current cash: ${myBalance - 5000} `);
        }
        else if (step2.Choose === 10000) {
            console.log(`•Fast Cash Scucessfully. \n• Current cash: ${myBalance - 10000} `);
        }
        else if (step2.Choose === 15000) {
            console.log(`•Fast Cash Scucessfully. \n• Current cash: ${myBalance - 15000} `);
        }
        else {
            console.log(`BAD CHOICE! BAD CHOICE!`);
        }
    }
    else if (step1.Choose === "ChangePin") {
        let step2 = await inquirer.prompt([
            {
                name: "Why",
                type: "list",
                choices: [
                    "Scurity Reasons",
                    "Someone Found My Pin ",
                    "Pin Is Easy To Be Cracked",
                    "I Am Not Satisfied With Pin Code"
                ],
                message: "Why you Want To Change Pin Code?"
            },
        ]);
        if (step2.Why === "Scurity Reasons" || "Someone Found My Pin " || "Pin Is Easy To Be Cracked" || "I Am Not Satisfied With Pin Code") {
            let step3 = await inquirer.prompt([
                {
                    name: "pin",
                    type: "number",
                    message: "Remember you can change your pin once in 6 months"
                }
            ]);
            myPin = step3.pin;
            console.log(`Now you Pin is Changed to ${myPin}`);
        }
    }
    else {
        console.log(`BAD CHOICE! BAD CHOICE! `);
    }
}
else {
    console.log(`WRONG PIN! WRONG PIN!`);
}
