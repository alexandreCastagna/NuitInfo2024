
// let data = await fetch( 'question.json')
// console.log(data);


// let question_actuelle = data[0]


// function switch_to_question(){
//     document.getElementById("informations").hidden = true
//     document.getElementById("questionnaire").hidden = false
//     console.log("moi");
    
// }

// function switch_to_informations(){
//     document.getElementById("informations").hidden = false
//     document.getElementById("questionnaire").hidden = true
//     console.log("aide")
// }


// function j_ai_reson(num_reponse){
//     docQuiFonctionne = document.getElementById('mes_infos');

//     var tem = document.getElementById('mes_infos').maTematique;
//     var num = docQuiFonctionne.monnumero;
//     docQuiFonctionne.monnumero = num-1;
//     var data = 1
//     fetch('/question_api').then((data)=>{console.log(data.json());
//     return data.json()}).then((data)=>{
//     console.log(data);
//     let question_actuellel;
//     data.forEach(element => {
//         if (element['numero'] == num && tem == element['thème'] ){
//             question_actuellel = element;
//         }
//     } 
//     );

//     return (question_actuelle['numReponse'] == num_reponse)
// })
// }
function l(params) {console.log(params);}

function j_ai_reson(num_reponse) {
    // Get the necessary DOM elements
    // docQuiFonctionne = document.getElementById('mes_infos');
    var tem =  document.getElementById('mes_infos').getAttribute('matemateique');
    var num =  document.getElementById('mes_infos').getAttribute('monnumero');
    document.getElementById('mes_infos').monnumero = num - 1;
     l( document.getElementById('mes_infos'))
    console.log(tem)
    l(num)
    // Fetch data from the API
    fetch('/question_api')
        .then((response) => response.json())  // Read the response once
        .then((data) => {
            console.log(data);  // Now you have the parsed data

            // Initialize variable to store the matched question
            let question_actuellel;

            // Loop through the data to find the matching question
            data.forEach(element => {
                console.log(element["numero"]);
                if (element['numero'] == num && tem == element['thème']) {
                    console.log("AAAAA")
                    question_actuellel = element;
                }
            });

            // Return whether the question matches the num_reponse
            return question_actuellel['numReponse'] == num_reponse;
        })
        .then((result) => {
            console.log(result);  // This will log `true` or `false` based on the condition
        })
        .catch((error) => {
            console.error('Error fetching data:', error);  // Catch any errors
        });
}
