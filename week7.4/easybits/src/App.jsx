import "./App.css";
import { jobsAtom, messagingAtom, networkAtom, totalNotificationSelector } from "./atoms";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Mainapp />
    </RecoilRoot>
  );
}

function Mainapp() {
  const networknotificationcount = useRecoilValue(networkAtom);
  const jobnotificationcount = useRecoilValue(jobsAtom);
  const [messagenotificationcount,setMessagenotificationcount] = useRecoilState(messagingAtom);
  const total = useRecoilValue(totalNotificationSelector);
  const finalvalue =
    networknotificationcount > 99
      ? "99+"
      : networknotificationcount;

  return (
    <>
      <button>Home</button>
      <button>My Network ({finalvalue})</button>
      <button>Jobs({jobnotificationcount})</button>
      <button>Notification({messagenotificationcount})</button>
      <button>Me({total})</button>
    </>
  );
}

export default App;