import React from "react";
import "../styles/info.css";
import PS5 from '../assets/ps5.png';
import VIAJE from '../assets/viaje.png';
import LOTERIA from '../assets/loteria.png';
import SWITCH from '../assets/switch.png';
import JUEGOS from '../assets/juegosswitch.png';
import USERS from '../assets/participantes.png';

const Info = () => {
  return (
    <section>
      <article>
        <div className="text_container">
          <h3>Sistema de sorteo</h3>
          <p>
            Tienes dos formas de obtener un número para participar en sorteos,
            que son mediante suscripción y mediante participación.
          </p>
          <p>
            La participación se consigue entrando al sorteo y comprando un
            número que esté disponible, como el sistema de una lotería. Una vez
            llenado el cupo de participantes del sorteo y finalizado, ese número
            se borrará, para que si vuelves a participar puedas elegir otro
            número o el mismo si está disponible.
          </p>
          <p>
            La suscripción, por otra parte, hará que tengas un número el tiempo
            que quieras, es decir, pagas una suscripción de forma semanal, a un
            precio más barato que comprar una participación, y te aseguras ese
            número durante el tiempo que tengas la suscripción activa.
          </p>
        </div>
        <img src={LOTERIA} alt="loteria"></img>
      </article>
      <article>
        <img src={JUEGOS} alt="juegos"></img>
        <div className="text_container">
          <h3>Sorteo Semanal</h3>
          <p>
            Cada semana se lanzará un sorteo que estará dsponible hasta que se
            complete el cupo de participantes. Los premios disponibles en esta
            semana están valorados entre 30€ y 50€, y podrás conseguirlo a un
            precio máximo de 1,50€. Si eres el afortunado ganador recibirás el
            premio en un máximo de 7 días hábiles. Solo envíos en la península y
            en España.
          </p>
        </div>
      </article>
      <article>
        <div className="text_container">
          <h3>Sorteo Mensual</h3>
          <p>
            Este sorteo se lanzará cada mes, y al igual que el semanal estará
            disponible hasta que el cupo de participantes llegue al máximo o al
            90% del total. Los premios disponibles están valorados entre 300€ y
            800€, y podrás participar a un precio máximo de 3,50€, ¡toda una
            ganga! El sistema de envío es el mismo que el semanal
          </p>
        </div>
        <img src={PS5} alt="ps5"></img>
      </article>
      <article>
        <img src={VIAJE} alt="viaje"></img>
        <div className="text_container">
          <h3>Sorteo Especial</h3>
          <p>
            Este sorteo se lanzará en función de las opiniones de nuestros
            usuarios. Puedes dejarnos un mensaje diciéndonos qué te gustaría que
            se sorteara y el equipo lo valorará. Una vez valorado se lanzará el
            sorteo especial, valorado entre 850€ y 1.500€, y podrás conseguirlo
            a un precio máximo de 5€.
          </p>
        </div>
      </article>
      <article>
        <div className="text_container">
          <h3>Cupos de participantes</h3>
          <p>
            Dependiendo del tipo de sorteo habrá una cantidad mayor o menor de
            posibles participantes, es decir, el sorteo semanal tendrá menos
            participantes que el sorteo especial, por ejemplo. Una vez
            completados los cupos del sorteo se cerrará y no podrás participar
            en dicho sorteo, tendrás que esperar al siguiente.
          </p>
          <p>
            Si en uno de los sorteos has resultado ser el ganador no te
            penalizará de ninguna forma, es decir, podrás seguir participando en
            todos los sorteos que haya con cupos disponibles.
          </p>
          <p>
            Si se lanza un sorteo en su semana y no llega al máximo de
            participantes se irá aplazando hasta que ese cupo esté completo. Si
            no se llega a completar en el plazo de un mes se te reembolsará el
            dinero y ese sorteo quedará cancelado. Esto no hará que los
            siguientes sorteos no salgan, por ejemplo, la primera semana sale un
            sorteo que no se completa, pues el de la siguiente semana se lanzará
            de la misma forma que el primero. Esto es aplicable a todos los
            tipos de sorteos.
          </p>
        </div>
        <img src={USERS} alt="users"></img>
      </article>
      <article>
        <img className="switch" src={SWITCH} alt="switch"></img>
        <div className="text_container">
          <h3>Tipos de premios</h3>
          <p>
            En los anteriores apartados se menciona el valor de los sorteos,
            pero, ¿qué se sortea? Pues dependiendo de la semana y del mes, puede
            sortearse merchandising de tus animes favoritos, camisetas, lotes de
            premios, videoconsolas, ipads, tablets, móviles, juegos e incluso
            viajes. Puedes conseguir todo esto a un precio ridículamente
            inferior a lo que realmente cuesta, y si no eres el ganador del
            sorteo, la cantidad que has invertido es muy pequeña, máximo 5€ si
            es sorteo especial.
          </p>
          <p>
            En Fortuna Fest es posible ganar una Ps5 por 3,50€ máximo, merece la
            pena intentarlo.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Info;
