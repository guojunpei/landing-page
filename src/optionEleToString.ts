export const optionEleToString = (
    optionType:string,
    optionId:string,
    optionValue:string,
    optionName:string,
    optionContent:string
): string => {
    return `
        <input type="${optionType}" id="${optionId}" value="${optionValue}" name="${optionName}"/>
        <label for="${optionId}">${optionContent}</label>
    `
}

