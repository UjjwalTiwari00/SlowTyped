import { faker } from '@faker-js/faker'
import { useCallback, useState } from 'react';

const generateFnc=(count:number)=>{
    return faker.word.words(count).toLowerCase(); 
}

const ShownText = (count:number) => {
    const [word,Setword]=useState<string>(generateFnc(count));

    const UseWords= useCallback(()=>{
        Setword(generateFnc(count));
    },[count])

    return {word,UseWords};
}

export default ShownText