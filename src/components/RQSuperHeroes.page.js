import { useQuery } from "react-query";

import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("perform side effect after data feching", data);
  };

  const onError = (error) => {
    console.log("perform side effect after encountering error", error);
  };
  // const { isLoading, data, isError, error, isFetching } = useQuery(
  //   "super-heroes",
  //   fetchSuperHeroes,
  //   {
  //     // cacheTime: 5000, // default is 5 minutes
  //     // staleTime: 30000, //default 0
  //     // refetchOnMount: false, // default true
  //     // refetchOnWindowFocus: true, // default ture
  //     refetchInterval: 2000, // only on focus
  //     refetchIntervalInBackground: true, // when also not in focus
  //   }
  // );

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      enabled: false,
      onSuccess,
      onError,
      select: (data) => {
        const superHeroNames = data?.data?.map((hero) => hero.name);
        return superHeroNames;
      },
    }
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
    // <>
    //   <h2>RQ Super Heroes page</h2>
    //   <button onClick={refetch}>Fetch Heroes</button>
    //   {data?.data.map((hero) => {
    //     return <div key={hero.name}>{hero.name}</div>;
    //   })}
    //   )
    // </>

    <>
      <h2>RQ Super Heroes page</h2>
      <button onClick={refetch}>Fetch Heroes</button>

      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};

export { RQSuperHeroesPage };
