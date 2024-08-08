async function handleFormSubmit(event) {
    try{
      event.preventDefault();
      // console.log("clicking");
      const UserDetails = {
          userName:event.target.userName.value,
          phoneNo:event.target.phone.value,
          email:event.target.email.value
      };
      // console.log("User Details");
      // console.log(UserDetails);
      
      let response = await axios.post("http://localhost:3000/",UserDetails)
      // console.log(response.data);
      displayUserOnScreen(response.data);
  
      // Clearing the input fields
      document.getElementById("phone").value = "";
      document.getElementById("userName").value = "";
      document.getElementById("email").value = "";
    }

    catch(error){
      console.log(error);
    }
}
    
window.addEventListener("DOMContentLoaded", async () => {
  
    try{
      let response = await axios.get(
        "http://localhost:3000/"
      );
      
      // console.log(response);
      response.data.forEach(users => {
        displayUserOnScreen(users);
      });
    }
    catch(error){ 
      console.log(error);
    }
});
    
function displayUserOnScreen(UserDetails) {
      // console.log(userDetails);
    const user = document.createElement("li");
    user.appendChild(
      document.createTextNode(
        `${UserDetails.userName} - ${UserDetails.phoneNo} - ${UserDetails.email}`
      )
    );
    
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    user.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    user.appendChild(editBtn);
  
    const userList = document.getElementById("UserDetails");
    userList.appendChild(user);
  
    deleteBtn.addEventListener("click", async function (event) {
  
      try{
        userList.removeChild(event.target.parentElement);
        // console.log("User Details");
        
        // console.log(UserDetails.id);
        
        await axios
          .delete(
            `http://localhost:3000/${UserDetails.id}`
          )
        }  
        catch(err){ 
          console.log("Error");
          console.log(err)
        };
    });
  
    editBtn.addEventListener("click", async function (event) {
      try{
        userList.removeChild(event.target.parentElement);
        document.getElementById("userName").value = UserDetails.userName;
        document.getElementById("phone").value = UserDetails.phoneNo;
        document.getElementById("email").value = UserDetails.email;
        
        await axios
          .delete(
            `http://localhost:3000/${UserDetails.id}`
          );
          
      }
      catch(err) { 
        console.log("Error");
        console.log(err)
      };
    });
  }
    
    // Do not touch code below
    // module.exports = handleFormSubmit;
    