import React from 'react';
import { Input,Button } from 'element-react';
import { falabella } from '../../services/index'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:'', strquery: ''}
        
    }
    sendInformation(event){
            if(localStorage.token == null){
                //api from Falabella
                this.state.strquery = this.hasWhiteSpace(this.state.value)
                //http://www.falabella.com/falabella-cl/search/?Ntt=jeans&format=json
                falabella({query : this.state.strquery}).then((res) => {
                    //console.log('RESULT', res.data.contents["0"].mainSection[1].contents["0"].JSON.searchItemList.resultList);


                    
                }).catch((res) => {
                    console.log('ERROR RESULT', res);
                })

            }
            
          
    }

    hasWhiteSpace(s) {
        var string = s
        var stringFinal = ''
        string = string.split(" ");
        var str1 = ''
        var stringArray = new Array();
        for(var i =0; i < string.length; i++){
            if(i != 0){
                var element = "+";
                var str1 = element.concat(string[i]);
            }
            else{
                var str1 = str1.concat(string[i]);   
            }
            var stringFinal = stringFinal.concat(str1);
             }
        return stringFinal
    }


    onChange(key, value) {
        this.state[key] = value;
        this.forceUpdate();
    }   

    render() {
        return (
            <div align="center">

                <Input placeholder="¿Qué buscas?"
                value={this.state.value}
                onChange={this.onChange.bind(this, 'value')}

                
                append={<Button type="primary" icon="search" onClick={this.sendInformation.bind(this)}></Button>} />       
              </div>
        );
    }
}