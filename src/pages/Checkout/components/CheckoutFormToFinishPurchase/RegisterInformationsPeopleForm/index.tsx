import { InputCheckoutWrapper, CepInputCheckout, StreetInputCheckout, NumberHouseInputCheckout, HouseComplementInputCheckout, NeighborhoodInputCheckout, CityInputCheckout, UFInputCheckout } from "./styles";
import { useFormContext } from "react-hook-form";

export function RegisterInformationsPeopleForm() {
  const { register } = useFormContext() 

  return(
    <InputCheckoutWrapper> 
      <CepInputCheckout
        type="text"
        placeholder="CEP"
        {...register("cep")}
      />
      <StreetInputCheckout
        type="text"
        placeholder="Rua"
        {...register("street")} 
      />
      <NumberHouseInputCheckout
        type="text"
        placeholder="Número"
        {...register("numberHouse")} 
      />
      <HouseComplementInputCheckout
        type="text"
        placeholder="Complemento"
        {...register("houseComplement")} 
      />
      <NeighborhoodInputCheckout
        type="text"
        placeholder="Bairro"
        {...register("neighborhood")} 
      />
      <CityInputCheckout
        type="text"
        placeholder="Rua"
        {...register("city")} 
      />
      <UFInputCheckout
        type="text"
        placeholder="UF"
        {...register("Uf")} 
      />
    </InputCheckoutWrapper>
  )
}