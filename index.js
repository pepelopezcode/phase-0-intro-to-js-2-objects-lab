// Write your solution in this file!
const employee = {
    name: 'bob',
    streetAddress: '232 wdnkjad'
}
function updateEmployeeWithKeyAndValue(object, key, value){
    const newObject = {...object};
    newObject[key] = value;
    return newObject;
}
function  destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj
}
function deleteFromEmployeeByKey(obj, key){
    const newObject = {...obj};
    delete newObject[key];
    
    return newObject;
}

function  destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}