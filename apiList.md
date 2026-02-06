DevTinder API's

authRouter

- POSt /signup
- POST /login
- POST /logout

profileRouter

- GET /profile/view
- PATCH /profile/edit (username, age, gender, phonenumber can be updated, but email and password cann't be updated)
- PATCH /profile/password (something like forgot password)

connectionRequestRouter

- POST /request/send/intrested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:userId
- POST /request/review/rejected/:userId

userRouter

- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you the profile of other users on platform
