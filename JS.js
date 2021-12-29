// <<<<<<< HEAD
// var post = {

//     Post1: ["Comment1 ", "Comment1 ", "Comment1 "],
//     Post2: ["Comment1 ", "Comment1 ", "Comment1 "],
//     Post3: ["Comment1 ", "Comment1 ", "Comment1 "],
//     Post4: ["Comment1 ", "Comment1 ", "Comment1 "]

// }



// console.log(post)


function postsData() {


    //-------------------------------- Promise.all is used for calling Multiple API at Once---------------------------

    Promise.all([

        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/comments')

    ])

        .then(

            function (responses) {

                return Promise.all(responses.map(function (response) {


                    return response.json()


                }))


            })

        //--------------------------------------------------------------------------------------------------------------------


        .then(function (data) {

//----------------------------------Combining Multiple API's using map function---------------------------------------------

            var posts = data[0]
            var comments = data[1]

            // console.log("Posts" , posts)
            // console.log("Comments" , comments)

            var merged = comments.map(comment => {
                var postsItem = posts.find(i => i.id === comment.id && i.userId === comment.postId )

                return{comment , ...postsItem}
            })


            console.log(merged)

//-----------------------------------------------------------------------------------------------------------------------------


            // console.log("DATA", data)
            // var postsData = []



            // ------------------- Working Code But given post in list type array like [ 0 : {a : b , c : d} , 1 : {a : b , c : d}]-------------------------

            // var postsData = posts.map(post => ({

            //     Userid : post.userId,
            //     Id : post.id,
            //     Title : post.title
            // }))
            // console.log("POst Data" , postsData)

            //-----------------------------------------------------------------------------------------------------------------------------------------------    



            //     function Post(){

            // --------------------- This Code is also Working But Given Data in List type array like [ 0 : {a : b , c : d} , 1 : {a : b , c : d}]--------------------



            // var postData = []

            // function Post(){

                            
            //     for (let i = 0; i < posts.length; i++) {

            //         const element = posts[i];
            //         // postData.push({ Userid: posts[i].userId, Title: posts[i].title, Id: posts[i].id, Body: posts[i].body })
                    
            //         var postData = {Userid : posts[i].userId , Title : posts[i].title , Id : posts[i].id , Body : posts[i].body}
                    
            //         console.log(postData)   
                    
            //     }
                
                
            // }
            

            // Post()


            // function Comment(){

                
            //     for (let n = 0; n < comments.length; n++) {
            //         const element1 = comments[n];
                    
            //         var commentsData = {postId : element1.postId , Id : element1.id , Name : element1.name , email : element1.email}
                    
            //         console.log(commentsData)
                    
                    
                    
                    
            //     }
                
            // }


            // Comment()


            // --------------------------------------------------------------------------------------------------------------------------------------------------------                    



            // console.log(comments)

            // console.log("Comments Data", comments)


            // if (postData) {

            // }


            // }







            //     }

            //     Post()


            // })


        }

            // .catch(function (error) {


            //     console.log("ERROR", error)

            //     return error

            // })


            //----------------------------- This Code is For Fetch Only one API at a time -----------------------------------


            // fetch('https://jsonplaceholder.typicode.com/posts')
            // .then(response => response.json())
            // //  fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            // // .then(responses => responses.json())
            // // .then(json => console.log("Comment" , json))
            // .then(json => {

            //         for (let i = 0; i < json.length; i++) {
            //             const element = json[i];
            //             var jsonData = { Userid : element.userId , Id : element.id , Title : element.title}
            //             console.log(jsonData)
            //         }
            //     })

            //---------------------------------------------------------------------------------------------------------------


            //----------------------------- Catch is a Api Call back method which is run when fetch promise is rejected or any error in data--------------------------------

            // .catch(function (error) {


            //     console.log("ERROR", error)

            //     return error

            // })

            //------------------------------------------------------------------------------------------------------------------------------------------------------------------

        )
}


postsData()

