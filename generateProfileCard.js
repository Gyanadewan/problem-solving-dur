

function generateProfileCard(user) {
  const name = user.name ?? "Anonymous";
  const city = user.address?.city ?? "Unknown";
  const followers = user.social?.followers ?? 0;
  return `${name} | ${city} | followers: ${followers}`
}

 const user1 = {"address":{"city":"Dhaka"},"name":"Rafi","social":{"followers":0}}
 const user2 = {"name":"Alice","social":{"followers":120}}
const user3 = {"address":{"city":"London"},"name":"Charlie"}
console.log(generateProfileCard(user3))