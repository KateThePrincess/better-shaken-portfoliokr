import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from '../components/CocktailCard';

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found.</h4>
    );
  }
  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((formattedDrink) => {
        return <CocktailCard key={formattedDrink.id} {...formattedDrink} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
