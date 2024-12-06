function l(params) {console.log(params);}


            
helium()
function j_ai_reson(num_reponse) {
    // Get the necessary DOM elements
    // docQuiFonctionne = document.getElementById('mes_infos');
    var tem =  document.getElementById('mes_infos').getAttribute('matemateique');
    var num =  document.getElementById('mes_infos').getAttribute('monnumero');
     l( document.getElementById('mes_infos'))
    console.log(tem)
    l(num+"a")
    // Fetch data from the API
    fetch('/question_api')
        .then((response) => response.json())  // Read the response once
        .then((data) => {
            switch_du_pingouin()
            console.log(data);  // Now you have the parsed data

            // Initialize variable to store the matched question
            let question_actuellel;

            // Loop through the data to find the matching question
            data.forEach(element => {
                console.log(element["numero"]);
                if (parseInt(element['numero']) == num && tem == element['thème']) 
                    {
                    document.getElementById('mes_infos').monnumero = num - 1;
                    console.log(element)
                    question_actuellel = element;
                    document.getElementById('mes_infos').setAttribute('monnumero',document.getElementById('mes_infos').getAttribute('monnumero')-1)
                    switch_du_pingouin()
                }
            });
            switch_du_grizly();
            // Return whether the question matches the num_reponse
            return question_actuellel['numReponse'] == num_reponse;
            
        })
        .then((result) => {
            console.log(result);switch_du_pingouin()  // This will log `true` or `false` based on the condition
        })
        .catch((error) => {
            console.error('Error fetching data:', error);  // Catch any errors
        });
    }
    function switch_du_pingouin()
        {
            var thematique = document.getElementById("mes_infos").getAttribute('matemateique');
            var numero =  document.getElementById('mes_infos').getAttribute('monnumero');

            fetch('/question_api')
            .then((response) => response.json())  // Read the response once
            .then((data) => {
                data.forEach(element => {
                    if (element['numero'] == numero && thematique == element['thème']) 
                        {
                            document.getElementById("question").innerHTML = element['textQuestion'];
                            document.getElementById("pingouin").innerHTML = element['rep1'];
                            document.getElementById("mancho").innerHTML = element['rep2'];
                            document.getElementById("ourse").innerHTML = element['rep3'];
                            document.getElementById("orc").innerHTML = element['rep4'];
                        }}
            )
        })}
        switch_du_pingouin()
        function helium(){

            let grizly
            let pre_pingouin = document.location.search;
            let canard = new URLSearchParams(pre_pingouin);
            let pingouin = canard.get('num_tortue')

            fetch('/doc_api')
            .then((response) => response.json())  // Read the response once
            .then((data) => {return grizly = data[pingouin]}).then((data)=>{console.log(data);document.getElementById('mes_infos').setAttribute('matemateique',data['thematique'])}).then(
                switch_du_pingouin())
        }
            
            
    function switch_du_grizly(){
        var tem =  document.getElementById('mes_infos').getAttribute('matemateique');
        var num =  document.getElementById('mes_infos').getAttribute('monnumero');
         l( document.getElementById('mes_infos'))
        console.log(tem)
        l(num+"a")
        // Fetch data from the API
        fetch('/question_api')
            .then((response) => response.json())  // Read the response once
            .then((data) => {
                switch_du_pingouin()
                console.log(data);  // Now you have the parsed data
    
                // Initialize variable to store the matched question
                let question_actuellel;
    
                // Loop through the data to find the matching question
                data.forEach(element => {
                    console.log(element["numero"]);
        if (parseInt(element['numero']) == num && tem == element['thème']) 
            {
            document.getElementById('mes_infos').monnumero = num - 1;
            console.log(element)
            question_actuellel = element;}})
        if (question_actuellel == null){
            let pre_pingouin = document.location.search;
            let canard = new URLSearchParams(pre_pingouin);
            let pingouin = canard.get('num_tortue')
            console.log(Number(pingouin));
            window.location.href = "informations?num_tortue="+(parseInt(pingouin)+1)
        }
        })
    }