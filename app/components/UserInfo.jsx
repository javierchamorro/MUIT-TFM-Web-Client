import React from 'react';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age:0,
            studies:'',
            location:''};
          }

    onChangeNameText(valor){
        this.setState({name: valor.target.value});
        this.props.quiz.UserName = valor.target.value;
    } 
    onChangeStudiesText(valor){
        this.setState({studies: valor.target.value});
        this.props.quiz.Studies = valor.target.value;
    }  
    onChangeAgeText(valor){
        this.setState({age: valor.target.value});
        this.props.quiz.Age = valor.target.value;
    }  
    onChangeLocationText(valor){
        this.setState({location: valor.target.value});
        this.props.quiz.Location = valor.target.value;
    }  

    render() {

        return (
            <div className="user">
                <div>
                    <ul class="list-group list-group-horizontal mt-4">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h4 class="text-center">{this.props.I18n.getTrans("i.nameAndSurname")}</h4>
                        </div>
                        <div className="col-md-4"></div>
                    </ul>
                    <ul class="list-group list-group-horizontal mt-1">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChangeNameText.bind(this)} required/>
                        </div>
                        <div className="col-md-4"></div>
                    </ul>
                </div>
                <div>
                    <ul class="list-group list-group-horizontal mt-4">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h4 class="text-center">{this.props.I18n.getTrans("i.age")}</h4>
                        </div>
                        <div className="col-md-4"></div>
                    </ul>
                    <ul class="list-group list-group-horizontal mt-1">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <input type="number" className="form-control" name="age" value={this.state.age} onChange={this.onChangeAgeText.bind(this)} required/>
                        </div>
                        <div className="col-md-4"></div>
                    </ul>
                </div>
                <div>
                    {/* <div className="studiesText">{this.props.I18n.getTrans("i.studies")}</div>
                    <input type="text" name="studies" value={this.state.studies} onChange={this.onChangeStudiesText.bind(this)}/> */}
                    <ul class="list-group list-group-horizontal mt-4">
                        <div className="col-md-4"></div>
                        <div className="input-group col-md-4">
                            <select name="studies" className="custom-select" id="inputGroupSelect01" value={this.state.studies} onChange={this.onChangeStudiesText.bind(this)} required>
                                <option value= "">Selecciona Estudios</option>
                                <option value="ESO">ESO</option>
                                <option value="Bachillerato">Bachillerato</option>
                                <option value="Grado en Artes y Humanidades">Grado en Artes y Humanidades</option>
                                <option value="Grado en Ciencias de la Salud">Grado en Ciencias de la Salud</option>
                                <option value="Grado en Ciencias Sociales">Grado en Ciencias Sociales</option>
                                <option value="Grado en Ingenieria o Arquitectura">Grado en Ingeniería o Arquitectura</option>
                            </select>
                        </div>
                        <div className="col-md-4"></div>
                    </ul>
                </div>
                <div>
                    {/* <div className="locationText">{this.props.I18n.getTrans("i.location")}</div>
                    <input type="text" name="location" value={this.state.location} onChange={this.onChangeLocationText.bind(this)}/> */}
                    <ul class="list-group list-group-horizontal mt-4">
                        <div className="col-md-4"></div>
                        <div className="input-group col-md-4">
                            <select name="location" class="custom-select" id="inputGroupSelect01" value={this.state.location} onChange={this.onChangeLocationText.bind(this)} required>
                                <option value="">Selecciona Provincia</option>
                                <option value="Alava">Álava</option>
                                <option value="Albacete">Albacete</option>
                                <option value="Alicante">Alicante</option>
                                <option value="Almeria">Almería</option>
                                <option value="Asturias">Asturias</option>
                                <option value="Avila">Ávila</option>
                                <option value="Badajoz">Badajoz</option>
                                <option value="Barcelona">Barcelona</option>
                                <option value="Burgos">Burgos</option>
                                <option value="Caceres">Cáceres</option>
                                <option value="Cadiz">Cádiz</option>
                                <option value="Cantabria">Cantabria</option>
                                <option value="Castellon">Castellón</option>
                                <option value="Ciudad Real">Ciudad Real</option>
                                <option value="Cordoba">Córdoba</option>
                                <option value="Cuenca">Cuenca</option>
                                <option value="Gerona">Gerona</option>
                                <option value="Granada">Granada</option>
                                <option value="Guadalajara">Guadalajara</option>
                                <option value="Guipuzcoa">Guipúzcoa</option>
                                <option value="Huelva">Huelva</option>
                                <option value="Huesca">Huesca</option>
                                <option value="Islas Baleares">Islas Baleares</option>
                                <option value="Jaen">Jaén</option>
                                <option value="La Coruna">La Coruña</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Las Palmas">Las Palmas</option>
                                <option value="Leon">León</option>
                                <option value="Lerida">Lérida</option>
                                <option value="Lugo">Lugo</option>
                                <option value="Madrid">Madrid</option>
                                <option value="Malaga">Málaga</option>
                                <option value="Murcia">Murcia</option>
                                <option value="Navarra">Navarra</option>
                                <option value="Orense">Orense</option>
                                <option value="Palencia">Palencia</option>
                                <option value="Pontevedra">Pontevedra</option>
                                <option value="Salamanca">Salamanca</option>
                                <option value="Segovia">Segovia</option>
                                <option value="Sevilla">Sevilla</option>
                                <option value="Soria">Soria</option>
                                <option value="Tarragona">Tarragona</option>
                                <option value="Tenerife">Tenerife</option>
                                <option value="Teruel">Teruel</option>
                                <option value="Toledo">Toledo</option>
                                <option value="Valencia">Valencia</option>
                                <option value="Valladolid">Valladolid</option>
                                <option value="Vizcaya">Vizcaya</option>
                                <option value="Zamora">Zamora</option>
                                <option value="Zaragoza">Zaragoza</option>
                            </select>
                        </div>
                        <div className="col-md-4"></div>
                    </ul>
                </div>
                <div className="info">
                    <button className="answerUserInfo" onClick={this.props.onCompleteInformation.bind(this)}>{this.props.I18n.getTrans("i.answerUserInfo")}</button>
                </div>
            </div>
        );

    }
}