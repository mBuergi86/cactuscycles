export default function Page() {
  return (
    <div className="grid grid-flow-row justify-center">
      <div className="mt-7">
        <h2 className="text-4xl font-semibold leading-[4rem] underline underline-offset-4 decoration-turquoise-100">
          Danksagung
        </h2>
        <p className="mt-[2rem]">
          Ich bedanke mich bei allen, die mich motiviert und inspiriert haben,
        </p>
        <p>unterstützen, hinter mir standen und an mich Glauben:</p>

        <ul className=" list-disc ml-4 mt-4">
          <li>Alan G.</li>
          <li>Enya F.</li>
          <li>Justin M.</li>
          <li>Kerstin N.</li>
          <li>Manuel S.</li>
          <li>Marco Z.</li>
          <li>Markus B.</li>
          <li>Markus D.</li>
          <li>Markus F.</li>
          <li>Markus L.</li>
          <li>Nico K.</li>
          <li>Nico S.</li>
          <li>Reverse Components</li>
          <li>Yohandrys K.</li>
          <li className="list-none ml-[-1rem] mt-4">
            und noch viele andere die nicht beim Namen genannt werden wollen.
          </li>
        </ul>
      </div>
    </div>
  );
}
