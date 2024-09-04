import { Router } from 'express'
import { instance } from '../instance.js'

const router = Router()

/* GET home page. */
// router.get('/', function (req, res) {
//   res.send('Hello World!')
// })

router.post('/issue',async function(req,res){
  try {
    const tx = await instance.issue(req.body.id,req.body.name,req.body.course,req.body.grade,req.body.date);
    res.json(tx);
  } catch (error) {
    console.log("error",error)
    res.send(200,"succes");
  }
})
router.get('/get',async function(req,res){
  try {
    const result = await instance.Certificates(req.query.id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
})

export default router
