const request = require("request");

const HackerEarth = require("hackerearth-v4-node");
const HE = new HackerEarth({
  clientSecret: "565f4b0af8bbaef073077d02e4a505541c872d6c",
});
const source = "console.log('Hello HackerEarth')";
HE.execute({
  source: source,
  lang: "JAVASCRIPT_NODE",
  input: "",
  memory_limit: 10000,
  time_limit: 2,
  callbackURL: "YOUR_CALLBACK_URL",
})
  .then((response) => {
    // console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

HE.get_output(
  {
    url: "HE_OUTPUT_URL",
  },
  (err, response) => {
    if (err) {
      // Handle error
      console.log(err)
    } else {
      console.log(response.data)
    }
  }
);
