

export default class Data{
    

    api(path,method="GET", body=null,requairesAuth=false,credentials=null){


        const url="http://localhost:3003/api/v1"+path;

        const options={
            method,

            headers:{
                'Content-Type': 'application/json; charset=utf-8',
            },

            mode:"cors",
            
        }

        if(body!==null){

            options.body=JSON.stringify(body);
        }

        return fetch(url,options)
    }


    async getCocktails(){

        const response = await this.api("/cocktails",'GET');


        return response.json()
    }

   
} 