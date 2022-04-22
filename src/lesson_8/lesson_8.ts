// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, item) => acc + item)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (
        a + b < c ||
        a + c < b ||
        b + c < a
    ) return '00' // если такого треугольника не существует.
    if (a === b && b === c) return '10' //треугольник равносторонний,
    if (a === b || a === c || b === c) return '01' // если треугольник равнобедренный,
    return '11'

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return number.toString().split('').reduce((acc, item) => acc + +item, 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let even = 0
    let odd = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 === 0) even += arr[i]
        else odd += arr[i]
    }
    return even > odd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const newArr: Array<number> = []
    array.forEach(i => {
        if (i > 0 && Number.isInteger(i)) newArr.push(i * i)
    })
    return newArr

}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if (N === 0) return 0
    return N + sumFirstNumbers(N - 1)
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const bill = []
    for (let i = 0; amountOfMoney > 0; i++) {
        debugger
        if (amountOfMoney - banknotes[i] >= 0) {
            amountOfMoney -= banknotes[i]
            bill.push(banknotes[i])
            i = -1
        } else {
            banknotes.shift()
            i = -1
        }
    }

    return bill

}