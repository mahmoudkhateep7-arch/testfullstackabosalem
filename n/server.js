import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get('/gettext', (req, res) => {
  return res.json('hi')
})

// Export for Vercel
export default app;

// Only listen locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => { console.log('working') })
}
