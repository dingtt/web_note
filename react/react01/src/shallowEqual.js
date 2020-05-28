export default function shallowEqual(objA,objB){
    if(objA === objB){
        return true
    }
    if(typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null){
        return false
    }
    var keyA = Object.keys(objA)
    var keyB = Object.keys(objB)
    if(keyA.length !== keyB.length){
        return false
    }
    for(var i = 0; i < keyA.length; i++){
        if(!objB.hasOwnproperty(keyA[i]) || objA[keyA[i]] !== objB[keyA[i]]){
            return false
        }
    }
    return true
} 