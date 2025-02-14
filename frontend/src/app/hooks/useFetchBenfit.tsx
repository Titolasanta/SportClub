
import { BenefitInfo } from '../interface/BenefitApi';
import { useFetch} from './useFetch';
// useFetchBenefits hook that reuses useFetch


export const useFetchBenefits = (url: string) => {
    const { data, loading, error } = useFetch<BenefitInfo>(url);
    return { data: data?.beneficios ? data?.beneficios : [], loading, error }; // Only return the necessary values
};