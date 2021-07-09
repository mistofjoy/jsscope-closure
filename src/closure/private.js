//Puedes crear métodos usando closures de esta forma
const person = () => {
    var saveName = "name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

newPerson = person ();
console.log(newPerson.getName());
newPerson.setName(`Oscar`);
console.log(newPerson.getName());