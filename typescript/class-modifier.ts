class User {
    public userName: string;
    private userPassword: string;
    protected helpPhrase: string;

    constructor(userName: string, userPassword: string, helpPhrase: string) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.helpPhrase = helpPhrase;
    }

    public getUserPassword() {
        return this.userPassword;
    }
}

class UserHelper extends User {
    public getHelpPhrase() {
        return this.helpPhrase;
    }
}

var newUser = new UserHelper("grandeurkoe", "123456", "1-6");
console.log(`Username: ${newUser.userName}`);
console.log(`Password: ${newUser.getUserPassword()}`);
console.log(`Help Phrase: ${newUser.getHelpPhrase()}`);