// Object.assign({} ,user, {wife: users_wife}, {second_wife}) // соеденяет объекты
// Object.freeze(user) // sub-zero // замораживает объект
// Object.keys(car), // достает все ключи и возвращает массив
// Object.values(car), // достает все значения и возвращает массив
// Object.entries(car) // записи возвращает массив с массивами где ключ и значение [ ['key', 'value'], ['key', 'value'] ]


// TZ
// Соеденить два объекта в одно целое (новый объект)
// Получить все ключи из нового объекта и сохранить их в новую переменную
// Получить все значения из нового объекта и сохранить их в новую переменную
// Соеденить две этих массива (ключи и значения)
// Отфильтровать массив по их типам элементов


// let eshkere = Object.assign( {} , user, {passport})

// let uwu = Object.keys(eshkere)

// let dosvidania = Object.values(eshkere)

// // let ya_v_dubae = uwu.concat(dosvidania)
// let ya_v_dubae = [].concat(uwu,dosvidania)





let user = {
    name: "Amal",
    surName: "truev",
    age: 29,
    wifes: ['Nargiza', 'Amina', 'Amalya', 'Shoxruxa'],
    wisas: ['USA', 'Ukrain', 'Russia', 'Mexico'],
    polniImya: function () {
        return this.name + ' ' + this.surName
    },
}


let passport = {
    serries: "AC",
    number: 213123123,
    date: "2019-06-06",
    exp: "2029-06-06",
    hasCHildren: true,
    hasPremiumSubscription: false,
}


let eshkere = Object.assign( {} , user, passport)


let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
    function: []
}


Object.values(eshkere).forEach(i => {
    if (typeof i === 'string') {
        types.string.push(i);
    } else if (typeof i === 'number') {
        types.number.push(i);
    } else if (typeof i === 'object') {
        types.object.push(i);
    } else if (typeof i === 'boolean') {
        types.boolean.push(i);
    } else if (typeof value === 'function') {
        types.function.push(i);
    }
});

console.log(types);













