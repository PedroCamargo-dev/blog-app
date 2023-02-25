import moment from "moment";
import Container from "../components/core/container";
import Posts from "../components/Posts";

export default function Recents() {
  const timestamp = moment(
    "2023-02-21 18:07:00",
  ).fromNow();

  let rows = [];
  for (let i = 1; i <= 5; i++) {
    rows.push(
      <Posts
        title={`Teste${i}`}
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eius dolores debitis eos perspiciatis odit unde repellat aspernatur modi obcaecati, doloremque aperiam. Inventore architecto voluptatum quod alias. Nesciunt, culpa minima."
      />,
    );
  }

  const teste = [
    {
      title: "title1",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eius dolores debitis eos perspiciatis odit unde repellat aspernatur modi obcaecati, doloremque aperiam. Inventore architecto voluptatum quod alias. Nesciunt, culpa minima.",
    },
    {
      title: "title1",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eius dolores debitis eos perspiciatis odit unde repellat aspernatur modi obcaecati, doloremque aperiam. Inventore architecto voluptatum quod alias. Nesciunt, culpa minima.",
    },
    {
      title: "title1",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eius dolores debitis eos perspiciatis odit unde repellat aspernatur modi obcaecati, doloremque aperiam. Inventore architecto voluptatum quod alias. Nesciunt, culpa minima.",
    },
    {
      title: "title1",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eius dolores debitis eos perspiciatis odit unde repellat aspernatur modi obcaecati, doloremque aperiam. Inventore architecto voluptatum quod alias. Nesciunt, culpa minima.",
    },
    {
      title: "title1",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eius dolores debitis eos perspiciatis odit unde repellat aspernatur modi obcaecati, doloremque aperiam. Inventore architecto voluptatum quod alias. Nesciunt, culpa minima.",
    },
  ];

  return (
    <Container>
      <ol className="border-l border-neutral-300 dark:border-neutral-500 ">
        {teste.map((teste) => (
          <Posts
            title={teste.title}
            text={teste.text}
          />
        ))}
      </ol>
    </Container>
  );
}
