async function getPizza() {
    const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
   const recipes=data.recipes;
   const result=recipes.map(function(pizza){
        return`
        <div class=PIZZA>
        <h2>${recipes.title}</h2>
        <img src="${recipes.image_url}"/>
        </div>
        `
    }
)
    
    document.querySelector(".PIZZA").innerHTML=result;
}    
    
   
    getPizza();