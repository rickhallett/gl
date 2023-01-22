import { testData, datum, calculateResult } from "./utils/algorithm";
import "./algorithm.css";

export function Algorithm() {
  return (
    <div>
      <h1 className="array-title">Algorithm Results</h1>
      <div className="array-container">
        {testData.map((data: datum) => (
          <Datum data={data} />
        ))}
      </div>
    </div>
  );
}

function Datum({ data }: { data: datum }) {
  return <Array data={data} />;
}

const Array = ({ data }: { data: datum }): JSX.Element => {
  return (
    <div className="array-container__data">
      {data.arr.map((num: number, i: number) => (
        <ElementCard num={num} />
      ))}
      {"=>"}
      <SignCard data={data} />
    </div>
  );
};

const ElementCard = ({ num }: { num: number }): JSX.Element => {
  return <div className="element-card">{num}</div>;
};

const SignCard = ({ data }: { data: datum }): JSX.Element => {
  return <div className="element-card__sign">{calculateResult(data.arr)}</div>;
};
