import Card from "./Card";

export default function Board() {
  const events = [
    {
      title: "Qahwah House",
      description:
        "Experience the rich flavors of Yemeni coffee with the Qahwah House ",
      link: "https://qahwahhouse.com/",
      image: "Pictures/Qawah logo.png",
    },
    {
      title: "Haraz",
      description:
        "Haraz Coffee invites you to experience the rich heritage of Yemeni coffee creates an exceptional taste journey.",
      link: "https://www.harazcoffeehouse.com/",
      image: "Pictures/Haraz-logo.png",
    },
    {
      title: "Clubhouse Cafe",
      description:
        "A Social Enterprise Coffee Shop by South Bronx United, operated by Bronx youth.",
      link: "https://clubhousecafebx.com/",
      image: "Pictures/clubhouse.png",
    },
    {
      title: "% Arabica",
      description:
        "% Arabica is about my love for coffee, design, and seeing the world.",
      link: "https://arabica.com/en/",
      image: "Pictures/Percent_Arabica.jpeg",
    },
    {
      title: "MOKAFÉ",
      description:
        "Coffee drinking started in Yemen and then moved to the rest of the world. So, we wanted to bring it to America.",
      link: "https://mymokafe.com/",
      image: "Pictures/Mokafe-logo.jpg",
    },

    {
      title: "Moka & Co",
      description:
        "Moka & Co. is to connect the Western coffee consumer to rich Yemeni coffee and served with traditional recipes.",
      link: "https://www.mokanco.com/",
      image: "Pictures/moka.png",
    },
    {
      title: "Blank Street Coffee",
      description:
        "Made to be a daily ritual. Stay energized and make every day memorable",
      link: "https://www.blankstreet.com/",
      image: "Pictures/blank street.jpg",
    },
    {
      title: "The Chai Spot",
      description:
        "The Chai Spot is a cafe in NYC that serves a variety of Pakistani chai in a very colorful and cozy environment.",
      link: "https://www.thechaispot.com/",
      image: "Pictures/chaispot.png",
    },
    {
      title: "KOLKATA CHAI CAFE",
      description:
        "We’re always looking for a connection to home. For many immigrants, it’s about bringing a little part of their            culture to America.",
      link: "https://kolkatachai.co/",
      image: "Pictures/kolkata chai.webp",
    },
    {
      title: "Hungry Llama",
      description:
        "Hungry Llama is a vibrant all day cafe nestled in the far West Village. We have the foundation of a classic cafe          but with the added twist of culture.",
      link: "https://www.hungryllamacafe.com/",
      image: "Pictures/Hungry Llama.webp",
    },
  ];

  return (
    <div className="board">
      {events.map((event, index) => (
        <Card
          key={index}
          title={event.title}
          description={event.description}
          link={event.link}
          image={event.image}
        />
      ))}
    </div>
  );
}
