export interface Person {
    firstName: string;
    lastName: string;
  }

  interface Rating {
    count : number,
    rate : number
}

export interface MyObj {
    category : string,
    description : string,
    id : number,
    image : string,
    price : number,
    rating : Rating,
    title : string
}

export interface Data {
    firstName : string,
    lastName : string,
    age : number
}

export interface CardProps {
    title : string,
    description : string
}

export interface CreateTodo {
    title : string,
    description : string
}

export interface Todos {
    _id : number,
    title : string,
    description : string,
    completed : boolean,
  }

export const data = [
    {
        id : 1,
        title : "First Card",
        description : "Hi There, This is the First Card"
    },
    {
        id : 2,
        title : "Second Card",
        description : "Hi There, This is the Second Card"
    },
    {
        id : 3,
        title : "Third Card",
        description : "Hi There, This is the Third Card"
    },
    {
        id : 4,
        title : "Fourth Card",
        description : "Hi There, This is the Fourth Card"
    }
]