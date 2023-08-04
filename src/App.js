import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHeroesPage2 } from "./components/RQSuperHeroes2";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";
import InfiniteQueriesPage from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes2">RQ Super Heroes2</Link>
              </li>

              <li>
                <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel</Link>
              </li>

              <li>
                <Link to="/rq-dependent">RQ Dependent</Link>
              </li>
              <li>
                <Link to="/rq-pagination">Pagination</Link>
              </li>

              <li>
                <Link to="/infinite-query">Infinite Query</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            />
            <Route path="/infinite-query" element={<InfiniteQueriesPage />} />

            <Route path="/rq-pagination" element={<PaginatedQueriesPage />} />
            <Route
              path="/rq-dependent"
              element={<DependentQueriesPage email="rajeev@gmail.com" />}
            />

            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            />
            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/rq-super-heroes2" element={<RQSuperHeroesPage2 />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
