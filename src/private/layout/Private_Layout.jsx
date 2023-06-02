import Main from "../../shared/components/main/Main";
import Right from "../../shared/components/right/Right";
import Aside from "./../../shared/components/aside/Aside";

function Private_Layout() {
  return (
    <div className="container">
      <Aside></Aside>
      <Main></Main>
      <Right></Right>
    </div>
  );
}

export default Private_Layout;
