This is a Project which is using MERN(mongo,express,react and node).

#source-
https://www.youtube.com/watch?v=xKs2IZZya7c
channel name- Coding With Dawid

-----------IMPORTANT CONCEPT FOR BEGINNER LEVEL--------------------

Here, we are using "token" after user's login and set the user details like "username" and "id" inside "token".
then we send the "token" in Response with "cookie".
---token created by using JWT (Json web Token)
---JWT needs a "secret" string to create token so you can make a random string and save it in your env
----EXAMPLE---
--------------blog-app-backen/controller/user.js------(loginUser API)

---we also need "secret" string when we are "fetching users info with api"
---we send the cookie to backend and in api there will be a logic to get the use info...
---EXAMPLE----
--------------blog-app-backen/controller/user.js------(profile API)


#process to create cookie-----
1.-first we check user exist by using "FindOne" query
2.-if user exist then compare password,
3.-If everything ok then create token.
4.-you can send any data with token......
5.-at the last send the token with help of cookie in Response