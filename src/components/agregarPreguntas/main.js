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
          pregunta: '1. Generalmente me siento ansioso en situaciones sociales nuevas donde no sé qué se puede esperar de mí.'
        },
        {
          pregunta: '2. Me resulta difícil escuchar críticas sobre mí.'
        },
        {
          pregunta: '3. Temo que me hagan parecer un tonto.'
        },
        {
          pregunta: '4. Tiendo a magnificar mis errores y minimizar mis éxitos.'
        },
        {
          pregunta: '5. Soy muy crítico conmigo y con los demás.'
        },
        {
          pregunta: '6. Hay períodos en los que me siento devastado y/o deprimido.'
        },
        {
          pregunta: '7. Estoy ansioso o temeroso la mayor parte del tiempo.'
        },
        {
          pregunta: '8. Cuando alguien me maltrata, pienso que debo haber hecho algo para merecerlo.'
        },
        {
          pregunta: '9. Tengo dificultad para saber en quien confiar y cuándo confiar.'
        },
        {
          pregunta: '10. A menudo siento que no sé decir o hacer lo correcto.'
        },
        {
          pregunta: '11. Me preocupa mucho mi apariencia.'
        },
        {
          pregunta: '12. Me avergüenzo con facilidad.'
        },
        {
          pregunta: '13. Creo que los demás se concentran mucho en lo digo o hago, y lo critican.'
        },
        {
          pregunta: '14. Temo cometer un error que los demás puedan ver.',
        },
        {
          pregunta: '15. He evitado realizar cambios en mi vida porque tuve miedo de cometer un error o fracasar.',
        },
        {
          pregunta: '16. A menudo estoy a la defensiva y contraataco cuando persivo que me critican.',
        },
        {
          pregunta: '17. No he logrado lo que soy capaz debido al miedo o a la evitación.',
        },
        {
          pregunta: '18. Tiendo a permitir que el miedo y la ansiedad controlen muchas de mi decisiones.',
        },
        {
          pregunta: '19. Suelo pensar en forma negativa la mayor parte del tiempo.',
        },
        {
          pregunta: '20. Me resulta difícil actuar en forma adecuada o sin turbación en lo que refiere al sexo.',
        },
        {
          pregunta: '21. Soy una de 2 cosas: una persona que revela demasiada información personal o una persona que rara vez revela información personal.',
        },
        {
          pregunta: '22. A menudo estoy tan ansioso que no sé qué decir.',
        },
        {
          pregunta: '23. Postergo a menudo.',
        },
        {
          pregunta: '24. Trato de evitar conflictos o confrontaciones.',
        },
        {
          pregunta: '25. Me han dicho que soy muy sensible.'
        },
        {
          pregunta: '26. De niño me sentía inferior o inadecuado.'
        },
        {
          pregunta: '27. Suelo creer que tengo estándares más elevados que los demás.'
        },
        {
          pregunta: '28. A menudo creo que no sé lo que se espera de mí.'
        },
        {
          pregunta: '29. A menudo me comparo con los demás.'
        },
        {
          pregunta: '30. Con frecuencia tengo pensamientos negativos sobre mí.'
        },
        {
          pregunta: '31. A menudo siento que lo demás me maltratan o sacan ventaja de mí.'
        },
        {
          pregunta: '32. De noche, con frecuencia examino mi día, y analizo lo que dije o hice o lo que los demás dijeron o me hicieron ese día.'
        },
        {
          pregunta: '33. A menudo tomo decisiones en base a lo que agradará a los demás antes que en base a lo que yo deseo o o incluso sin siquiera considerar lo que yo deseo.'
        },
        {
          pregunta: '34. A menudo creo que los demás no me respetan.'
        },
        {
          pregunta: '35. A menudo me abstengo de compartir mis opiniones, ideas y sentimientos en grupos.'
        },
        {
          pregunta: '36. A veces miento cuando siento que la verdad podría resultar en críticas o rechazo.'
        },
        {
          pregunta: '37. Temo decir o hacer algo que me hará parecer estúpido o incompetente.'
        },
        {
          pregunta: '38. No establezco objetivos para el futuro.'
        },
        {
          pregunta: '39. Me desaliento con facilidad.'
        },
        {
          pregunta: '40. No soy muy consciente de mis sentimientos.'
        },
        {
          pregunta: '41. Crecí en un hogar disfuncional.'
        },
        {
          pregunta: '42. Creo que la vida es mucho más dura para mí, que para los demás.'
        },
        {
          pregunta: '43. A menudo evito situaciones en las que creo que me sentiré incómodo.'
        },
        {
          pregunta: '44. Tengo tendencia a ser perfeccionista, necesitando parecer perfecto y hacer las cosas en forma perfecta.'
        },
        {
          pregunta: '45. Me siento incómodo si salgo solo a comer fuera o si voy al cine o realizo otras actividades solo.'
        },
        {
          pregunta: '46. A menudo me siento enojado o herido por el comportamiento o las palabras de los demás.'
        },
        {
          pregunta: '47. A veces me siento tan ansioso o molesto, que experimento la mayoría de lo siguiente: el corazón acelerado o que palpita, sudor; me siento lloroso, me sonrojo'
        },
        {
          pregunta: '48. Temo mucho las críticas, la desaprobación o el rechazo.'
        },
        {
          pregunta: '49. Confío en la opinión de otros para tomar decisiones.'
        }
      ],
      respuesta: 'No/Sí',
      proyecto: '59a9ca0789f70d09d7fbb8d1'
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
