import TwitterFollowCard from "./TwitterFollowCard";
function App() {
  const users = [
    {
      name: "Zagreus del estigia",
      userName: "hades",
      isFollowing: true
    },
    {
      name: "Hobar Uparela",
      userName: "huparelaa",
      isFollowing: false
    },
    {
      name: "MiduDev",
      userName: "midudev",
      isFollowing: false
    }
  ];
  return (
    <section className="App">
      {users.map(({ name, userName, isFollowing }) => (
        <TwitterFollowCard userName={userName} previousFollowing={isFollowing} key={userName}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
export default App;
