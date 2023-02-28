import moment from "moment";
import Container from "../../components/core/container";
import Posts from "../../components/Posts";

export default function Recents() {
  const timestamp = moment(
    "2023-02-21 18:07:00",
  ).fromNow();

  let rows = [];
  for (let i = 1; i <= 5; i++) {
    rows.push(
      <Posts
        title={`Teste${i}`}
        author="Pedro"
      />,
    );
  }

  const teste = [
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
    {
      title:
        "Descomplicando as importações usando Vite e Typescript Typescript Typescript Typescript Typescript",
      author: "Pedro",
    },
  ];

  return (
    <Container>
      <ol className="border-l border-neutral-300 dark:border-neutral-500 ">
        {teste.map((teste, i) => (
          <Posts
            title={`${i + 1}. ${
              teste.title
            }`}
            author={teste.author}
          />
        ))}
      </ol>
    </Container>
  );
}
