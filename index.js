let hq = 42

function distanceFromHqInBlocks(dist){
    return Math.abs(dist - hq)
}

function distanceFromHqInFeet(dist){
    return distanceFromHqInBlocks(dist) * 264
}

function distanceTravelledInFeet(dist1, dist2){
    return distanceFromHqInFeet(dist2) - distanceFromHqInFeet(dist1)
}

function calculatesFarePrice(dist1, dist2){
    let dist = distanceTravelledInFeet(dist1, dist2)
    if (dist < 400){
        return 0
    }else if (dist < 2000){
        return (dist - 400) / 50
    }else if (dist < 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}