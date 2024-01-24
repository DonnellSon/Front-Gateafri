import { useContext } from "react"
import CurrencyContext from "../context/CurrencyContext"
import { convertCurrency } from "../utils/currencyUtils"

export const useCurrencyConverter = (amount, from, to) => {
    const { currenciesBaseUSD } = useContext(CurrencyContext)
    if (currenciesBaseUSD[from] && currenciesBaseUSD[to]) {
        if(Array.isArray(amount)){
            return amount.map(a=>convertCurrency(a, currenciesBaseUSD[from], currenciesBaseUSD[to]))
        }
        return convertCurrency(amount, currenciesBaseUSD[from], currenciesBaseUSD[to])
    } else {
        return null
    }
}
