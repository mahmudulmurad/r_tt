import { UserProvider, useUser } from "./context";
function Top() {
  return (
    <>
      <div>Top</div>
      <TopC1 />
    </>
  );
}
function TopC1() {
  return (
    <>
      <div>Tops First layer child</div>
      <TopC1D1 />
    </>
  );
}

function TopC1D1() {
  const { user, updateUser } = useUser();
  const onUpdate = (e) => {
    e?.preventDefault();
    updateUser({ username: "murad", email: "m@gmail.com" });
  };
  return (
    <>
      <div>
        {user.username} - {user.email}
      </div>
      <button onClick={(event) => onUpdate(event)}>Change</button>
      <div>Tops Second layer child</div>
    </>
  );
}

function Mid() {
  const { user } = useUser();
  return (
    <div>
      Mid - {user.username}-- {user.email}
    </div>
  );
}

function Bottom() {
  const { updateUser } = useUser();
  const onUpdate = (e) => {
    e?.preventDefault();
    updateUser({ username: "BOTTOM", email: "BOTTOM@gmail.com" });
  };

  return (
    <button onClick={(event) => onUpdate(event)}>Change From Bottom</button>
  );
}
function Container() {
  return (
    <>
      <Top />
      <Mid />
      <Bottom />
    </>
  );
}

function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>Landing</div>
      <UserProvider>
        <Container />
      </UserProvider>
    </div>
  );
}
export default Landing;
