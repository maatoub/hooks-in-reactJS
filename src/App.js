import Effect from "./effect/Effect";
import "bootstrap/dist/css/bootstrap.min.css";
import Ref from "./ref/Ref";
import Memo from "./memo/Memo";
import { Callback } from "./callback/Callback";
import Context from "./context/Context";
function App() {
  return (
    <div className="container">
      {/* <Effect /> */}
      {/* <Ref/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      <Context />
    </div>
  );
}

export default App;
