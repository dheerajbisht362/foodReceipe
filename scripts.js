 async function getData(url){
        let res = await fetch(url)
        let data = await res.json()
        return data
    }

    function displayData(data,parent){
        let meals = data.meals;
        meals.forEach(({strMeal,strMealThumb,strInstructions,strYoutube}) => {
            let title = document.createElement('h1')
        title.innerText = strMeal;

        let img = document.createElement('img')
        img.src = strMealThumb;

        let ins = document.createElement('h2')
        ins.innerText = "INSTRUCTIONS"
        let des = document.createElement('p')
        des.innerText = strInstructions;
        let insDiv = document.createElement('div')
        insDiv.append(ins,des)
        insDiv.setAttribute('class', "setRight")
        

        let youtube = document.createElement('p')
        youtube.innerText = "YOUTUBE "
        let link = document.createElement('a')
        link.href = strYoutube;
        link.innerText = "LINK"
        youtube.append(link)
        youtube.setAttribute("class", "font")


        parent.append(title,img,insDiv,youtube)
        })

        
}
    
export {getData,displayData}
    