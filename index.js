
const cardcontainer = document.querySelector(`.container`);
console.log(cardcontainer);

const cards =[
    {id:"card",  title:"Perfected Strategies for you" , desc:"lorem7Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, eaque.", image:"./resource/image/2.jpg" ,image2:"https://s3-alpha-sig.figma.com/img/4a98/df37/b3de947c39102b151251150791b5ba1e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMTBquuzCkSkJpVHGgvkeP6XyWeeiNFjQRVxtuF7RlMs5-LMVOtskTqKrNB~Dmr4s4b2dUFXnrVVT~TywGqRxU-W~HwlJWijuzdeQekAwlYll-Pg6uK4i39WlfwFmbGohl57uXwu6CHp6sl0avkrzd8rrFoZ75VQA-2~BzRYci3Mz6KL5~yzZMQn51~0aeqevmMUv4Rd9F8r57JqzppUOCHf3aTCO0vDt~kukjCDDlnFf6oXLL7AzomYAV059k80vdyt6bOYgIma2RJD9XXLhYEhRRq-jpi4wijZU-F~6xrVkWwGSW5akdeSj2GZ9lgxuOSs9JnQnVm1RrwXa9J9kw_" },

     {id:"card",  title:"Perfected Strategies for you" , desc:"lorem7Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, eaque.", image:"./resource/image/2.jpg" ,image2:"https://s3-alpha-sig.figma.com/img/4a98/df37/b3de947c39102b151251150791b5ba1e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMTBquuzCkSkJpVHGgvkeP6XyWeeiNFjQRVxtuF7RlMs5-LMVOtskTqKrNB~Dmr4s4b2dUFXnrVVT~TywGqRxU-W~HwlJWijuzdeQekAwlYll-Pg6uK4i39WlfwFmbGohl57uXwu6CHp6sl0avkrzd8rrFoZ75VQA-2~BzRYci3Mz6KL5~yzZMQn51~0aeqevmMUv4Rd9F8r57JqzppUOCHf3aTCO0vDt~kukjCDDlnFf6oXLL7AzomYAV059k80vdyt6bOYgIma2RJD9XXLhYEhRRq-jpi4wijZU-F~6xrVkWwGSW5akdeSj2GZ9lgxuOSs9JnQnVm1RrwXa9J9kw_" },

     {id:"card",  title:"Perfected Strategies for you" , desc:"lorem7Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, eaque.", image:"./resource/image/2.jpg" ,image2:"https://s3-alpha-sig.figma.com/img/4a98/df37/b3de947c39102b151251150791b5ba1e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMTBquuzCkSkJpVHGgvkeP6XyWeeiNFjQRVxtuF7RlMs5-LMVOtskTqKrNB~Dmr4s4b2dUFXnrVVT~TywGqRxU-W~HwlJWijuzdeQekAwlYll-Pg6uK4i39WlfwFmbGohl57uXwu6CHp6sl0avkrzd8rrFoZ75VQA-2~BzRYci3Mz6KL5~yzZMQn51~0aeqevmMUv4Rd9F8r57JqzppUOCHf3aTCO0vDt~kukjCDDlnFf6oXLL7AzomYAV059k80vdyt6bOYgIma2RJD9XXLhYEhRRq-jpi4wijZU-F~6xrVkWwGSW5akdeSj2GZ9lgxuOSs9JnQnVm1RrwXa9J9kw_" },

];

    

     cards.forEach ((data) => (
        cardcontainer.innerHTML += `
        <div class="card">
     <div class="card-image">
         <img src="${data.image}" alt="">
         <div class="card-image-logo">
                    <img src="${data.image2}" alt="">
                  </div>
     </div>
    
     <div class="card-desc">
         <h1>${data.title}</h1>
         <p>${data.desc}</p>
     </div>
    
 
    
        
     </div>
     `
     )   
 );
   
     