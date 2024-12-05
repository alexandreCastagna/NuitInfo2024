
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


function j_ai_reson(num_reponse){
    docQuiFonctionne = document.getElementById('mes_infos');

    var tem = document.getElementById('mes_infos').maTematique;
    var num = docQuiFonctionne.monnumero;
    docQuiFonctionne.monnumero = num-1;
    var data = 1
    fetch('/question_api').then((data)=>{console.log(data.json());
     return data.json()}).then((datadeux)=>{data= datadeux})
    console.log(data);
    let question_actuellel;
    data.forEach(element => {
        if (element['numero'] == num && tem == element['thème'] ){
            question_actuellel = element;
        }
        
    });

    return (question_actuelle['numReponse'] == num_reponse)
}
