## Implementation

1. What libraries did you add to the frontend? What are they used for?

I have tried to keep my external library usage to a minimum but I think I could've completed this even sooner if I had used existing libraries for components rather than creating them myself. Overall this exercise took me around 3.8ish hours. Here I did use Tailwind though since I saw tailwind was mentioned in the JD so I thought it would be a good idea to use it here. Tailwind is a light weight styling framework one can use to have predefined classes that can save a person from the pain of writing all that css separately. Sort of like bootstrap but more efficient.

2. What would you change about your implementation if you had to handle thousands of items?

I would introduce pagination. Meaning I would only request for a certain number of items(let's say 10) and not ask for the whole item list so that would reduce the load on the server making user experience great as well.

## General

1. If you had more time, what further improvements or new features would you add?

- If I had more time I would probably refine the user experience more. I have left comments with tag "Improvement:" that I would probably want to implement in the future. Some more things that I can say I would want to implement are
    -  Pagination
    -  Lazy loading
    -  Introduce more animations like for opening and closing of dialog
    -  Wouldn't mind adding authentication if I had access to backend ig.
    -  Would introduce filters so I could filter cards as per availability and category

2. Which parts are you most proud of? And why?
-   I liked how I did everything in typescript for stronger type checking which might not be something that other people would go for.

3. Which parts did you spend the most time with? What did you find most difficult?
- I spent some time creating the dialog component. It took me a little time to get that done. Otherwise rest was simple.

4. How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
- I liked the test overall but I found the implementation upto the candidate more or less. In one sense a candidate might not have a clear sense of direction on what approach they need to go for while on ther other hand a candidate can be really creative here and it can be a good way to test a person's autonomy.



**Note: I would nevertheless try to add some more things in my submission but will be looking forward to your response**