
//demonstration example array

const familyMembers = [{firstName: 'Stan', lastName: 'Shapiro'},{firstName: 'Cheryl', lastName: 'Shapiro'}, {firstName: 'Perrin', lastName: 'Shapiro'}, {firstName: 'Benjamin', lastName: 'Kaplan'}, {firstName: 'Sherry', lastName: 'Kaplan'}, {firstName: 'Barry', lastName: 'Kaplan'}, {firstName: 'Rae', lastName: 'Weintraub'}, {firstName: 'Louis', lastName: 'Weinttraub'}, {firstName: 'Sam', lastName: 'Weintraub'}];

//start define class

class SecretSanta {
    constructor (name) {
        this.sender = name;
        this.matchResults = [];
        this.invalidRecipient = '';
        this.currentMatch = '';
        this.immediateFamily ='';
        
    }

    //checking for repetition after three years

    checkForRepeats (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2]) {
                this.invalidRecipient = arr[i];
            }
        }
    }

    //matching family members function. Logic built to determine sender's identity and prevent self-sent gifts.
    
    matchSendingToReceiving (arr) {
        this.currentMatch = '';
        let receivingList = arr.slice();
        for (let i = 0; i < arr.length; i++) {
            let receivingListIndex = Math.floor(Math.random() * receivingList.length);
            if (receivingList[receivingListIndex].firstName === this.sender.firstName && receivingList[receivingListIndex].lastName === this.sender.lastName) {
                console.log("cannot send presents to yourself");
                receivingListIndex = Math.floor(Math.random() * receivingList.length);
            } else {

                //run checkForRepeats to determine if santa has had recipient for previous three years
                
                this.checkForRepeats(this.matchResults)
                if (receivingList[receivingListIndex] === this.invalidRecipient) {
                    console.log("Too many years in a ROW! RE-ROLL!!!")
                    receivingListIndex = Math.floor(Math.random() * receivingList.length);
                    this.invalidRecipient = '';

                //checking to make sure recipient isn't immediate family

                } else if (receivingList[receivingListIndex].lastName === this.sender.lastName) {
                    console.log("Don't pick immediate family you already got them covered!")
                    receivingListIndex = Math.floor(Math.random() * receivingList.length);
                    this.invalidRecipient = '';
                } else {
                    let receiving = receivingList.splice(receivingListIndex, 1)[0];
                    this.matchResults.push(receiving);
                    this.currentMatch = receiving;
                }
            }
            
            
        }
        return this.currentMatch
    }
}
//End define class


//example class declaration

const Ben = new SecretSanta({firstName: 'Benjamin', lastName: 'Kaplan'})

Ben.matchSendingToReceiving(familyMembers);
console.log(Ben.currentMatch);


























