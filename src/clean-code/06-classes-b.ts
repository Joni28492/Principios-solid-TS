(()=>{

    //No aplicando de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        name:string;
        gender:Gender;
        birthdate:Date;
    }

    class Person {

        public birthdate: Date;
        public gender   :Gender;
        public name     :string;
      
        constructor({name, gender, birthdate}:PersonProps){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        } 

    }


    interface UserProps {
        email:      string;
        role:       string;
        name:       string;
        gender:     Gender;
        birthdate:  Date;
    }
    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: string;
      
        constructor({email,role,name,gender,birthdate}:UserProps){
            super({name, gender, birthdate});
            this.lastAccess = new Date()
            this.email = email
            this.role  = role
        }

        checkCredentials(){
            return true
        }
    }


    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder:   string;
        email:            string;
        role:             string;
        name:             string;
        gender:           Gender;
        birthdate:        Date;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate}:UserSettingsProps){
            super({email, role, name, gender, birthdate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    
    const userSettings = new UserSettings({
        birthdate:new Date('1992-04-28'),
        email:'/home',
        gender:'M',
        lastOpenFolder:'/usr/home',
        name:'Admin',
        role:'Joni',
        workingDirectory:'joni@gmail.com',
        }
    )

    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()})

})()