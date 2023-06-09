import { useStore } from "../../context/storeContext.js";
export default function GesinnungUndSprachen() {
  const { sprachen, gesinnung } = useStore();

  const sortedArr = sprachen.sort((a, b) => {
    const keyA = Object.keys(a)[1];
    const keyB = Object.keys(b)[1];
    console.log("a:", keyA);
    console.log("b:", keyB);

    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className="cards">
        {sprachen.length > 0 && (
          <>
            <div className="cardInfo">
              <h2>Gesinnung</h2>
              <p>
                Eine typische Kreatur in den Welten von DUNGEONS & DRAGONS
                besitzt eine Gesinnung, die grob ihre moralische und persönliche
                Einstellung beschreibt. Die Gesinnung ist eine Kombination aus
                zwei Faktoren, wovon einer die moralische Haltung (gut, böse,
                neutral) und einer die Einstellung zur Gesellschaft und dem
                Gesetz angibt (rechtschaffen, chaotisch und neutral). Daraus
                ergeben sich neun mögliche Kombinationen für die Gesinnung.
              </p>
              <p>
                Die folgenden kurzen Zusammenfassungen umschreiben das typische
                Verhalten einer Kreatur mit der jeweiligen Gesinnung, doch nur
                wenige handeln genau und jederzeit nach deren Vorschriften.
              </p>
              {gesinnung.map((info, i) => {
                return (
                  < div key={i}>
                    <p >
                      <b>{info.name}</b>
                    </p>
                    <p>
                      {info.Beschreibung.map((info) => {
                        return `${info} `;
                      })}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="sprache">
              <h2>Sprachen</h2>
              <p>
                Die Volkszugehörigkeit legt fest, welche Sprachen dein Charakter
                zu Beginn beherscht und der Hintergrund könnte ihm Zugang zu
                weiteren verschaffen. Notiere dir diese Sprachen auf dem
                Charakterbogen. Darfst du dir eine zusätzliche Sprache
                aussuchen, nutze die Standardsprachentabelle oder wähle eine,
                die häufig in deiner Kampagne vorkommt. Mi der Erlaubnis deines
                SL kannst du auch aus dr Tabelle für exotische Sprachen wählen
                oder dich für eine Geheimsprache entscheiden, wie Druidisch oder
                die Diebessprache. Einige dieser Sprachen sind in Wahrheit ganze
                Sprachfamilien mit vielen Dialekten. Urtümlich umfasst
                beispielsweise Aural-, Aqual-, Ignal- und Terral-Varianten, eine
                für jede Ebene der Elemente. Kreaturen, die verschiedene
                Dialekte der gleichen Sprache sprechen, können sich miteinander
                unterhalten.
              </p>
              <p>
                <b>Standardsprachen</b>
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Sprache</th>
                    <th>Typische Völker</th>
                    <th>Schrift</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedArr[1].Standardsprachen.map((info, i) => {
                    return (
                      <tr key={i}>
                        <td>{info.Sprache}</td>
                        <td>{info["Typische Voelker"]}</td>
                        <td>{info.Schrift}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p>
                <b>Exotische Sprachen</b>
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Sprache</th>
                    <th>Typische Völker</th>
                    <th>Schrift</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedArr[0]["Exotische Sprachen"].map((info, i) => {
                    return (
                      <tr key={i}>
                        <td>{info.Sprache}</td>
                        <td>{info["Typische Voelker"]}</td>
                        <td>{info.Schrift}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
}
