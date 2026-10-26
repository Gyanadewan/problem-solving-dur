function toQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

console.log(toQueryString({ search: "hello world", page: 1 }));
// "search=hello%20world&page=1"

console.log(toQueryString({ sort: "asc", limit: 10 }));
// "sort=asc&limit=10"

console.log(toQueryString({}));
// ""

console.log(toQueryString({ "user name": "Gyana Dewan" }));
// "user%20name=Gyana%20Dewan"