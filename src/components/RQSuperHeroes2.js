import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

const RQSuperHeroesPage2 = () => {
  const onSuccess = (data) => {
    console.log("perform side effect after data feching", data);
  };

  const onError = (error) => {
    console.log("perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData(
    onSuccess,
    onError
  );

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  console.log(data);
  return (
    <>
      <h2>RQ Super Heroes page</h2>
      <button>Fetch Heroes</button>

      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export { RQSuperHeroesPage2 };
