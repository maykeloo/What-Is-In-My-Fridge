import React, {useContext} from 'react'
import { Ingredients as Ing } from "../../pages/Home";
import { Subtitle } from './recipeElements';
import { Box, Content, Image, Title } from './similarElements';




const Similar = () => {

    const context = useContext(Ing);
        
    const { recipies, setId, setIndexOfRecipe  } = context;

    return (
        <>
            <Content>
                <Subtitle>Similar recipes</Subtitle>
                {recipies ? recipies.map((recipe,index) => <Box key={recipe.id} to={`/result/${recipe.id}`} onClick={() => {
                    setId(recipe.id)
                    setIndexOfRecipe(index)
                    }}><Image src={recipe.image}/><Title>{recipe.title}</Title></Box>) : null}
            </Content>
        </>
    )
}

export default Similar
