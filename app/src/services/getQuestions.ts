

// export async function getQuestions(category:number){

//     const urls = [
//         `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=easy&type=multiple`,
//         `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=medium&type=multiple`,
//         `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=hard&type=multiple`
//     ]

//     const data = await Promise.all(urls.map(async url => {
//         const resp = await fetch(url);
//         return resp.json();
//       }));


//       return data
// }