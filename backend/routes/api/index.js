const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const reviewsRouter = require('./reviews.js')
const spotImagesRouter = require('./spot-images')
const bookingsRouter = require('./bookings.js')
const { requireAuth } = require('../../utils/auth.js');
const { restoreUser } = require("../../utils/auth.js");
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
const spotsRouter = require('./spots.js')
router.get('/test', requireAuth, (req, res)=>{
  res.json[{message: 'success'}]
})

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/spots', spotsRouter)
router.use('/reviews', reviewsRouter)
router.use('/spot-images', spotImagesRouter)
router.use('/bookings', bookingsRouter)
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});
// router.get(
  //   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
// // Connect restoreUser middleware to the API router
//   // If current user session is valid, set req.user to the user in the database
//   // If current user session is not valid, set req.user to null

module.exports = router;