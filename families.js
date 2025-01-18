//I wrote the code to make a menu app that can input family surnames and list people within those families
//set up a family class to add different famalies
class Family {
    constructor(surname) {
        this.surname = surname;
        this.members = [];
    }
// you can add families members with this
    addMember(name) {
        this.members.push(name);
    }
// you can remove family members with this
    removeMember(name) {
        const index = this.members.indexOf(name);
        if (index !== -1) {
            this.members.splice(index, 1);
            prompt(`${name} has been removed from the ${this.surname} family.`);
        } else {
            prompt(`${name} is not in the ${this.surname} family.`);
        }
    }
//you can view the members of a family with this
    viewMembers() {
        if (this.members.length === 0) {
            prompt(`The ${this.surname} family has no members.`);
        } else {
            prompt(`Members of the ${this.surname} family:`);
            this.members.forEach(member => prompt(`- ${member}`));
        }
    }
}
// this is all the menu code
class FamilyApp {
    constructor() {
        this.families = [];
    }

    start() {
        let option = "";
        do {
            option = prompt("Family Menu Options:\n1. Add Family\n2. View Families\n3. Add Member\n4. Remove Member\n5. Delete Family\n6. Exit\nChoose an option:");
            switch (option) {
                case "1":
                    this.addFamily();
                    break;
                case "2":
                    this.viewFamilies();
                    break;
                case "3":
                    this.addMember();
                    break;
                case "4":
                    this.removeMember();
                    break;
                case "5":
                    this.deleteFamily();
                    break;
                case "6":
                    prompt("Exiting the application. Goodbye!");
                    break;
                default:
                    prompt("Invalid option. Please try again.");
            }
        } while (option !== "6");
    }
//all the methods named to easily be able to tell what they will do
    addFamily() {
        const surname = prompt("Enter the surname of the family:");
        if (surname) {
            const newFamily = new Family(surname);
            this.families.push(newFamily);
        } else {
            prompt("Invalid input. Please try again.");
        }
    }

    viewFamilies() {
        if (this.families.length === 0) {
            prompt("There are no families.");
        } else {
            this.families.forEach((family, index) => {
                prompt(`${index + 1}. ${family.surname} Family:`);
                family.viewMembers();
            });
        }
    }

    addMember() {
        const surname = prompt("Enter the surname of the family to add a member to:");
        const family = this.families.find(f => f.surname === surname);
        if (family) {
            const name = prompt("Enter the name of the member:");
            if (name) {
                family.addMember(name);
            } else {
                prompt("Invalid input. Please try again.");
            }
        } else {
            prompt(`The ${surname} family does not exist.`);
        }
    }

    removeMember() {
        const surname = prompt("Enter the surname of the family to remove a member from:");
        const family = this.families.find(f => f.surname === surname);
        if (family) {
            const name = prompt("Enter the name of the member to remove:");
            family.removeMember(name);
        } else {
            prompt(`The ${surname} family does not exist.`);
        }
    }

    deleteFamily() {
        const surname = prompt("Enter the surname of the family to delete:");
        const index = this.families.findIndex(f => f.surname === surname);
        if (index !== -1) {
            this.families.splice(index, 1);
        } else {
            prompt(`The ${surname} family does not exist.`);
        }
    }
}

const app = new FamilyApp();
app.start();