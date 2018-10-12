const familyMembers = [{firstName: 'Stan', lastName: 'Shapiro'},{firstName: 'Cheryl', lastName: 'Shapiro'}, {firstName: 'Perrin', lastName: 'Shapiro'}, {jfirstName: 'Benjamin', lastName: 'Kaplan'}, {firstName: 'Sherry', lastName: 'Kaplan'}, {firstName: 'Barry', lastName: 'Kaplan'}, {firstName: 'Rae', lastName: 'Weintraub'}, {firstName: 'Louis', lastName: 'Weinttraub'}, {firstName: 'Same', lastName: 'Weintraub'}];

class SecretSanta {
    constructor (name) {
        this.sender = name;
        this.matchResults = [];
        this.invalidRecipient = '';
        this.currentMatch = '';
        
    }
    //check to see if santa has had same recipient for past three years
    checkForRepeats (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2]) {
                this.invalidRecipient = arr[i];
            }
        }
    }
    //matching family members function. Logic built to determine sender's identity and prevent self-sent gifts.
    matchSendingToReceiving (arr) {
        let receivingList = arr.slice();
        for (let i = 0; i < arr.length; i++) {
            let receivingListIndex = Math.floor(Math.random() * receivingList.length);
            while (receivingList[receivingListIndex] == this.sender) {
                console.log("cannot send presents to yourself!!");
                receivingListIndex = Math.floor(Math.random() * receivingList.length);
            }
            //run checkForRepeats to determine if santa has had recipient for previous three years
            this.checkForRepeats(this.matchResults)
            if (receivingListIndex === this.invalidRecipient) {
                console.log("Too many years in a ROW! RE-ROLL!!!")
                receivingListIndex = Math.floor(Math.random() * receivingList.length);
                this.invalidRecipient = '';
            } else {
                let receiving = receivingList.splice(receivingListIndex, 1)[0];
                this.matchResults.push(receiving);
                this.currentMatch = receiving;
            }
            
        }
        return this.currentMatch
    }
}

const Ben = new SecretSanta({firstname: 'Ben', lastName: 'Kaplan'})

Ben.matchSendingToReceiving(familyMembers);
Ben.matchSendingToReceiving(familyMembers);
console.log(Ben.currentMatch);
























