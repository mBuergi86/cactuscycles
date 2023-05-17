export default function Page() {
  return (
    <>
      <div className="grid justify-center">
        <div className="mt-7">
          <h2 className="text-4xl font-semibold leading-[4rem] underline underline-offset-4 decoration-turquoise-100">
            Impressum
          </h2>
          <h2 className=" text-xl font-semibold leading-[4rem] underline underline-offset-4 decoration-turquoise-100">
            Postanschrift
          </h2>
          <p>Cactus Cycles</p>
          <p>Beintweg 30</p>
          <p>69181 Leimen</p>
        </div>
        <div className="mt-7">
          <h2 className=" text-xl font-semibold leading-[4rem] underline underline-offset-4 decoration-turquoise-100">
            Inhaber
          </h2>
          <p>Jonas Albig</p>
        </div>
        <div className="mt-7">
          <h2 className=" text-xl font-semibold leading-[4rem] underline underline-offset-4 decoration-turquoise-100">
            Kontakt
          </h2>
          <p>
            <strong>eMail: </strong>
            <a href="mailto:info@cactuscycles.de">
              info (ät) cactuscycles (punkt) de
            </a>
          </p>
        </div>
        <div className="mt-7">
          <h2 className=" text-xl font-semibold leading-[4rem] underline underline-offset-4 decoration-turquoise-100">
            Bankkonto
          </h2>
          <p>
            <strong>IBAN: </strong>DE04 6725 0020 1019 1054 11
          </p>
          <p>
            <strong>BIC: </strong>SOLADES1HDB
          </p>
          <p>Sparkasse Heidelberg</p>
        </div>
        <div>
          <p>USt.-ID: DE 335 460 854</p>
        </div>
      </div>
    </>
  );
}
