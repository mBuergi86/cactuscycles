import styles from "./page.module.css";

export const Main: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-7">
        <h2 className=" text-4xl font-semibold leading-[4rem] underline underline-offset-4 decoration-turquoise-100">
          Reguläre Öffnungszeiten
        </h2>
        <ul className="list-disc ml-4 mt-4">
          <li>Montag: 09:30 - 16:30</li>
          <li className="mt-1">Dienstag: 09:30 - 16:30</li>
          <li className="mt-1">Mittwoch: 18:30 - 00:00 (nur Abhol- und Bringservice)</li>
          <li className="mt-1">Donnerstag: 09:30 - 16:30</li>
          <li className="mt-1">
            Freitag und außerhalb der Öffnungszeiten: Nach Vereinbarung und
            Bedarf
          </li>
          <li className="mt-1">Samstag und Sonntag: Generell Geschlossen</li>
        </ul>
      </div>
    </div>
  );
};
