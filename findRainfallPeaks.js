function findRainfallPeaks(rainfall) {
     let result = []
    for (let i = 1; i < rainfall.length -1 ; i++){
     if (rainfall[i]> rainfall[i-1] && rainfall[i] > rainfall [i+1]) {
         result.push(i+1)
     }
    }
    return result
}

const rainfall = [2,5,3,3,7,4,4,6]
console.log(findRainfallPeaks(rainfall))