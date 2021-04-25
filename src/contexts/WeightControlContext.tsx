import { parseISO } from 'date-fns';
import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { formatDate } from '../shared/utils/formatDate';
import { InsertWeightContext } from './InsertWeightContext';

type Weight = {
    _id: string;
    weight: number;
    datetime: string;
}

type WeightControlContextData = {
    weights: Weight[];
    graphDates: string[];
    graphWeights: number[];
    postWeight: (weight: Number, date: string) => void;
    getWeights: () => void;
    removeWeight: (weight: Weight) => void;
}

export const WeightControlContext = createContext({} as WeightControlContextData);

type WeightControlContextProviderProps = {
    children: ReactNode;
}

export function WeightControlContextProvider({ children }: WeightControlContextProviderProps) {
    const [weights, setWeights] = useState([]);
    const [graphDates, setGraphDates] = useState([]);
    const [graphWeights, setGraphWeights] = useState([]);

    async function postWeight(weight: number, date: string) {
        const dateObj = parseISO(date);
        await api.post('weight', {
            weights: [
                {
                    weight,
                    datetime: dateObj.toISOString()
                }
            ]
        });
        getWeights();
    }

    async function getWeights() {
        const { data } = await api.get('weight');
        setWeights(data.weights);
        setGraphDates(data.weights.map(w => formatDate(w.datetime)));
        setGraphWeights(data.weights.map(w => w.weight));
    }

    async function removeWeight(weight: Weight) {
        await api.delete('weight', {
            data: {
                weightId: weight._id
            }
        });
        getWeights();
    }

    return (
        <WeightControlContext.Provider value={{
            weights,
            graphDates,
            graphWeights,
            postWeight,
            getWeights,
            removeWeight
        }}>
            {children}
        </WeightControlContext.Provider>
    )
}