import {mult, splitIntoWords, sum} from "./01"

test('splitting into words should be correct', () => {
    const sent1 = 'Hello my friends!'
    const sent2 = 'Js - programming language'

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('Hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends!');


})