

// export async function getQuestions(category:number){

//     const urls = [
//         `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=easy&type=multiple`,
//         `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=medium&type=multiple`,
//         `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=hard&type=multiple`
//     ]

//     const data = await Promise.all(urls.map(async url => {
//         const resp = await fetch(url);
//         console.log(resp)
//         return resp.json();
//       }));


//       return data
// }


export async function getFirstFiveQuestions(category){
    const data = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=easy&type=multiple`,)
    const resp = await data.json()

    return resp.results
}

export async function getSecondFiveQuestions(category){
    const data = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=medium&type=multiple`,)
    const resp = await data.json()

    return resp.results
}

export async function getLastFiveQuestions(category){
    const data = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=hard&type=multiple`,)
    const resp = await data.json()
    
    return resp.results
}

