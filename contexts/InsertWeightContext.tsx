import { createContext, ReactNode, useState } from 'react';
import { formatDate } from '../shared/utils/formatDate';

type InsertWeightContextData = {
    weight: number;
    date: string;
    handleWeight: (weight: number) => void;
    handleDate: (date: string) => void;
}

export const InsertWeightContext = createContext({} as InsertWeightContextData);

type InsertWeightContextProviderProps = {
    children: ReactNode;
}

export function InsertWeightContextProvider({ children }: InsertWeightContextProviderProps) {
    
    const [weight, setWeight] = useState(0);    
    const [date, setDate] = useState(formatDate(new Date(), 'yyyy-MM-dd hh:mm').replace(' ', 'T'));

    function handleWeight(weight: number) {
        setWeight(weight);
    }

    function handleDate(date: string) {
        setDate(date)
    }

    // async function postWeight(weight: number, datetime: Date) {
    //     const { data } = await api.post('weight', {
    //         weights: [
    //             { weight, datetime }
    //         ]
    //     });
    //     getWeights();
    // }

    // async function getWeights() {
    //     const { data } = await api.get('weight');
    //     setWeights(data.weights);
    //     setGraphDates(data.weights.map(w => formatDate(w.datetime)));
    //     setGraphWeights(data.weights.map(w => w.weight));
    // }

    return (
        <InsertWeightContext.Provider value={{
            weight,
            date,
            handleWeight,
            handleDate
        }}>
            {children}
        </InsertWeightContext.Provider>
    )
}