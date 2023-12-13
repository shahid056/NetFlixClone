import Mains from "../component/Mains";
import Row from "../component/Row";
import request from "../request";

function Home() {
  return (
    <div>
      <Mains />
      <Row rowId="1" title="Up Coming" fetchURL={request.requestupcoming} />
      <Row rowId="2" title="Popular" fetchURL={request.requestPopular} />
      <Row rowId="3" title="Top Rated" fetchURL={request.requestTopRated} />
      <Row rowId="4" title="Trending" fetchURL={request.requestTranding} />
      <Row rowId="5" title="Horror" fetchURL={request.requestHorror} />
    </div>
  );
}
export default Home;
