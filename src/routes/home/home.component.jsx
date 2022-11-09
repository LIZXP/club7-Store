import Directory from "../../componets/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://images.pexels.com/photos/7270921/pexels-photo-7270921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://fashionmagazine.com/wp-content/uploads/2018/02/Dad-Sneakers-001-480x320-c-top.jpg",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
