const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api", (req, res) => {
  const choice = req.body?.untrustedData?.buttonIndex || 0;

  const responses = [
    {
      title: "You now see the future.",
      image: "https://placehold.co/600x400?text=Future+Sight"
    },
    {
      title: "You hear everyone’s thoughts.",
      image: "https://placehold.co/600x400?text=Mind+Reading"
    },
    {
      title: "Wall Street is obsolete.",
      image: "https://placehold.co/600x400?text=Trading+Bot+Deployed"
    },
    {
      title: "Money glitch active.",
      image: "https://placehold.co/600x400?text=Infinite+Wealth"
    }
  ];

  const { title, image } = responses[choice - 1] || responses[0];

  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="og:title" content="${title}" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${image}" />
        <meta property="fc:frame:button:1" content="Back" />
        <meta property="fc:frame:post_url" content="/" />
      </head>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server ready on port", port);
});