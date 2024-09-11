This project is made in MERN stack i.e MongoDB for backend,React as frontend framework, and express and node.js for backend.
There are three section for the blog-
    1. Home('/'):- On this page, we can basically see the latest three blogs of our backend. Whenever we add any blog on website, the latest three will be visible.
    We are using a get request on ('/getRecentData') to handlethis
    2. Blogs('/blogs'):- On this page we have all the blogs that are added till now in the form of card. And there is a limit to read this blog on front card of 400 words. 
    To see the full blog click the heading of the blog.
        ->Content of blog page:-
            1.The blog page have the title of blog, description, edit button and delete button.
            2. Edit button:- It will take you to the edit page where you can edit your page and commit changes.
            3. If we want to delete delete our blog, we can delete it.
    3. WriteBlog('/writeBlog'):- This is a form in which we can add our title and description of blogs.
