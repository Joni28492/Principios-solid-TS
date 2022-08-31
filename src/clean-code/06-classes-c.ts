(()=>{

    //Aplicando el pricipio de responsabilidad única
    //priorizar composicion frente a la herencia!!


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
    }
    class User  {

        public email: string;
        public lastAccess: Date;
        public role: string;
      
        constructor({
            email,
            role,
        }:UserProps){        
            this.lastAccess = new Date()
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true
        }
    }


    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder:   string;
    }

    class Settings  {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
           }:SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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


    class UserSettings {

        public person   :Person;
        public user     :User;
        public settings :Settings;


        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory,lastOpenFolder,
        }:UserSettingsProps){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.settings= new Settings({workingDirectory,lastOpenFolder})
        }

    }



    
    const userSettings = new UserSettings({
        birthdate:new Date('1992-04-28'),
        email:'/home',
        gender:'M',
        lastOpenFolder:'/usr/home',
        name:'Joni',
        role:'Admin',
        workingDirectory:'joni@gmail.com',
        }
    )

    console.log({userSettings})

})()