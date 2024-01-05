import { data } from "../interfaces";
import Card from "./Card";

const Body = () => {
  return (
    <div>
      {data.map((res) => {
        return (
          <div key={res.id}>
            <Card title={res.title} description={res.description} />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
