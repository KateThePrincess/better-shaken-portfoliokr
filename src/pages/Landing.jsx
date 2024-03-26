import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { QueryClient, useQuery } from '@tanstack/react-query';

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'tonic'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};
export const loader =
  (QueryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    //search because its a name of the input
    const searchTerm = url.searchParams.get('search') || 'tonic';
    await QueryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  // const = useQuery();
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(
    searchCocktailsQuery(searchTerm)
  );

  if (isLoading) return <h4>Loading...</h4>;
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
};
export default Landing;
