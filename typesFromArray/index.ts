// Unfortunately this is as good as it gets in TypeScript
// https://steveholgado.com/typescript-types-from-arrays/

class SomeClass {
    static Animals = [
        { type: 'dog', name: 'fred'},
        { type: 'cat', name: 'thomas'},
        { type: 'turtle', name: 'bob'},
        { type: 'pig', name: 'fredrick'},
    ];
}

// Long hand
let types = SomeClass.Animals.map(animal => animal.type)
console.log(types)
let animalTypes = [...types] as const
console.log(animalTypes)
type Animal = typeof animalTypes[number]
const animal: Animal = 'elephant'
console.log(animal)

// Short hand
type OtherAnimal = typeof SomeClass.Animals[number]['type']
const otherAnimal: OtherAnimal = 'elephant'
console.log(otherAnimal)
