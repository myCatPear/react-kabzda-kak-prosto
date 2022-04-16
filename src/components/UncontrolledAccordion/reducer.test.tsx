import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be false', () => {
    //data тест состоит из 3 частей . data - данные
    const state: StateType = {
        collapsed: true
    }
    //action - действия
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expectation - ожидание
    expect(newState.collapsed).toBe(false)
})

test('collapsed should be true', () => {
    //data тест состоит из 3 частей . data - данные
    const state: StateType = {
        collapsed: false
    }
    //action - действия
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expectation - ожидание
    expect(newState.collapsed).toBe(true)
})

test("reducer should throw error because type isn't correct", () => {
    //data тест состоит из 3 частей . data - данные
    const state: StateType = {
        collapsed: true
    }
    //action - действия
    expect(() => {
        reducer(state, {type: 'FAKE__TYPE'})
    }).toThrowError()
})