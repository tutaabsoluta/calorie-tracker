import { Activity } from "../types"

// Actions
export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } } |
    { type: 'delete-activeId', payload: { id: Activity['id'] } }

// Initial state Type
export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

// Initial state
export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

// Reducer
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

    // Save activity
    if (action.type === 'save-activity') {
        //  Logica para actualizar el State

        let updatedActivities: Activity[] = []

        if (state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }

    }

    // Edit activity
    if (action.type === 'set-activeId') {

        return {
            ...state,
            activeId: action.payload.id
        }
    }

    // Delete activity
    if (action.type === 'delete-activeId') {

        return {
            ...state,
            activities: state.activities.filter(activity => activity.id!== action.payload.id)
        }
    }

    return state;
}

//

// Actions: describen lo que esta pasando en la applicacion y que informacion va a modificar que parte del State

// Un Action consta de dos partes: 1: el type que es la descripcion y el Payload que es la informacion que modifica o que se agrega al State

// Reducer: conecta el State inicial y los Actions

// Payload: es la informacion que modifica el state. Son los datos

// Dispatch: es la funcion que manda a llamar la accion con el payload

// newActivity es la informacion de la actividad al presionar submit y lo tipamos para que no pierda la referencia