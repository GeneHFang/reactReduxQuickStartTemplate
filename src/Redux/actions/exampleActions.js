//Follow this format for your actions:

/*
export const noPayloadExample = (optionalArgs) => {
    return {
        type: "NO_PAYLOAD_EXAMPLE"
    }
}

export const simplePayloadExample = (optionalArgs) => {
    return {
        type: "SIMPLE_PAYLOAD_EXAMPLE",
        payload: optionalArgs.value1
    }
}

export const nestedPayloadExample = (optionalArgs) => {
    return {
        type: "NESTED_PAYLOAD_EXAMPLE",
        payload: {
            payloadKey1: optionalArgs.value1,
            payloadKey2: "this is an arbitrary string",
            //etc
        }
    }
}
*/

//Example action with no argument and no payload
export const increment = () => {
    return {
        type: "INCREMENT"
    }
}