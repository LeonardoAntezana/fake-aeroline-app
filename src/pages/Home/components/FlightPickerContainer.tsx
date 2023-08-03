import { FlightPicker } from ".";
import { getDestinations } from "../../../services";
import { usePromise } from "../../../hooks";

const FlightPickerContainer = () => {

  const { data = [] } = usePromise(getDestinations);

  return (
    <section className="container__pickers">
      <FlightPicker className="picker" title="Origen" items={data}/>
      <FlightPicker className="picker" title="Destino" items={data}/>
    </section>
  )
}

export default FlightPickerContainer;