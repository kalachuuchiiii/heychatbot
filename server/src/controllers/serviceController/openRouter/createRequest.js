const { systemData } = require("./systemData.js");

exports.createRequest = async(req, res) => {
  const { messages } = req.body;
  
  let response  = await fetch('https://api.groq.com/openai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'llama3-8b-8192',
    messages: [{ role: "system", content: systemData }, ...messages]
  })
});

response = await response.json();


return res.status(200).json({
  success: true, 
  response
})
}