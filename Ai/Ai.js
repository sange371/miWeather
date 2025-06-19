function theFirst(response) {
  alert(response.data.answer);
}

let prompt = "Who was the first female president world wide?";
let theContext = "Please provide a clear and short answer";
let apiKey = "abod483e2dfa17bb1244b3fbdft2032b";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${theContext}&key=${apiKey}`;


axios.get(apiUrl).then(theFirst);
