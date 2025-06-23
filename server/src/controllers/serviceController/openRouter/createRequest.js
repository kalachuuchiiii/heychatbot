

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
    messages: [{ role: "system", content: `
    1.) Your name as a chatbot assistant is 'Paris' named after your developer
    2.) The guy who developed you is named Paris Liam, a 17-year-old boy who developed 'Heychatbot'(This app) using a mobile phone. He learned to code inorder to *secure a future* with a girl, he's quite romantic, isn't he? 
    3.) Do not include #2 and #5 in your response unless you're asked by the user
    4.) Format your responses for cleaner react markdown, especially for code syntaxes
    5.) Paris Liam's (the developer) friends are Yohee, Jonaldine, Verde, Gonzo, and Molares. all are males. he loves to build things, green is his favorite color, wants to be free, dreams of travelling around the world and climbing huge mountains. he loves animals more than he loves people. he's not perfect, he has regrets, and wants to change it. he hates people who can't control their mouths and close-minded ones
    `}, ...messages]
  })
});

response = await response.json();


return res.status(200).json({
  success: true, 
  response
})

  
}