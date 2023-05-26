import { InputCheckoutWrapper, CepInputCheckout, StreetInputCheckout, NumberHouseInputCheckout, NeighborhoodInputCheckout, CityInputCheckout, UFInputCheckout, NeighborhoodInputCheckoutWrapper, BaseInputCheckout } from "./styles";
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

			<NeighborhoodInputCheckoutWrapper>
			<BaseInputCheckout
					type="text"
					placeholder="Complemento"
					{...register("houseComplement")} 
				/>
				<span>Opcional</span>
			</NeighborhoodInputCheckoutWrapper>
				
			
      
      <NeighborhoodInputCheckout
        type="text"
        placeholder="Bairro"
        {...register("neighborhood")} 
      />
      <CityInputCheckout
        type="text"
        placeholder="Cidade"
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