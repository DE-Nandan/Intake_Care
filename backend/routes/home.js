import express from "express"
import requireAuth from "../middleware/requireauth.js"
import homeController from "../controllers/homeController.js"
const router = express.Router()

const {getItems,createItem,deleteItem,chatSubscription} = homeController


router.use(requireAuth)

//login route
router.get('/myarea', getItems)
router.get('/chat', chatSubscription)


//signup route
router.post('/myarea', createItem)

router.delete('/myarea/:id', deleteItem)



export default router