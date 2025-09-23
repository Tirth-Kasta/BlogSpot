1. User can login using email and password
2. user can Post any thing
3. User can read other post
4. User can Commnet and Like other post

# Role base login
# JWT 
# redux
# axios
# Bootstrap
# Multer


#Pages#
1. Login
2. Registrion
3. Dashboard
4. User Profile
5. User Blogs
6. Blogs Details


# model:User
name:string
email:string
password:string
img:string
isAdmin:boolen


# model:Blog
title:string
discription:string
img:string
addedBy:userId(ref)
comment:[array of multipal comment with userId]
likes:[array of userId who likes]


# blogs API
1. get_all_blogs (title,img,discraiption)
2. get_single_blog_by_title (title,img,discraiption,addedby,comments,likes)
3. post_blog
4. post_like
5. post_comment
6. edit_post
7. delet_post

# auth API
1. login
2. register


# temp 
getAllBlogs (get)
getBlogByTitle (get)
postBlog (post)
editBlog (put)
deleteBlog (delete)
