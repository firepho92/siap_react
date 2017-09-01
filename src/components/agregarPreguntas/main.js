import React, { Component } from 'react'
import axios from 'axios'
import {serverAddress} from '../../serverConnectionData'


class ExportPreguntas extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      preguntas: [
        {
          pregunta: '1. Me ayuda escribir a mano las palabras cuando tengo que aprenderlas de memoria.'
        },
        {
          pregunta: '2. Recuerdo mejor las cosas cuando las cuenta el profesor/a que leyéndolas en el libro de texto.'
        },
        {
          pregunta: '3. Se me dan bien las pruebas en las que tengo que demostrar lo aprendido leyendo el libro de texto.'
        },
        {
          pregunta: '4. Me gusta comer y mascar chicle mientras estudio y hago ejercicios.'
        },
        {
          pregunta: '5. Si presto atención a una exposición oral, puedo recordar las ideas principales sin anotarlas.'
        },
        {
          pregunta: '6. Prefiero las instrucciones escritas antes que las orales.'
        },
        {
          pregunta: '7. Resuelvo muy bien rompecabezas y laberintos.'
        },
        {
          pregunta: '8. Se me dan bien las pruebas en las que he de demostrar lo que aprendí oyendo una conferencia.'
        },
        {
          pregunta: '9. Me ayuda ver diapositivas y videos para comprender un tema.'
        },
        {
          pregunta: '10. Recuerdo más cuando leo un libro que cuando escucho una exposición oral.'
        },
        {
          pregunta: '11. Por lo general, tengo que escribir los números del teléfono para recordarlos bien.'
        },
        {
          pregunta: '12. Prefiero recibir las noticias escuchando la radio en vez de leerlas en un periódico.'
        },
        {
          pregunta: '13. Me gusta tener algo como un bolígrafo o un lápiz en la mano cuando estudio.'
        },
        {
          pregunta: '14. Necesito copiar los ejemplos de la pizarra del maestro para examinarlos más tarde.',
        },
        {
          pregunta: '15. Prefiero las instrucciones orales del maestro a aquellas escritas en un examen o en la pizarra.',
        },
        {
          pregunta: '16. Prefiero que un libro de texto tenga diagramas gráficos y cuadros porque me ayudan mejor a entender el material.',
        },
        {
          pregunta: '17. Me gusta escuchar música al estudiar una obra, novela, etc.',
        },
        {
          pregunta: '18. Las clases que más te gustan son aquellas en las que se organizan debates y se puede dialogar.',
        },
        {
          pregunta: '19. Puedo corregir mi tarea examinándola y encontrando la mayoría de los errores.',
        },
        {
          pregunta: '20. Prefieres las actividades en las que los alumnos tengan que hacer cosas y puedan moverse.',
        },
        {
          pregunta: '21. Puedo recordar los números de teléfono cuando los oigo.',
        },
        {
          pregunta: '22. Me encanta hacer cosas con las manos y herramientas.',
        },
        {
          pregunta: '23. Cuando escribo algo, necesito leerlo en voz alta para oír como suena .',
        },
        {
          pregunta: '24. Recuerdo mejor las cosas cuando puedo moverme o caminar mientras estoy aprendiéndolas.',
        }
      ],
      respuesta: 'Me desagrada mucho/Me desagrada en parte/Me es indiferente/Me gusta en parte/Me gusta mucho',
      proyecto: '59a8ddcd776ad37c4c4ed89c'
    };
  }

  handleClick(){
    axios.post(`${serverAddress}/preguntas`, {
      pregunta: this.state.preguntas[this.state.index].pregunta,
      respuesta: this.state.respuesta,
      proyecto: this.state.proyecto
    })
    .then(response=>{
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
    this.setState({
      index: this.state.index + 1
    })
  }

    render() {
      return (
        <preguntas>
          <input type="submit" className="btn btn-secondary-default submit-button pull-right" value="Siguiente" onClick={(e)=>this.handleClick()} />
        </preguntas>
      );
  }
}

export default ExportPreguntas;
