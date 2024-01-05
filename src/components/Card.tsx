import { CardProps } from "../interfaces";


// const Card = (props: CardProps ) => {
    const Card = ({title , description} :  CardProps) =>{
    // const {title, description } = props;

    return (
    <div>
      <h4>{title}</h4>
      <h4>{description}</h4>
    </div>
  );
};

export default Card;
