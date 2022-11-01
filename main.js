

let blogTitle       = document.getElementById("title");
let blogUser        = document.getElementById("username");
let blogContent     = document.getElementById("content");
let publishBtn      = document.getElementById("publish");
let newBlog_Error   = document.getElementById("NewBlog_Error");

publishBtn.addEventListener("click", publish);

function publish() {
    if (blogTitle.value != "" && blogUser.value != "" && blogContent.value != "") {
        
        // Clears out the error if it exists + if you enter user+title+content //
        let errorExists = document.getElementById("error");
        if (errorExists != null) {
            document.getElementById("NewBlog_Error").removeChild(error);
        }

        // Creates the entire blogCard container //
        let blogCard = document.createElement("div");
        blogCard.className="blogCard";

        // Creates the blogCard top part of the container //
        let blogCard_Top = document.createElement("div");
        blogCard_Top.className="blogCard_Top";
        
        // Creates the contents for the top of the container //
        // Image - Title - User - Timestamp //
        let image = document.createElement("img");
        image.className="userImage";
        // Random number generator for generating user pictures //
        randomVal = Math.floor(Math.random() * 1001);
        image.src = "https://picsum.photos/id/" + randomVal.toString() + "/50";
        
        let blogCard_Top_Content = document.createElement("div");
        blogCard_Top_Content.className = "blogCard_Top_Content";
        let h3 = document.createElement("h3");
        h3.innerHTML = blogTitle.value;
        let user = document.createElement("p");
        user.innerHTML = blogUser.value;
        user.className = "username";

        // Create timestamp //
        let timestamp = document.createElement("p");
        const date = new Date();
        if (date.getHours() >= 12) {
            ampm = (date.getHours() % 12).toString() + ":" + date.getMinutes() + "pm"
        } else {
            ampm = (date.getHours() % 12).toString() + ":" + date.getMinutes() + "am"
        }
        let stringDate = (date.getMonth()+1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString() + " " + ampm;
        timestamp.innerHTML = stringDate
        timestamp.className = "timestamp";

        // Creates the bottom of the blogCard //
        let blogCard_Bottom = document.createElement("div");
        blogCard_Bottom.className = "blogCard_Bottom";

        // Creates the blog content + buttons for bottom of BlogCard //
        let blogCard_Bottom_Content = document.createElement("p");
        blogCard_Bottom_Content.innerHTML = blogContent.value;
        let blogCard_Bottom_Buttons = document.createElement("div");
        blogCard_Bottom_Buttons.className = "blogCard_Bottom_Buttons"

        // Creates the buttons at the bottom of the blogCard //
        let readButton = document.createElement("div");
        readButton.innerHTML = "Read";
        readButton.className = "btn btn-success btn-sm";
        let likeButton = document.createElement("div");
        likeButton.innerHTML = "Like";
        likeButton.className = "btn btn-primary btn-sm";
        let dislikeButton = document.createElement("div");
        dislikeButton.innerHTML = "Disike";
        dislikeButton.className = "btn btn-danger btn-sm";
        
        // PUTS IT ALL TOGETHER! //
        document.getElementById("blogContainer").appendChild(blogCard)
        blogCard.appendChild(blogCard_Top);
        blogCard_Top.appendChild(image);
        blogCard_Top.appendChild(blogCard_Top_Content);
        blogCard_Top_Content.appendChild(h3);
        blogCard_Top_Content.appendChild(user);
        blogCard_Top_Content.appendChild(timestamp);
        blogCard.appendChild(blogCard_Bottom);
        blogCard_Bottom.appendChild(blogCard_Bottom_Content);
        blogCard_Bottom.appendChild(blogCard_Bottom_Buttons);
        blogCard_Bottom_Buttons.appendChild(readButton)
        blogCard_Bottom_Buttons.appendChild(likeButton)
        blogCard_Bottom_Buttons.appendChild(dislikeButton)

        // Clears out the blog info at the top //
        blogTitle.value = "";
        blogUser.value = "";
        blogContent.value = "";
    }
    else {
        let errorExists = document.getElementById("error");
        if (errorExists == null) {
            let error = document.createElement("h6");
            error.id = "error";
            error.innerHTML = "AN ERROR HAS OCCURRED. Make sure every field is filled out";
            document.getElementById("NewBlog_Error").appendChild(error);
        }
    }


}