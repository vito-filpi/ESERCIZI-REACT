import useSWR from "swr";

const useGithubUser = (username) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // Evita la richiesta se username è null
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    refetch: mutate, // Funzione per aggiornare manualmente i dati
  };
};

export default useGithubUser;
