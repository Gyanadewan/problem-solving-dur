function commonSkills(skills1, skills2) {
    const result = []
 for ( const skill1 of skills1 ){
      const lowerCaseSkill1 = skill1.toLowerCase()
 for ( const skill2 of skills2 ){
      const lowerCaseSkill2 = skill2.toLowerCase()

 if (lowerCaseSkill1 === lowerCaseSkill2 ) {
     if (!result.includes(lowerCaseSkill1)){
         result.push(lowerCaseSkill1)
     }
  }
 }
 
 }
 
  return result.sort()
}

console.log(commonSkills(skills1 = ["JS","React","Node"], skills2 = ["react","css","js"]))